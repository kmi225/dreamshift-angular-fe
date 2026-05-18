import { Component, signal } from '@angular/core';
import { WhatsappTestimonialsGalleryComponent } from '../whatsapp-testimonials-gallery/whatsapp-testimonials-gallery.component';
import {
  WHATSAPP_HERO_COLUMNS,
  WHATSAPP_HERO_COLUMN_STAGGER_REM,
  isHeroTiltRightCell,
} from './whatsapp-reviews-hero-layout';
import {
  WHATSAPP_REVIEW_IMAGE_COUNT,
  whatsappReviewImageSrc,
} from './whatsapp-reviews.constants';

@Component({
  selector: 'app-whatsapp-reviews',
  imports: [WhatsappTestimonialsGalleryComponent],
  templateUrl: './whatsapp-reviews.component.html',
  styleUrl: './whatsapp-reviews.component.scss',
})
export class WhatsappReviewsComponent {
  readonly heroColumns = WHATSAPP_HERO_COLUMNS;
  readonly columnStaggerRem = WHATSAPP_HERO_COLUMN_STAGGER_REM;
  readonly isHeroTiltRightCell = isHeroTiltRightCell;

  readonly galleryImage = signal<number | null>(null);

  readonly allImageNumbers = Array.from({ length: WHATSAPP_REVIEW_IMAGE_COUNT }, (_, i) => i + 1);

  imageSrc(n: number): string {
    return whatsappReviewImageSrc(n);
  }

  openGallery(imageNumber: number): void {
    const clamped = Math.min(Math.max(1, imageNumber), WHATSAPP_REVIEW_IMAGE_COUNT);
    this.galleryImage.set(clamped);
  }
}
