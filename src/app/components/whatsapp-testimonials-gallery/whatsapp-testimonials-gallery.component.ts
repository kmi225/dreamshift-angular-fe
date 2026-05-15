import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import {
  WHATSAPP_REVIEW_IMAGE_COUNT,
  whatsappReviewImageSrc,
} from '../whatsapp-reviews/whatsapp-reviews.constants';

/**
 * Full-screen lightbox for browsing all WhatsApp testimonial screenshots.
 * Parent owns `currentImage` (1-based index or null when closed) and updates it via `currentImageChange`.
 */
@Component({
  selector: 'app-whatsapp-testimonials-gallery',
  imports: [],
  templateUrl: './whatsapp-testimonials-gallery.component.html',
  styleUrl: './whatsapp-testimonials-gallery.component.scss',
})
export class WhatsappTestimonialsGalleryComponent {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** 1-based image index when open, or null when closed. */
  readonly currentImage = input<number | null>(null);

  readonly currentImageChange = output<number | null>();

  readonly allImageNumbers = Array.from({ length: WHATSAPP_REVIEW_IMAGE_COUNT }, (_, i) => i + 1);

  constructor() {
    effect((onCleanup) => {
      const open = this.currentImage() !== null;
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      this.document.body.style.overflow = open ? 'hidden' : '';
      onCleanup(() => {
        this.document.body.style.overflow = '';
      });
    });
  }

  imageSrc(n: number): string {
    return whatsappReviewImageSrc(n);
  }

  close(): void {
    this.currentImageChange.emit(null);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  step(delta: number): void {
    const current = this.currentImage();
    if (current === null) {
      return;
    }
    const next =
      ((current - 1 + delta + WHATSAPP_REVIEW_IMAGE_COUNT) % WHATSAPP_REVIEW_IMAGE_COUNT) + 1;
    this.currentImageChange.emit(next);
  }

  goTo(imageNumber: number): void {
    const clamped = Math.min(Math.max(1, imageNumber), WHATSAPP_REVIEW_IMAGE_COUNT);
    this.currentImageChange.emit(clamped);
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (this.currentImage() === null) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.step(-1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.step(1);
    }
  }
}
