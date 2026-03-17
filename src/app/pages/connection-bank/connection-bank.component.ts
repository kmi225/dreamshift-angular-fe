import { Component } from '@angular/core';
import { BASE_HREF } from '../../constants/deployment.constants';
import { ExcelPreviewComponent } from '../../components/excel-preview/excel-preview.component';
import { ExcelDownloadsComponent } from '../../components/excel-downloads/excel-downloads.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

@Component({
  selector: 'app-connection-bank',
  standalone: true,
  imports: [ExcelPreviewComponent, ExcelDownloadsComponent, FullWidthBannerComponent],
  templateUrl: './connection-bank.component.html',
  styleUrl: './connection-bank.component.scss',
})
export class ConnectionBankComponent {
  public xlsxUrl: string;
  public csvUrl: string;
  readonly sheetsUrl = 'https://docs.google.com/spreadsheets/d/1kl_A2UJx36k2UBhW9MHxydcTZK9LzTQr_LgA4o5eFzI/edit?usp=sharing';
  readonly fileName = 'Connection Bank Template - DreamShift';

  constructor() {
    this.xlsxUrl = BASE_HREF + 'Connection%20Bank%20Template%20-%20DreamShift.xlsx';
    this.csvUrl = BASE_HREF + 'Connection%20Bank%20Template%20-%20DreamShift.csv';
  }
}
