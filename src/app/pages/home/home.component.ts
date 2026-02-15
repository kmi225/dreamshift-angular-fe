import { Component } from '@angular/core';
import { RotatingImagesArrayComponent } from '../../components/rotating-images-array/rotating-images-array.component';
import { ClientTestimonialContainerComponent } from '../../components/client-testimonial-container/client-testimonial-container.component';
import { MainServicesComponent } from '../../components/main-services/main-services.component';

@Component({
  selector: 'app-home',
  imports: [
    RotatingImagesArrayComponent,
    ClientTestimonialContainerComponent,
    MainServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}