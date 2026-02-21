import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-interview-guarantee-banner',
  imports: [],
  templateUrl: './interview-guarantee-banner.component.html',
  styleUrl: './interview-guarantee-banner.component.scss'
})
export class InterviewGuaranteeBannerComponent {
  readonly cdnUrl = CDN_URL;
}
