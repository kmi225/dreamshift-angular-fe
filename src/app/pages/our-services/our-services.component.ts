import { Component, inject, PLATFORM_ID } from '@angular/core';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { AdditionalServiceComponent } from '../../components/additional-service/additional-service.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { FREQUENTLY_ASKED_QUESTIONS } from '../../constants/frequently-asked-questions.constants';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-our-services',
  imports: [
    MainServicesComponent,
    PackagesComponent,
    FullWidthBannerComponent,
    AdditionalServiceComponent,
    AccordionComponent
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  public frequentlyAskedQuestions = FREQUENTLY_ASKED_QUESTIONS;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    // Extra pin before child views initialize 
    // (index.html + main.ts already set scroll early).
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
