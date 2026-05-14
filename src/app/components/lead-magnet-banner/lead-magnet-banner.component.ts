import { Component, HostListener, Input, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes.constants';

@Component({
  selector: 'app-lead-magnet-banner',
  imports: [
    CommonModule,
  ],
  templateUrl: './lead-magnet-banner.component.html',
  styleUrl: './lead-magnet-banner.component.scss'
})
export class LeadMagnetBannerComponent implements OnInit {
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

  goToResources() {
    this.router.navigate([ROUTES.AUSSIE_TOOLKIT]);
  }
}
