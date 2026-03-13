import { Component, computed, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
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

const TEMPLATE_XLSX_URL = '/Connection%20Bank%20Template%20-%20DreamShift.xlsx';
const TEMPLATE_CSV_URL = '/Connection%20Bank%20Template%20-%20DreamShift.csv';

const EXCEL_STYLE_RENDERER = 'excelStyleRenderer';

/** Shared ref so the renderer can read current styles (avoids cells callback timing issues in the Angular wrapper). */
const cellStylesRef: { current: Record<string, string> } = { current: {} };

// function rgbToHex(rgb: string): string {
//   if (!rgb || typeof rgb !== 'string') return '';
//   const s = rgb.replace(/^#/, '').toUpperCase();
//   if (s.length === 8) return '#' + s.slice(2);
//   if (s.length === 6) return '#' + s;
//   return '';
// }

function rgbToHex(rgb: string): string {
  if (!rgb || typeof rgb !== 'string') return '';
  const s = rgb.replace(/^#/, '').toUpperCase();
  // ARGB format (8 chars) — strip alpha channel prefix
  if (s.length === 8) return '#' + s.slice(2);
  // Standard RGB (6 chars)
  if (s.length === 6) return '#' + s;
  return '';
}

function excelStyleRenderer(
  hotInstance: unknown,
  TD: HTMLTableCellElement,
  row: number,
  col: number,
  prop: string | number,
  value: unknown,
  cellProperties: CellProperties & { excelBg?: string }
): void {
  textRenderer(hotInstance as never, TD, row, col, prop, value, cellProperties);
  const bg = cellStylesRef.current[`${row},${col}`];
  // if (bg) TD.style.backgroundColor = bg;
  if (bg) TD.style.setProperty('background-color', bg, 'important');
}

@Component({
  selector: 'app-connection-bank',
  imports: [HotTableModule],
  templateUrl: './connection-bank.component.html',
  styleUrl: './connection-bank.component.scss',
})
export class ConnectionBankComponent implements OnInit {
  readonly sheetData = signal<unknown[][]>([]);
  readonly mergeCells = signal<Array<{ row: number; col: number; rowspan: number; colspan: number }>>([]);
  readonly cellStyles = signal<Record<string, string>>({});
  readonly loadError = signal<string | null>(null);
  readonly loading = signal(true);
  readonly isBrowser = signal(false);

  readonly gridSettings = computed<GridSettings>(() => {
    const mergeCells = this.mergeCells();
    const cellStylesMap = this.cellStyles();

    return {
      rowHeaders: true,
      colHeaders: true,
      height: 'auto',
      readOnly: true,
      licenseKey: 'non-commercial-and-evaluation',
      mergeCells: mergeCells.length ? mergeCells : undefined,
      renderer: EXCEL_STYLE_RENDERER,
      cells: (row: number, col: number) => {
        const bg = cellStylesMap[`${row},${col}`];
        return bg ? { excelBg: bg } : {};
      },
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
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser.set(true);
      this.loadTemplate();
    } else {
      this.loading.set(false);
    }
  }

  private loadTemplate(): void {
    this.http
      .get(TEMPLATE_XLSX_URL, { responseType: 'arraybuffer' })
      .subscribe({
        next: (buffer) => this.parseXlsx(buffer),
        error: () => this.loadCsvFallback(),
      });
  }

  // private parseXlsx(buffer: ArrayBuffer): void {
  //   console.log('Parsing XLSX');
  //   try {
  //     const workbook = XLSXStyle.read(buffer, { type: 'array', cellStyles: true });
  //     const firstSheetName = workbook.SheetNames[0];
  //     const sheet = workbook.Sheets[firstSheetName] as Record<string, { v?: unknown; s?: { fill?: { fgColor?: { rgb?: string } } } }>;
  //     const data = XLSXStyle.utils.sheet_to_json<unknown[]>(sheet, {
  //       header: 1,
  //       defval: '',
  //     }) as unknown[][];
  //     this.sheetData.set(data);

  //     const merges: Array<{ row: number; col: number; rowspan: number; colspan: number }> = [];
  //     const rangeList = (sheet as { '!merges'?: Array<{ s: { r: number; c: number }; e: { r: number; c: number } }> })['!merges'];
  //     if (rangeList?.length) {
  //       for (const r of rangeList) {
  //         merges.push({
  //           row: r.s.r,
  //           col: r.s.c,
  //           rowspan: r.e.r - r.s.r + 1,
  //           colspan: r.e.c - r.s.c + 1,
  //         });
  //       }
  //     }
  //     this.mergeCells.set(merges);

  //     const styles: Record<string, string> = {};
  //     const cellRef = /^[A-Z]+[0-9]+$/;
  //     for (const key of Object.keys(sheet)) {
  //       if (!cellRef.test(key)) continue;
  //       const cell = sheet[key] as { s?: { fill?: { fgColor?: { rgb?: string }; bgColor?: { rgb?: string } }; fgColor?: { rgb?: string }; bgColor?: { rgb?: string } } } | undefined;
  //       const s = cell?.s;
  //       if (!s) continue;
  //       // When reading, xlsx-js-style puts fill colors in s.fgColor/s.bgColor; when writing they're under s.fill
  //       const rgb =
  //         s.fill?.fgColor?.rgb ??
  //         s.fill?.bgColor?.rgb ??
  //         s.fgColor?.rgb ??
  //         s.bgColor?.rgb;
  //       if (rgb) {
  //         const decoded = XLSXStyle.utils.decode_cell(key);
  //         styles[`${decoded.r},${decoded.c}`] = rgbToHex(rgb);
  //       }
  //     }
  //     this.cellStyles.set(styles);
  //     cellStylesRef.current = styles;
  //     this.loadError.set(null);
  //   } catch (err) {
  //     this.loadError.set(
  //       err instanceof Error ? err.message : 'Failed to parse Excel file'
  //     );
  //   } finally {
  //     this.loading.set(false);
  //   }
  // }

  private parseXlsx(buffer: ArrayBuffer): void {
    try {
      // Use plain xlsx for reading — more reliable style extraction than xlsx-js-style
      const workbook = XLSX.read(buffer, { type: 'array', cellStyles: true });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
  
      const data = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
        header: 1,
        defval: '',
      }) as unknown[][];
      this.sheetData.set(data);
  
      // Merges
      const merges: Array<{ row: number; col: number; rowspan: number; colspan: number }> = [];
      const rangeList = (sheet as any)['!merges'];
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
  
      // Styles
      const styles: Record<string, string> = {};
      const cellRef = /^[A-Z]+[0-9]+$/;
  
      for (const key of Object.keys(sheet)) {
        if (!cellRef.test(key)) continue;
        const cell = (sheet as any)[key];
        const s = cell?.s;
        if (!s) continue;
        console.log("CONTINUE 0", s);
  
        // When reading, xlsx puts fill color at s.fgColor (for solid pattern fills)
        // s.bgColor is the pattern background (usually white), not what you want
        const rgb: string | undefined = s.fgColor?.rgb ?? s?.bgColor?.rgb;
        if (!rgb || typeof rgb !== 'string') continue;
  
        // Filter out transparent/no-fill sentinel values Excel uses
        const upper = rgb.toUpperCase();
        if (
          upper === '00000000' ||  // transparent
          upper === 'FFFFFF00' ||  // transparent white  
          upper === '000000'  ||   // default black (usually means no fill was set)
          upper === 'FFFFFF'       // default white — omit if you want grid bg to show through
        ) continue;
  
        const decoded = XLSX.utils.decode_cell(key);
        styles[`${decoded.r},${decoded.c}`] = rgbToHex(rgb);
        
      }
  
      this.cellStyles.set(styles);
      cellStylesRef.current = styles;
      this.loadError.set(null);
    } catch (err) {
      this.loadError.set(err instanceof Error ? err.message : 'Failed to parse Excel file');
    } finally {
      this.loading.set(false);
    }
  }

  private loadCsvFallback(): void {
    this.http.get(TEMPLATE_CSV_URL, { responseType: 'text' }).subscribe({
      next: (csv) => this.parseCsv(csv),
      error: () => {
        this.loadError.set(
          'Template not found. Add Connection Bank Template - DreamShift.xlsx to the public folder.'
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
      const data = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
        header: 1,
        defval: '',
      }) as unknown[][];
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
