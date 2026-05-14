import {
  Component,
  HostListener,
  Input,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-dismissible-snackbar',
  imports: [CommonModule],
  templateUrl: './scroll-dismissible-snackbar.component.html',
  styleUrl: './scroll-dismissible-snackbar.component.scss',
})
export class ScrollDismissibleSnackbarComponent implements OnInit {
  /** Vertical scroll (px) past which the snackbar becomes eligible to show. */
  @Input() scrollThresholdPx = 100;
  public remainingCount = 20;
  public currentMonth = 'September';

  private readonly platformId = inject(PLATFORM_ID);
  protected isDismissed = false;
  protected isVisible = true;

  ngOnInit(): void {
    this.updateRemainingSlots();
    this.tryShowFromScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    // this.tryShowFromScrollPosition();
  }

  private tryShowFromScrollPosition(): void {
    if (!isPlatformBrowser(this.platformId) || this.isDismissed || this.isVisible) {
      return;
    }
    if (window.scrollY >= this.scrollThresholdPx) {
      this.isVisible = true;
    }
  }

  dismiss(): void {
    this.isDismissed = true;
    this.isVisible = false;
  }

  getAriaLabel(): string {
    return `Only ${this.remainingCount} ${this.remainingCount === 1 ? 'spot' : 'spots'} left for ${this.currentMonth}. Spots are filling up — secure yours today`;
  }

  bookNow(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.getElementById('packages')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
