import { Component } from '@angular/core';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { AdditionalServiceComponent } from '../../components/additional-service/additional-service.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { FREQUENTLY_ASKED_QUESTIONS } from '../../constants/frequently-asked-questions.constants';
import { AnimateOnVisibleDirective } from '../../directives/animate-on-visible.directive';

@Component({
  selector: 'app-our-services',
  imports: [
    MainServicesComponent,
    PackagesComponent,
    FullWidthBannerComponent,
    AdditionalServiceComponent,
    AccordionComponent,
    AnimateOnVisibleDirective
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  public frequentlyAskedQuestions = FREQUENTLY_ASKED_QUESTIONS;
}
