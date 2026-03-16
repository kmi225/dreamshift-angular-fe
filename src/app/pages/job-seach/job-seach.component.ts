import { Component } from '@angular/core';
import { ExcelPreviewComponent } from '../../components/excel-preview/excel-preview.component';
import { ExcelDownloadsComponent } from '../../components/excel-downloads/excel-downloads.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { EmailTemplateListComponent } from '../../components/email-template-list/email-template-list.component';
import { EmailTemplateModel } from '../../models/email-template.model';
import { ONLINE_JOB_SEARCH_TEMPLATES, UTILIZING_YOUR_CONNECTIONS_TEMPLATES, REACHING_OUT_TO_RECRUITERS_TEMPLATES, REACHING_OUT_TO_RECRUITERS_PROCESS_STEPS } from '../../constants/online-job-search.constants';
import { ProcessWalkthroughComponent } from '../../components/process-walkthrough/process-walkthrough.component';
import { ProcessStep } from '../../models/process-step.model';

@Component({
  selector: 'app-job-seach',
  imports: [
    ExcelPreviewComponent, 
    ExcelDownloadsComponent, 
    FullWidthBannerComponent, 
    EmailTemplateListComponent,
    ProcessWalkthroughComponent
  ],
  templateUrl: './job-seach.component.html',
  styleUrl: './job-seach.component.scss'
})
export class JobSeachComponent {
  readonly xlsxUrl = '/Tracking%20Template%20-%20DreamShift.xlsx';
  readonly csvUrl = '/Tracking%20Template%20-%20DreamShift.csv';
  readonly sheetsUrl = 'https://docs.google.com/spreadsheets/d/1DzHlsIzzbDRbMMRnybXQPJvY5ZOXvbAvui6OtDkaLqA/edit?usp=sharing';
  readonly fileName = 'Tracking Template - DreamShift';

  
  public onlineJobSearchTemplates: Array<EmailTemplateModel> = ONLINE_JOB_SEARCH_TEMPLATES;
  public utilizingYourConnectionsTemplates: Array<EmailTemplateModel> = UTILIZING_YOUR_CONNECTIONS_TEMPLATES;
  public reachingOutToRecruitersTemplates: Array<EmailTemplateModel> = REACHING_OUT_TO_RECRUITERS_TEMPLATES;
  
  public reachingOutToRecruitersProcessSteps: ProcessStep[] = REACHING_OUT_TO_RECRUITERS_PROCESS_STEPS;
  
  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
