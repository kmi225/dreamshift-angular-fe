import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  imageURL: string;
}

@Component({
  selector: 'app-client-testimonial',
  imports: [CommonModule],
  templateUrl: './client-testimonial.component.html',
  styleUrl: './client-testimonial.component.scss'
})
export class ClientTestimonialComponent {
  @Input() testimonial!: Testimonial;
}
