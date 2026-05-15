import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  input,
  OnDestroy,
  output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { whatsappReviewImageSrc } from '../../whatsapp-reviews/whatsapp-reviews.constants';
import { WhatsappTestimonialsScrollDirection } from '../whatsapp-testimonials.types';

@Component({
  selector: 'app-whatsapp-testimonials-scroll-column',
  imports: [],
  templateUrl: './whatsapp-testimonials-scroll-column.component.html',
  styleUrl: './whatsapp-testimonials-scroll-column.component.scss',
})
export class WhatsappTestimonialsScrollColumnComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track') trackRef!: ElementRef<HTMLElement>;

  readonly imageNumbers = input.required<number[]>();
  readonly direction = input<WhatsappTestimonialsScrollDirection>('up');
  readonly startOffsetRatio = input(0);
  readonly speed = input(0.3);

  readonly imageClick = output<number>();

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  private animationId: number | null = null;
  private offset = 0;
  private singleTrackHeight = 0;
  private prefersReducedMotion = false;

  imageSrc(n: number): string {
    return whatsappReviewImageSrc(n);
  }

  /** Two passes of the same list for seamless vertical looping. */
  loopedItems(): { key: string; n: number }[] {
    const nums = this.imageNumbers();
    return [0, 1].flatMap((pass) =>
      nums.map((n) => ({ key: `${pass}-${n}`, n })),
    );
  }

  onImageClick(imageNumber: number, event: Event): void {
    event.stopPropagation();
    this.imageClick.emit(imageNumber);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    requestAnimationFrame(() => this.init());
  }

  private init(): void {
    const track = this.trackRef?.nativeElement;
    if (!track) {
      return;
    }

    this.singleTrackHeight = track.scrollHeight / 2;
    if (this.singleTrackHeight <= 0) {
      return;
    }

    const ratio = Math.min(Math.max(this.startOffsetRatio(), 0), 1);
    const baseOffset = ratio * this.singleTrackHeight;

    if (this.direction() === 'up') {
      this.offset = baseOffset;
    } else {
      this.offset = this.singleTrackHeight - baseOffset;
    }

    this.applyTransform();
    if (!this.prefersReducedMotion) {
      this.animate();
    }
  }

  private animate(): void {
    const scrollUp = this.direction() === 'up';
    const delta = this.speed() * (scrollUp ? 1 : -1);
    this.offset += delta;

    if (scrollUp) {
      if (this.offset >= this.singleTrackHeight) {
        this.offset -= this.singleTrackHeight;
      }
    } else if (this.offset <= 0) {
      this.offset += this.singleTrackHeight;
    }

    this.applyTransform();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private applyTransform(): void {
    this.trackRef.nativeElement.style.transform = `translate3d(0, ${-this.offset}px, 0)`;
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
