import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TALLY_FORM_URL } from '../../constants/cdn.constants';

type SnackbarExitDirection = 'down' | 'up' | 'left' | 'right';

const EXIT_ANIMATION_NAMES: Record<SnackbarExitDirection, string> = {
  down: 'toastExitDown',
  up: 'toastExitUp',
  left: 'toastExitLeft',
  right: 'toastExitRight',
};

const SESSION_DISMISSED_KEY = 'ds-scroll-snackbar-dismissed';

@Component({
  selector: 'app-scroll-dismissible-snackbar',
  imports: [CommonModule],
  templateUrl: './scroll-dismissible-snackbar.component.html',
  styleUrl: './scroll-dismissible-snackbar.component.scss',
})
export class ScrollDismissibleSnackbarComponent implements OnInit, OnDestroy {
  /** Delay before the snackbar may appear via the time-on-page trigger. */
  @Input() showDelayMs = 45_000;
  /** Scroll depth (0–100) past which the snackbar may appear via the scroll trigger. */
  @Input() scrollDepthPercent = 50;

  public remainingCount = 20;
  public currentMonth = 'September';

  private readonly platformId = inject(PLATFORM_ID);
  private showTimerId: ReturnType<typeof setTimeout> | null = null;
  private hasTriggeredShow = false;

  @ViewChild('mobileSnackbar') private mobileSnackbarRef?: ElementRef<HTMLElement>;

  protected isDismissed = false;
  protected isVisible = false;
  protected isExiting = false;
  protected exitDirection: SnackbarExitDirection = 'down';
  protected isMobileSwiping = false;
  protected mobileSwipeOffsetX = 0;
  protected mobileSwipeOffsetY = 0;

  private mobileSwipeStartX = 0;
  private mobileSwipeStartY = 0;
  private mobileSwipePointerId: number | null = null;
  private mobileSwipeDidDrag = false;
  private lastMobileSwipeMoveAt = 0;
  private lastMobileSwipeMoveX = 0;
  private lastMobileSwipeMoveY = 0;
  private lastMobileSwipeVelocityX = 0;
  private lastMobileSwipeVelocityY = 0;

  ngOnInit(): void {
    this.updateRemainingSlots();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (sessionStorage.getItem(SESSION_DISMISSED_KEY) === 'dismissed') {
      this.isDismissed = true;
      return;
    }

    this.startShowTimer();
    this.evaluateScrollDepth();
  }

  ngOnDestroy(): void {
    this.clearShowTimer();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.evaluateScrollDepth();
  }

  get mobileSwipeTransform(): string | null {
    if (this.mobileSwipeOffsetX === 0 && this.mobileSwipeOffsetY === 0) {
      return null;
    }

    return `translate(${this.mobileSwipeOffsetX}px, ${this.mobileSwipeOffsetY}px)`;
  }

  get mobileSwipeOpacity(): number | null {
    const distance = Math.hypot(this.mobileSwipeOffsetX, this.mobileSwipeOffsetY);
    if (distance <= 0) {
      return null;
    }

    return Math.max(0.2, 1 - distance / 140);
  }

  dismiss(exitDirection: SnackbarExitDirection = 'down'): void {
    if (this.isDismissed || this.isExiting) {
      return;
    }

    this.exitDirection = exitDirection;
    this.resetMobileSwipe();
    this.clearShowTimer();
    this.isExiting = true;
  }

