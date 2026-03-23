import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Injector,
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
  @Input() delayStepSeconds = 0.25;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | undefined;
  private destroyed = false;

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

    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });

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

    // Wait until after the first real browser render so scroll position (router / bfcache /
    // restoration) matches the viewport before we measure — avoids revealing “bottom” sections
    // first when the document was still scrolled.
    afterNextRender(
      () => {
        if (this.destroyed || !this.observer) {
          return;
        }
        this.applyDelayFromDomOrder();
        this.observer.observe(this.el.nativeElement);
        this.flushInitialIntersection();
      },
      { injector: this.injector }
    );
  }

  private applyDelayFromDomOrder(): void {
    const orderedElements = Array.from(
      document.querySelectorAll<HTMLElement>('[animateOnVisible]')
    );
    const elementOrder = orderedElements.indexOf(this.el.nativeElement);
    if (elementOrder === -1) {
      return;
    }

    this.el.nativeElement.style.setProperty('--aov-order', `${elementOrder + 1}`);
    this.el.nativeElement.style.setProperty(
      '--aov-delay-step',
      `${this.delayStepSeconds}s`
    );
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