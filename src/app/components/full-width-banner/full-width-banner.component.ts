import { Component, HostListener, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes.constants';

@Component({
  selector: 'app-full-width-banner',
  imports: [
    CommonModule,
  ],
  templateUrl: './full-width-banner.component.html',
  styleUrl: './full-width-banner.component.scss'
})
export class FullWidthBannerComponent implements OnInit {
  @Input() mode: 'home' | 'services' | 'process' | 'aussie-toolkit' | 'blog-post' = 'home';
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  readonly MOBILE_BREAKPOINT = 842;
  isMobileDevice = false;

  ngOnInit(): void {
    this.updateViewportMode();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateViewportMode();
  }

  private updateViewportMode(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isMobileDevice = false;
      return;
    }

    this.isMobileDevice = window.innerWidth < this.MOBILE_BREAKPOINT;
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
        return 'Book a Free Consultation';
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
        window.open('https://start.dreamshift.net', '_blank', 'noopener,noreferrer');
        break;
      default:
        this.router.navigate([ROUTES.HOME]);
        break;
    }
  }
}
