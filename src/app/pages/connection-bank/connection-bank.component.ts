import { Component } from '@angular/core';
import { ExcelPreviewComponent } from '../../components/excel-preview/excel-preview.component';
import { ExcelDownloadsComponent } from '../../components/excel-downloads/excel-downloads.component';

@Component({
  selector: 'app-connection-bank',
  standalone: true,
  imports: [ExcelPreviewComponent, ExcelDownloadsComponent],
  templateUrl: './connection-bank.component.html',
  styleUrl: './connection-bank.component.scss',
})
export class ConnectionBankComponent {
  readonly xlsxUrl = '/Connection%20Bank%20Template%20-%20DreamShift.xlsx';
  readonly csvUrl = '/Connection%20Bank%20Template%20-%20DreamShift.csv';
  readonly sheetsUrl = 'https://docs.google.com/spreadsheets/d/1kl_A2UJx36k2UBhW9MHxydcTZK9LzTQr_LgA4o5eFzI/edit?usp=sharing';
  readonly fileName = 'Connection Bank Template - DreamShift';
}
