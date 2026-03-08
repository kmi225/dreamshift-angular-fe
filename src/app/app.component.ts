import { Component, inject, HostListener, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

/** Same threshold as header: show move-to-top after user has scrolled past this (px). */
const SCROLL_THRESHOLD = 100;

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('moveToTopEnterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(80px)' }),
        animate('0.35s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.25s ease-in', style({ opacity: 0, transform: 'translateY(80px)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'dreamshift-angular-fe';
  public isBlogPostPage: boolean = false;
  public showMoveToTopButton = false;
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.showMoveToTopButton = window.scrollY > SCROLL_THRESHOLD;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showMoveToTopButton = window.scrollY > SCROLL_THRESHOLD;
    }
  }

  public moveToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
