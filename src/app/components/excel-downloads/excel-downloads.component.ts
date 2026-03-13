import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {
	NgbDropdown,
	NgbDropdownToggle,
	NgbDropdownMenu,
	NgbDropdownItem,
	NgbDropdownButtonItem,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-excel-downloads',
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownButtonItem,
  ],
  templateUrl: './excel-downloads.component.html',
  styleUrl: './excel-downloads.component.scss',
})
export class ExcelDownloadsComponent {

  @Input() xlsxUrl!: string;
  @Input() csvUrl!: string;
  @Input() sheetsUrl!: string;
  @Input() fileName!: string;

  constructor(private readonly http: HttpClient) {} 

  downloadAsExcel(): void {
    const link = document.createElement('a');
    link.href = this.xlsxUrl;
    link.download = `${this.fileName}.xlsx`;
    link.click();
  }

  downloadAsCsv(): void {
    const link = document.createElement('a');
    link.href = this.csvUrl;
    link.download = `${this.fileName}.csv`;
    link.click();
  }

  openInSheets(): void {
    window.open(this.sheetsUrl, '_blank');
  }
}
