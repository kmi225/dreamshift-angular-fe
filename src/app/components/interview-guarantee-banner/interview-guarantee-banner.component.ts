import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-guarantee-banner',
  imports: [],
  templateUrl: './interview-guarantee-banner.component.html',
  styleUrl: './interview-guarantee-banner.component.scss'
})
export class InterviewGuaranteeBannerComponent {
  public goToInterviewGuaranteeBannerLarge() {
    const interviewGuaranteeBannerLarge = document.getElementById('interview-guarantee-banner-large');
    if (interviewGuaranteeBannerLarge) {
      interviewGuaranteeBannerLarge.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
