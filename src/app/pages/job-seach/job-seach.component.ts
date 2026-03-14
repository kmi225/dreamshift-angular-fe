import { Component } from '@angular/core';
import { ExcelPreviewComponent } from '../../components/excel-preview/excel-preview.component';
import { ExcelDownloadsComponent } from '../../components/excel-downloads/excel-downloads.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { EmailTemplateComponent } from '../../components/email-template/email-template.component';
import { DsDropdownComponent } from '../../components/ds-dropdown/ds-dropdown.component';

@Component({
  selector: 'app-job-seach',
  imports: [ExcelPreviewComponent, ExcelDownloadsComponent, FullWidthBannerComponent, EmailTemplateComponent, DsDropdownComponent],
  templateUrl: './job-seach.component.html',
  styleUrl: './job-seach.component.scss'
})
export class JobSeachComponent {
  readonly xlsxUrl = '/Tracking%20Template%20-%20DreamShift.xlsx';
  readonly csvUrl = '/Tracking%20Template%20-%20DreamShift.csv';
  readonly sheetsUrl = 'https://docs.google.com/spreadsheets/d/1DzHlsIzzbDRbMMRnybXQPJvY5ZOXvbAvui6OtDkaLqA/edit?usp=sharing';
  readonly fileName = 'Tracking Template - DreamShift';

  // Current selection for ds-dropdown (single-select as a Set<string>)
  selected = new Set<string>();
}
