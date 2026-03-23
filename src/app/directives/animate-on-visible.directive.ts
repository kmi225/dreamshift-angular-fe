import {
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[animateOnVisible]',
  standalone: true,
})
export class AnimateOnVisibleDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'visible';
  @Input() threshold = 0.15;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private observer: IntersectionObserver | undefined;

  /** While true (browser only), global CSS suppresses slide/fade animations until the element intersects. */
  private _aovPending = isPlatformBrowser(this.platformId);

  @HostBinding('class.aov-pending')
  get aovPendingClass(): boolean {
    return this._aovPending;
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.revealAndUnobserve();
          }
        });
      },
      { threshold: this.threshold }
    );

    this.observer.observe(this.el.nativeElement);
    // Synchronous initial check — avoids missing elements already in the viewport
    // before the first async callback (e.g. after scroll-to-top).
    this.flushInitialIntersection();
  }

  private flushInitialIntersection(): void {
    if (!this.observer) {
      return;
    }
    for (const entry of this.observer.takeRecords()) {
      if (entry.isIntersecting) {
        this.revealAndUnobserve();
        return;
      }
    }
  }

  private revealAndUnobserve(): void {
    this.ngZone.run(() => {
      if (!this._aovPending) {
        return;
      }
      this._aovPending = false;
      this.el.nativeElement.classList.add(this.animationClass);
    });
    this.observer?.unobserve(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}