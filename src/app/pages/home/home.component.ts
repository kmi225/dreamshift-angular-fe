import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';
import { RotatingImagesArrayComponent } from '../../components/rotating-images-array/rotating-images-array.component';
import { ClientTestimonialContainerComponent } from '../../components/client-testimonial-container/client-testimonial-container.component';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { VideoTestimonialComponent } from '../../components/video-testimonials/video-testimonial.component';
import { InterviewGuaranteeBannerComponent } from '../../components/interview-guarantee-banner/interview-guarantee-banner.component';

@Component({
  selector: 'app-home',
  imports: [
    RotatingImagesArrayComponent,
    ClientTestimonialContainerComponent,
    MainServicesComponent,
    PackagesComponent,
    VideoTestimonialComponent,
    InterviewGuaranteeBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly cdnUrl = CDN_URL;
}