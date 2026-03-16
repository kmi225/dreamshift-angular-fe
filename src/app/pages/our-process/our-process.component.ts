import { Component } from '@angular/core';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { ProcessWalkthroughComponent } from '../../components/process-walkthrough/process-walkthrough.component';
import { OUR_PROCESS_STEPS } from '../../constants/our-process-steps.constants';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { FREQUENTLY_ASKED_QUESTIONS } from '../../constants/frequently-asked-questions.constants';

@Component({
  selector: 'app-our-process',
  imports: [
    FullWidthBannerComponent,
    ProcessWalkthroughComponent,
    AccordionComponent
  ],
  templateUrl: './our-process.component.html',
  styleUrl: './our-process.component.scss'
})
export class OurProcessComponent {
  public processSteps = OUR_PROCESS_STEPS;
  public frequentlyAskedQuestions = FREQUENTLY_ASKED_QUESTIONS;
}
