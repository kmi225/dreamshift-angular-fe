import { Component } from '@angular/core';
import { RotatingImagesArrayComponent } from '../../components/rotating-images-array/rotating-images-array.component';
import { ClientTestimonialContainerComponent } from '../../components/client-testimonial-container/client-testimonial-container.component';

@Component({
  selector: 'app-home',
  imports: [
    RotatingImagesArrayComponent,
    ClientTestimonialContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}