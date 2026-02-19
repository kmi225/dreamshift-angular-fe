import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientTestimonial } from '../../models/client-testimonial.model';

@Component({
  selector: 'app-client-testimonial',
  imports: [CommonModule],
  templateUrl: './client-testimonial.component.html',
  styleUrl: './client-testimonial.component.scss'
})
export class ClientTestimonialComponent {
  @Input() testimonial!: ClientTestimonial;
}
