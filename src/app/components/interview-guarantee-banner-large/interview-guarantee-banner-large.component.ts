import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-interview-guarantee-banner-large',
  imports: [],
  templateUrl: './interview-guarantee-banner-large.component.html',
  styleUrl: './interview-guarantee-banner-large.component.scss'
})
export class InterviewGuaranteeBannerLargeComponent {
  readonly cdnUrl = CDN_URL;
}
