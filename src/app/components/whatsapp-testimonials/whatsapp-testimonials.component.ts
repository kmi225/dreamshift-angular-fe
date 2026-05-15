import { Component, signal } from '@angular/core';
import { WhatsappTestimonialsGalleryComponent } from '../whatsapp-testimonials-gallery/whatsapp-testimonials-gallery.component';
import { WHATSAPP_REVIEW_IMAGE_COUNT } from '../../constants/whatsapp-testimonials.constants';
import { WHATSAPP_TESTIMONIALS_COLUMN_CONFIGS } from './whatsapp-testimonials.constants';
import { WhatsappTestimonialsScrollColumnComponent } from './whatsapp-testimonials-scroll-column/whatsapp-testimonials-scroll-column.component';
import { WhatsappTestimonialsColumnConfig } from './whatsapp-testimonials.types';

function rotateArray<T>(items: readonly T[], startIndex: number): T[] {
  const len = items.length;
  if (len === 0) {
    return [];
  }
  const offset = ((startIndex % len) + len) % len;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

@Component({
  selector: 'app-whatsapp-testimonials',
  imports: [WhatsappTestimonialsScrollColumnComponent, WhatsappTestimonialsGalleryComponent],
  templateUrl: './whatsapp-testimonials.component.html',
  styleUrl: './whatsapp-testimonials.component.scss',
})
export class WhatsappTestimonialsComponent {
  readonly columnConfigs = WHATSAPP_TESTIMONIALS_COLUMN_CONFIGS;
  readonly galleryImage = signal<number | null>(null);

  readonly allImageNumbers = Array.from(
    { length: WHATSAPP_REVIEW_IMAGE_COUNT },
    (_, i) => i + 1,
  );

  imageNumbersForColumn(config: WhatsappTestimonialsColumnConfig): number[] {
    return rotateArray(this.allImageNumbers, config.startImageIndex ?? 0);
  }

  openGallery(imageNumber: number): void {
    const clamped = Math.min(Math.max(1, imageNumber), WHATSAPP_REVIEW_IMAGE_COUNT);
    this.galleryImage.set(clamped);
  }
}
