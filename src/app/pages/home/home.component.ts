import { afterNextRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CDN_URL } from '../../constants/cdn.constants';
import { RotatingImagesArrayComponent } from '../../components/rotating-images-array/rotating-images-array.component';
import { ClientTestimonialContainerComponent } from '../../components/client-testimonial-container/client-testimonial-container.component';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { VideoTestimonialComponent } from '../../components/video-testimonials/video-testimonial.component';
import { InterviewGuaranteeBannerComponent } from '../../components/interview-guarantee-banner/interview-guarantee-banner.component';
import { InterviewGuaranteeBannerLargeComponent } from '../../components/interview-guarantee-banner-large/interview-guarantee-banner-large.component';
import { PriceTestimonialComponent } from '../../components/price-testimonial/price-testimonial.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { ROUTES } from '../../constants/routes.constants';
import { Router } from '@angular/router';
import { CLIENT_TESTIMONIALS_ROW_1, CLIENT_TESTIMONIALS_ROW_2 } from '../../constants/client-testimonials.constants';
import { AnimateOnVisibleDirective } from '../../directives/animate-on-visible.directive';

@Component({
  selector: 'app-home',
  imports: [
    RotatingImagesArrayComponent,
    ClientTestimonialContainerComponent,
    MainServicesComponent,
    PackagesComponent,
    VideoTestimonialComponent,
    InterviewGuaranteeBannerComponent,
    InterviewGuaranteeBannerLargeComponent,
    PriceTestimonialComponent,
    FullWidthBannerComponent,
    AnimateOnVisibleDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  readonly cdnUrl = CDN_URL;
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  public readonly clientTestimonialsRow1 = CLIENT_TESTIMONIALS_ROW_1;
  public readonly clientTestimonialsRow2 = CLIENT_TESTIMONIALS_ROW_2;

  constructor() {
    // Pin scroll before child directives run IntersectionObserver (parent constructor runs first).
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
    // Repeat after hydration / first paint in case the browser restores scroll offset.
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  public goToContactForm() {
    this.router.navigate([ROUTES.CONTACT]);
  }

  public goToPackagesSection() {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}