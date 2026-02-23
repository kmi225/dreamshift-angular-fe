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

  public isMobileDevice(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  }

  getMobileText(): string {
    switch (this.mode) {
      case 'home':
        return 'Ready to Land Job Interviews in just 60 Days?';
      case 'services':
        return 'Ready to Land Job Interviews in just 60 Days?';
    }
  }

  getDesktopHeading(): string {
    switch (this.mode) {
      case 'home':
        return 'Ready To Land Job Interviews in just 60 Days?';
      case 'services':
        return 'Need to Land Job Interviews within 60 Days?';
    }
  }

  getDesktopText(): string {
    switch (this.mode) {
      case 'home':
        return 'Work with us and land job interviews in 60 days.';
      case 'services':
        return 'Our Premium Service Guarantees you Interviews!';
    }
  }

  getButtonText(): string {
    switch (this.mode) {
      case 'home':
        return 'I\'m ready to start';
      case 'services':
        return 'Learn more';
    }
  }
}
