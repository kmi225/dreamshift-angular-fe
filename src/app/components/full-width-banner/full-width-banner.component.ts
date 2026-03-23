import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes.constants';
import { AnimateOnVisibleDirective } from '../../directives/animate-on-visible.directive';

@Component({
  selector: 'app-full-width-banner',
  imports: [
    CommonModule,
    AnimateOnVisibleDirective
  ],
  templateUrl: './full-width-banner.component.html',
  styleUrl: './full-width-banner.component.scss'
})
export class FullWidthBannerComponent {
  @Input() mode: 'home' | 'services' | 'process' | 'aussie-toolkit' | 'blog-post' = 'home';
  private readonly router = inject(Router);
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
      case 'process':
        return 'Your Journey to Excellence Begins Here';
      case 'aussie-toolkit':
        return 'Ready to Land Job Interviews in just 60 Days?';
      case 'blog-post':
        return 'Ready to Land Job Interviews in just 60 Days?';
    }
  }

  getDesktopHeading(): string {
    switch (this.mode) {
      case 'home':
        return 'Ready To Land Job Interviews in just 60 Days?';
      case 'services':
        return 'Need to Land Job Interviews within 60 Days?';
      case 'process':
        return `Let's Get Started Now!`;
      case 'aussie-toolkit':
        return 'Ready to Land Job Interviews in just 60 Days?';
      case 'blog-post':
        return 'Ready To Secure Your Next Job?';
    }
  }

  getDesktopText(): string {
    switch (this.mode) {
      case 'home':
        return 'Work with us and land job interviews in 60 days.';
      case 'services':
        return 'Our Premium Service Guarantees you Interviews!';
      case 'process':
        return 'Your journey to excellence begins Here';
      case 'aussie-toolkit':
        return 'Your journey to excellence begins Here';
      case 'blog-post':
        return 'Work with us and land job interviews in 60 days.';
    }
  }

  getButtonText(): string {
    switch (this.mode) {
      case 'home':
        return 'I\'m ready to start';
      case 'services':
        return 'Learn more';
      case 'process':
        return `Get Started`;
      case 'aussie-toolkit':
        return 'Learn more';
      case 'blog-post':
        return 'Get Started';
    }
  }

  onClickNavigationButton(): void {
    switch (this.mode) {
      case 'home':
        this.router.navigate([ROUTES.CONTACT]);
        break;
      case 'services':
        this.router.navigate([ROUTES.OUR_SERVICES]);
        break;
    }
    this.router.navigate([ROUTES.CONTACT]);
  }
}
