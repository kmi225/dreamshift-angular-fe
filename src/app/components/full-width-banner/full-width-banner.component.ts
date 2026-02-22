import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-width-banner',
  imports: [
    CommonModule,
  ],
  templateUrl: './full-width-banner.component.html',
  styleUrl: './full-width-banner.component.scss'
})
export class FullWidthBannerComponent {
  @Input() mode: 'home' | 'services' = 'home';
  readonly MOBILE_BREAKPOINT = 842;

  public isMobileDevice() {
    return window.innerWidth < 768;
  }

  getMobileText() {
    return 'Ready to Land Job Interviews in just 60 Days?';
  }

  getDesktopHeading() {
    return 'Ready To Secure Your Next Job?';
  }

  getDesktopText() {
    return 'Work with us and land job interviews in 60 days.';
  }

  getButtonText() {
    return 'Get Started';
  }
}
