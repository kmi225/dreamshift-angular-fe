import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { ProcessWalkthroughComponent } from '../../components/process-walkthrough/process-walkthrough.component';
import { OUR_PROCESS_STEPS } from '../../constants/our-process-steps.constants';

@Component({
  selector: 'app-our-process',
  imports: [
    FaqComponent,
    FullWidthBannerComponent,
    ProcessWalkthroughComponent
  ],
  templateUrl: './our-process.component.html',
  styleUrl: './our-process.component.scss'
})
export class OurProcessComponent {
  public processSteps = OUR_PROCESS_STEPS;
}
