import { Component } from '@angular/core';
import { ExcelPreviewComponent } from '../../components/excel-preview/excel-preview.component';

@Component({
  selector: 'app-connection-bank',
  standalone: true,
  imports: [ExcelPreviewComponent],
  templateUrl: './connection-bank.component.html',
  styleUrl: './connection-bank.component.scss',
})
export class ConnectionBankComponent {}
