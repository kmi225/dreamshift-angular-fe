import { Component, Input, computed, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import * as XLSX from 'xlsx';
import * as XLSXStyle from 'xlsx-js-style';
import { getRenderer, registerRenderer } from 'handsontable/renderers';
import { textRenderer } from 'handsontable/renderers/textRenderer';
import type { CellProperties } from 'handsontable/settings';
import {
  GridSettings,
  HotTableModule,
} from '@handsontable/angular-wrapper';

const EXCEL_STYLE_RENDERER = 'excelStyleRenderer';

export interface ExcelCellStyle {
  bg?: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
}

/** Shared ref so the renderer can read current styles (avoids cells callback timing issues in the Angular wrapper). */
const cellStylesRef: { current: Record<string, ExcelCellStyle> } = { current: {} };

function rgbToHex(rgb: string): string {
  if (!rgb || typeof rgb !== 'string') return '';
  const s = rgb.replace(/^#/, '').toUpperCase();
  if (s.length === 8) return '#' + s.slice(2);
  if (s.length === 6) return '#' + s;
  return '';
}

/** ExcelJS uses ARGB (e.g. FFB6D7A8); convert to #RRGGBB */
function argbToHex(argb: string | undefined): string {
  if (!argb || typeof argb !== 'string') return '';
  const s = argb.replace(/^#/, '').toUpperCase();
  if (s.length === 8) return '#' + s.slice(2);
  if (s.length === 6) return '#' + s;
  return '';
}

function isNoFillSentinel(rgb: string): boolean {
  const upper = rgb.toUpperCase();
  return (
    upper === '00000000' ||
    upper === 'FFFFFF00' ||
    upper === '000000' ||
    upper === 'FFFFFF'
  );
}

function excelStyleRenderer(
  hotInstance: unknown,
  TD: HTMLTableCellElement,
  row: number,
  col: number,
  prop: string | number,
  value: unknown,
  cellProperties: CellProperties
): void {
  textRenderer(hotInstance as never, TD, row, col, prop, value, cellProperties);
  const style = cellStylesRef.current[`${row},${col}`];
  if (style && Object.keys(style).length === 0) return;
  if (style?.bg) TD.style.setProperty('background-color', style.bg, 'important');
  if (style?.color) TD.style.setProperty('color', style.color, 'important');
  if (style?.bold) TD.style.setProperty('font-weight', 'bold', 'important');
  if (style?.italic) TD.style.setProperty('font-style', 'italic', 'important');
  if (style?.borderTop) TD.style.setProperty('border-top', style.borderTop, 'important');
  if (style?.borderRight) TD.style.setProperty('border-right', style.borderRight, 'important');
  if (style?.borderBottom) TD.style.setProperty('border-bottom', style.borderBottom, 'important');
  if (style?.borderLeft) TD.style.setProperty('border-left', style.borderLeft, 'important');
}

@Component({
  selector: 'app-excel-preview',
  standalone: true,
  imports: [HotTableModule],
  templateUrl: './excel-preview.component.html',
  styleUrl: './excel-preview.component.scss',
})
export class ExcelPreviewComponent implements OnInit {
  @Input({ required: true }) xlsxUrl!: string;
  @Input() csvUrl?: string;
  @Input() extraEmptyRows = 0;
  @Input() extraEmptyCols = 0;

  readonly sheetData = signal<unknown[][]>([]);
  readonly mergeCells = signal<Array<{ row: number; col: number; rowspan: number; colspan: number }>>([]);
  readonly cellStyles = signal<Record<string, ExcelCellStyle>>({});
  readonly loadError = signal<string | null>(null);
  readonly loading = signal(true);
  readonly isBrowser = signal(false);

  readonly gridSettings = computed<GridSettings>(() => {
    const mergeCells = this.mergeCells();

    return {
      rowHeaders: true,
      colHeaders: true,
      height: 'auto',
      readOnly: true,
      licenseKey: 'non-commercial-and-evaluation',
      mergeCells: mergeCells.length ? mergeCells : undefined,
      renderer: EXCEL_STYLE_RENDERER,
    };
  });

  constructor(
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {
    if (typeof getRenderer !== 'undefined' && typeof registerRenderer !== 'undefined') {
      try {
        registerRenderer(EXCEL_STYLE_RENDERER, excelStyleRenderer as never);
      } catch {
        // already registered
      }
    }
  }

  ngOnInit(): void {
    if (!this.xlsxUrl) {
      this.loadError.set('No Excel URL provided.');
      this.loading.set(false);
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser.set(true);
      this.loadTemplate();
    } else {
      this.loading.set(false);
    }
  }

  private loadTemplate(): void {
    this.http
      .get(this.xlsxUrl, { responseType: 'arraybuffer' })
      .subscribe({
        next: (buffer) => void this.parseXlsx(buffer),
        error: () => this.loadCsvFallback(),
      });
  }

  private async parseXlsx(buffer: ArrayBuffer): Promise<void> {
    try {
      const ok = await this.parseXlsxWithExcelJS(buffer);
      if (ok) return;
      this.parseXlsxWithXlsxStyle(buffer);
    } catch (err) {
      this.loadError.set(
        err instanceof Error ? err.message : 'Failed to parse Excel file'
      );
    } finally {
      this.loading.set(false);
    }
  }

  /** Parse with ExcelJS to get font + fill; returns true if successful. */
  private async parseXlsxWithExcelJS(buffer: ArrayBuffer): Promise<boolean> {
    const mod = await import('exceljs');
    // Production bundles often expose CJS modules as default; support both shapes.
    const ExcelJS = mod.default?.Workbook ? mod.default : mod;
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer as unknown as ArrayBuffer);
    const ws = workbook.worksheets[0];
    if (!ws) return false;

    const dimensions = (ws as { dimensions?: { bottom: number; right: number } }).dimensions;
    let maxRow = dimensions?.bottom ?? 0;
    let maxCol = dimensions?.right ?? 0;
    if (maxRow > 0) maxRow += this.extraEmptyRows;
    if (maxCol > 0) maxCol += this.extraEmptyCols;
    if (maxRow === 0 || maxCol === 0) return false;

    const data: unknown[][] = [];
    const styles: Record<string, ExcelCellStyle> = {};

    for (let r = 1; r <= maxRow; r++) {
      const row: unknown[] = [];
      for (let c = 1; c <= maxCol; c++) {
        const cell = ws.getCell(r, c);
        const value = cell.value;
        row.push(value != null && typeof value === 'object' && 'text' in value ? (value as { text: string }).text : value ?? '');
        const style = cell.style;
        if (style) {
          const entry: ExcelCellStyle = {};

          const fill = style.fill as { fgColor?: { argb?: string }; bgColor?: { argb?: string } } | undefined;
          const fg = fill?.fgColor?.argb ?? fill?.bgColor?.argb;
          if (fg && !isNoFillSentinel(fg)) entry.bg = argbToHex(fg);

          const font = style.font as { color?: { argb?: string }; bold?: boolean; italic?: boolean } | undefined;
          if (font?.color?.argb) entry.color = argbToHex(font.color.argb);
          if (font?.bold) entry.bold = true;
          if (font?.italic) entry.italic = true;

          const border = style.border as {
            top?: { style?: string; color?: { argb?: string } };
            right?: { style?: string; color?: { argb?: string } };
            bottom?: { style?: string; color?: { argb?: string } };
            left?: { style?: string; color?: { argb?: string } };
          } | undefined;

          const styleToPx = (s?: string): number => {
            if (!s) return 1;
            const lower = s.toLowerCase();
            if (lower === 'hair' || lower === 'thin') return 1;
            if (lower === 'medium') return 2;
            if (lower === 'thick' || lower === 'double') return 3;
            return 1;
          };

          if (border) {
            const defaultColor = '#000000';

            if (border.top) {
              const color = border.top.color?.argb ? argbToHex(border.top.color.argb) || defaultColor : defaultColor;
              const width = styleToPx(border.top.style);
              entry.borderTop = `${width}px solid ${color}`;
            }
            if (border.right) {
              const color = border.right.color?.argb ? argbToHex(border.right.color.argb) || defaultColor : defaultColor;
              const width = styleToPx(border.right.style);
              entry.borderRight = `${width}px solid ${color}`;
            }
            if (border.bottom) {
              const color = border.bottom.color?.argb ? argbToHex(border.bottom.color.argb) || defaultColor : defaultColor;
              const width = styleToPx(border.bottom.style);
              entry.borderBottom = `${width}px solid ${color}`;
            }
            if (border.left) {
              const color = border.left.color?.argb ? argbToHex(border.left.color.argb) || defaultColor : defaultColor;
              const width = styleToPx(border.left.style);
              entry.borderLeft = `${width}px solid ${color}`;
            }
          }

          if (Object.keys(entry).length) styles[`${r - 1},${c - 1}`] = entry;
        }
      }
      data.push(row);
    }

    const merges: Array<{ row: number; col: number; rowspan: number; colspan: number }> = [];
    const model = (ws as unknown as { model?: { merges?: Array<{ top: number; left: number; bottom: number; right: number } | string> } }).model;
    const mergeList = model?.merges;
    if (mergeList?.length) {
      for (const m of mergeList) {
        if (typeof m === 'object' && m != null && 'top' in m) {
          const o = m as { top: number; left: number; bottom: number; right: number };
          merges.push({
            row: o.top - 1,
            col: o.left - 1,
            rowspan: o.bottom - o.top + 1,
            colspan: o.right - o.left + 1,
          });
        } else if (typeof m === 'string' && m.includes(':')) {
          const [tl, br] = m.split(':');
          if (tl && br) {
            const s = XLSX.utils.decode_cell(tl);
            const e = XLSX.utils.decode_cell(br);
            merges.push({
              row: s.r,
              col: s.c,
              rowspan: e.r - s.r + 1,
              colspan: e.c - s.c + 1,
            });
          }
        }
      }
    }

    this.sheetData.set(data);
    this.mergeCells.set(merges);
    this.cellStyles.set(styles);
    cellStylesRef.current = styles;
    this.loadError.set(null);
    return true;
  }

  /** Fallback when ExcelJS is unavailable or fails; xlsx-js-style often only exposes fill. */
  private parseXlsxWithXlsxStyle(buffer: ArrayBuffer): void {
    try {
      const workbook = XLSXStyle.read(buffer, { type: 'array', cellStyles: true });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName] as Record<
        string,
        {
          s?: {
            fill?: { fgColor?: { rgb?: string }; bgColor?: { rgb?: string } };
            fgColor?: { rgb?: string };
            bgColor?: { rgb?: string };
            font?: { color?: { rgb?: string }; bold?: boolean; italic?: boolean };
          };
        }
      >;

      const rawData = XLSXStyle.utils.sheet_to_json<unknown[]>(sheet, {
        header: 1,
        defval: '',
      }) as unknown[][];

      // Normalise to a full rectangle so Handsontable doesn't "hide" columns
      // that only appear on later rows in the template.
      const maxColsXlsx = rawData.reduce(
        (max, row) => (row.length > max ? row.length : max),
        0,
      );
      const baseData = maxColsXlsx
        ? rawData.map((row) =>
            Array.from({ length: maxColsXlsx }, (_, i) =>
              i < row.length ? row[i] : '',
            ),
          )
        : rawData;

      const data =
        maxColsXlsx === 0
          ? baseData
          : [
              ...baseData,
              ...Array.from({ length: this.extraEmptyRows }, () =>
                Array.from({ length: maxColsXlsx + this.extraEmptyCols }, () => ''),
              ),
            ];

      this.sheetData.set(data);

      const merges: Array<{ row: number; col: number; rowspan: number; colspan: number }> = [];
      const rangeList = (sheet as { '!merges'?: Array<{ s: { r: number; c: number }; e: { r: number; c: number } }> })['!merges'];
      if (rangeList?.length) {
        for (const r of rangeList) {
          merges.push({
            row: r.s.r,
            col: r.s.c,
            rowspan: r.e.r - r.s.r + 1,
            colspan: r.e.c - r.s.c + 1,
          });
        }
      }
      this.mergeCells.set(merges);

      const styles: Record<string, ExcelCellStyle> = {};
      const cellRef = /^[A-Z]+[0-9]+$/;

      for (const key of Object.keys(sheet)) {
        if (!cellRef.test(key)) continue;
        const cell = sheet[key];
        const s = cell?.s;
        if (!s) continue;

        const decoded = XLSXStyle.utils.decode_cell(key);
        const cellKey = `${decoded.r},${decoded.c}`;
        let entry = styles[cellKey];
        if (!entry) {
          entry = {};
          styles[cellKey] = entry;
        }

        const fillRgb =
          s.fill?.fgColor?.rgb ??
          s.fill?.bgColor?.rgb ??
          s.fgColor?.rgb ??
          s.bgColor?.rgb;
        if (fillRgb && typeof fillRgb === 'string' && !isNoFillSentinel(fillRgb)) {
          entry.bg = rgbToHex(fillRgb);
        }

        const fontRgb = s.font?.color?.rgb;
        if (fontRgb && typeof fontRgb === 'string') entry.color = rgbToHex(fontRgb);
        if (s.font?.bold) entry.bold = true;
        if (s.font?.italic) entry.italic = true;

        const border = (s as {
          border?: {
            top?: { style?: string; color?: { rgb?: string } };
            right?: { style?: string; color?: { rgb?: string } };
            bottom?: { style?: string; color?: { rgb?: string } };
            left?: { style?: string; color?: { rgb?: string } };
          };
        }).border as
          | {
              top?: { style?: string; color?: { rgb?: string } };
              right?: { style?: string; color?: { rgb?: string } };
              bottom?: { style?: string; color?: { rgb?: string } };
              left?: { style?: string; color?: { rgb?: string } };
            }
          | undefined;

        const styleToPx = (st?: string): number => {
          if (!st) return 1;
          const lower = st.toLowerCase();
          if (lower === 'hair' || lower === 'thin') return 1;
          if (lower === 'medium') return 2;
          if (lower === 'thick' || lower === 'double') return 3;
          return 1;
        };

        if (border) {
          const defaultColor = '#000000';

          if (border.top) {
            const color = border.top.color?.rgb ? rgbToHex(border.top.color.rgb) || defaultColor : defaultColor;
            const width = styleToPx(border.top.style);
            entry.borderTop = `${width}px solid ${color}`;
          }
          if (border.right) {
            const color = border.right.color?.rgb ? rgbToHex(border.right.color.rgb) || defaultColor : defaultColor;
            const width = styleToPx(border.right.style);
            entry.borderRight = `${width}px solid ${color}`;
          }
          if (border.bottom) {
            const color = border.bottom.color?.rgb ? rgbToHex(border.bottom.color.rgb) || defaultColor : defaultColor;
            const width = styleToPx(border.bottom.style);
            entry.borderBottom = `${width}px solid ${color}`;
          }
          if (border.left) {
            const color = border.left.color?.rgb ? rgbToHex(border.left.color.rgb) || defaultColor : defaultColor;
            const width = styleToPx(border.left.style);
            entry.borderLeft = `${width}px solid ${color}`;
          }
        }
      }

      this.cellStyles.set(styles);
      cellStylesRef.current = styles;
      this.loadError.set(null);
    } catch (err) {
      this.loadError.set(
        err instanceof Error ? err.message : 'Failed to parse Excel file'
      );
    }
  }

  private loadCsvFallback(): void {
    const csvUrl = this.csvUrl ?? this.xlsxUrl.replace(/\.xlsx$/i, '.csv');
    if (!csvUrl) {
      this.loadError.set('Template not found. CSV fallback URL not provided.');
      this.loading.set(false);
      return;
    }

    this.http.get(csvUrl, { responseType: 'text' }).subscribe({
      next: (csv) => this.parseCsv(csv),
      error: () => {
        this.loadError.set(
          'Template not found. Add the Excel/CSV template file to the public folder.'
        );
        this.loading.set(false);
      },
    });
  }

  private parseCsv(csv: string): void {
    try {
      const workbook = XLSX.read(csv, { type: 'string', raw: true });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const rawData = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
        header: 1,
        defval: '',
      }) as unknown[][];

      // Normalise to a full rectangle so Handsontable doesn't "hide" columns
      // that only appear on later rows in the CSV.
      const maxColsCsv = rawData.reduce(
        (max, row) => (row.length > max ? row.length : max),
        0,
      );
      const baseData = maxColsCsv
        ? rawData.map((row) =>
            Array.from({ length: maxColsCsv }, (_, i) =>
              i < row.length ? row[i] : '',
            ),
          )
        : rawData;

      const data =
        maxColsCsv === 0
          ? baseData
          : [
              ...baseData,
              ...Array.from({ length: this.extraEmptyRows }, () =>
                Array.from({ length: maxColsCsv + this.extraEmptyCols }, () => ''),
              ),
            ];

      this.sheetData.set(data);
      this.mergeCells.set([]);
      this.cellStyles.set({});
      cellStylesRef.current = {};
      this.loadError.set(null);
    } catch (err) {
      this.loadError.set(
        err instanceof Error ? err.message : 'Failed to parse CSV'
      );
    } finally {
      this.loading.set(false);
    }
  }
}
