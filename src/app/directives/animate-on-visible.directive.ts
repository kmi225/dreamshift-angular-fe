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
  // Trigger as soon as any part of the element enters the viewport.
  // This usually corresponds to "element top is visible" rather than waiting
  // for a meaningful percentage of the element area (which can feel like
  // "wait until the bottom is visible" for tall elements).
  @Input() threshold = 0;
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
        // Defer by one rAF so the browser's scroll restoration has fully settled
        // before we measure intersections. Without this, elements visible at the
        // *old* scroll position fire as intersecting before the page scrolls to
        // the top, causing animations to run in reverse order on the new page.
        requestAnimationFrame(() => {
          if (this.destroyed || !this.observer) {
            return;
          }
          this.applyDelayFromDomOrder();
          this.observer.observe(this.el.nativeElement);
          this.flushInitialIntersection();
        });
      },
      { injector: this.injector }
    );
  }

  private applyDelayFromDomOrder(): void {
    // Scope the query to the closest ancestor that acts as a page/view root,
    // rather than the whole document. This prevents elements from the *leaving*
    // page (which may still be in the DOM during route transitions) from
    // inflating the order index of elements on the incoming page.
    const scope: HTMLElement =
      (this.el.nativeElement.closest('router-outlet + *, [data-aov-scope]') as HTMLElement | null) ??
      document.body;

    const orderedElements = Array.from(
      scope.querySelectorAll('[animateOnVisible]')
    ) as HTMLElement[];
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
      // Use a fixed delay after the element becomes visible.
      // This avoids "cumulative" delays for elements later in the DOM, which
      // can make it look like the animation waits for the element bottom.
      this.el.nativeElement.style.setProperty('--aov-delay', `${this.delayStepSeconds}s`);
      this._aovPending = false;
      this.el.nativeElement.classList.add(this.animationClass);
    });
    this.observer?.unobserve(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}