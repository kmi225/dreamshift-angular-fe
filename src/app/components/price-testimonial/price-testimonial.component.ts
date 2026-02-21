import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-price-testimonial',
  imports: [],
  templateUrl: './price-testimonial.component.html',
  styleUrl: './price-testimonial.component.scss'
})
export class PriceTestimonialComponent {
  readonly cdnUrl = CDN_URL;
}