  onMobileSwipeStart(event: PointerEvent): void {
    if (
      !isPlatformBrowser(this.platformId) ||
      this.isDismissed ||
      this.isExiting ||
      (event.target as HTMLElement).closest('button')
    ) {
      return;
    }

    this.isMobileSwiping = true;
    this.mobileSwipeDidDrag = false;
    this.mobileSwipeStartX = event.clientX;
    this.mobileSwipeStartY = event.clientY;
    this.mobileSwipePointerId = event.pointerId;
    this.lastMobileSwipeMoveAt = event.timeStamp;
    this.lastMobileSwipeMoveX = event.clientX;
    this.lastMobileSwipeMoveY = event.clientY;
    this.lastMobileSwipeVelocityX = 0;
    this.lastMobileSwipeVelocityY = 0;

    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  onMobileSwipeMove(event: PointerEvent): void {
    if (
      !this.isMobileSwiping ||
      event.pointerId !== this.mobileSwipePointerId ||
      this.isExiting
    ) {
      return;
    }

    const deltaX = event.clientX - this.mobileSwipeStartX;
    const deltaY = event.clientY - this.mobileSwipeStartY;

    if (Math.hypot(deltaX, deltaY) > 8) {
      this.mobileSwipeDidDrag = true;
    }

    this.mobileSwipeOffsetX = deltaX;
    this.mobileSwipeOffsetY = deltaY;

    const elapsedMs = event.timeStamp - this.lastMobileSwipeMoveAt;
    if (elapsedMs > 0) {
      this.lastMobileSwipeVelocityX = (event.clientX - this.lastMobileSwipeMoveX) / elapsedMs;
      this.lastMobileSwipeVelocityY = (event.clientY - this.lastMobileSwipeMoveY) / elapsedMs;
    }

    this.lastMobileSwipeMoveAt = event.timeStamp;
    this.lastMobileSwipeMoveX = event.clientX;
    this.lastMobileSwipeMoveY = event.clientY;

    if (this.mobileSwipeDidDrag && event.cancelable) {
      event.preventDefault();
    }
  }

  onMobileSwipeEnd(event: PointerEvent): void {
    if (!this.isMobileSwiping || event.pointerId !== this.mobileSwipePointerId) {
      return;
    }

    const target = event.currentTarget as HTMLElement;
    if (target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }

    const swipeDistance = Math.hypot(this.mobileSwipeOffsetX, this.mobileSwipeOffsetY);
    const swipeSpeed = Math.hypot(
      this.lastMobileSwipeVelocityX,
      this.lastMobileSwipeVelocityY,
    );

    const shouldDismiss =
      swipeDistance >= this.getMobileSwipeDismissThreshold() || swipeSpeed > 0.65;

    this.isMobileSwiping = false;
    this.mobileSwipePointerId = null;

    if (shouldDismiss) {
      this.dismiss(this.getSwipeExitDirection());
      return;
    }

    this.resetMobileSwipe();
    this.mobileSwipeDidDrag = false;
  }

  onExitAnimationEnd(event: AnimationEvent): void {
    if (!this.isExitAnimation(event.animationName)) {
      return;
    }

    this.finishDismiss();
  }

  bookNow(): void {
    if (this.mobileSwipeDidDrag) {
      return;
    }

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.dismiss();

    window.open(TALLY_FORM_URL, '_blank', 'noopener,noreferrer');
    
  }

  getAriaLabel(): string {
    return `Only ${this.remainingCount} ${this.remainingCount === 1 ? 'spot' : 'spots'} left for ${this.currentMonth}. Spots are filling up — secure yours today`;
  }

  private finishDismiss(): void {
    if (!this.isExiting) {
      return;
    }

    this.isDismissed = true;
    this.isExiting = false;
    this.isVisible = false;
    this.resetMobileSwipe();

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(SESSION_DISMISSED_KEY, 'dismissed');
    }
  }

  private isExitAnimation(animationName: string): boolean {
    return Object.values(EXIT_ANIMATION_NAMES).some(
      (exitName) => animationName === exitName || animationName.endsWith(exitName),
    );
  }

  private resetMobileSwipe(): void {
    this.isMobileSwiping = false;
    this.mobileSwipeOffsetX = 0;
    this.mobileSwipeOffsetY = 0;
    this.mobileSwipePointerId = null;
    this.mobileSwipeDidDrag = false;
    this.lastMobileSwipeVelocityX = 0;
    this.lastMobileSwipeVelocityY = 0;
  }

  private getSwipeExitDirection(): SnackbarExitDirection {
    let { mobileSwipeOffsetX: x, mobileSwipeOffsetY: y } = this;

    // Fast flicks may not travel far; use velocity to infer direction.
    if (Math.hypot(x, y) < 12) {
      x = this.lastMobileSwipeVelocityX;
      y = this.lastMobileSwipeVelocityY;
    }

    if (Math.abs(x) > Math.abs(y)) {
      return x >= 0 ? 'right' : 'left';
    }

    return y >= 0 ? 'down' : 'up';
  }

  private getMobileSwipeDismissThreshold(): number {
    const element = this.mobileSnackbarRef?.nativeElement;
    const width = element?.offsetWidth ?? 300;
    const height = element?.offsetHeight ?? 72;
    return Math.max(48, Math.min(width, height) * 0.3);
  }

  private startShowTimer(): void {
    this.showTimerId = setTimeout(() => this.showPopup(), this.showDelayMs);
  }

  private clearShowTimer(): void {
    if (this.showTimerId !== null) {
      clearTimeout(this.showTimerId);
      this.showTimerId = null;
    }
  }

  private evaluateScrollDepth(): void {
    if (!isPlatformBrowser(this.platformId) || this.hasTriggeredShow || this.isDismissed) {
      return;
    }

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) {
      return;
    }

    const scrollPercent = (window.scrollY / scrollableHeight) * 100;
    if (scrollPercent >= this.scrollDepthPercent) {
      this.showPopup();
    }
  }

  private showPopup(): void {
    if (this.hasTriggeredShow || this.isDismissed) {
      return;
    }

    this.hasTriggeredShow = true;
    this.clearShowTimer();
    this.isVisible = true;
  }

  /**
   * Slots scale with share of the month still ahead (20 max per month).
   * Example: 15 Apr → (30 − 15) / 30 × 20 = 10.
   */
  private updateRemainingSlots(): void {
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const dayOfMonth = today.getDate();
    const daysRemainingInMonth = daysInMonth - dayOfMonth;
    const totalSlots = 20;
    const raw = (daysRemainingInMonth / daysInMonth) * totalSlots;
    // Never show "0 slots" — keep at least 1 through month-end.
    this.remainingCount = Math.max(1, Math.min(totalSlots, Math.round(raw)));
    this.currentMonth = today.toLocaleString('en-US', { month: 'long' });
  }
}
