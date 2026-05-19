import { WhatsappTestimonialsColumnConfig } from '../models/whatsapp-testimonials.types';
import { BASE_HREF } from './deployment.constants';
/**
 * Per-column scroll settings — edit `direction` (`'up'` | `'down'`) and offsets here.
 */
export const WHATSAPP_TESTIMONIALS_COLUMN_CONFIGS: WhatsappTestimonialsColumnConfig[] = [
  { direction: 'up', startOffsetRatio: 0, startImageIndex: 0, speed: 0.32 },
  { direction: 'down', startOffsetRatio: 0.2, startImageIndex: 8, speed: 0.28 },
  { direction: 'up', startOffsetRatio: 0.42, startImageIndex: 15, speed: 0.3 },
  { direction: 'down', startOffsetRatio: 0.65, startImageIndex: 23, speed: 0.26 },
];

/** Numbered PNGs in `public/images/whatsapp-reviews` (1.png … 31.png). */
export const WHATSAPP_REVIEW_IMAGE_COUNT = 32;

export const WHATSAPP_REVIEW_IMAGES_BASE = `${BASE_HREF}images/whatsapp-reviews/`;

export function whatsappReviewImageSrc(imageNumber: number): string {
  const clamped = Math.min(Math.max(1, imageNumber), WHATSAPP_REVIEW_IMAGE_COUNT);
  return `${WHATSAPP_REVIEW_IMAGES_BASE}${clamped}.png`;
}
