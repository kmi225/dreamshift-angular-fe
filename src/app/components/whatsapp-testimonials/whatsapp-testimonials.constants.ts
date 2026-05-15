import { WhatsappTestimonialsColumnConfig } from './whatsapp-testimonials.types';

/**
 * Per-column scroll settings — edit `direction` (`'up'` | `'down'`) and offsets here.
 */
export const WHATSAPP_TESTIMONIALS_COLUMN_CONFIGS: WhatsappTestimonialsColumnConfig[] = [
  { direction: 'up', startOffsetRatio: 0, startImageIndex: 0, speed: 0.32 },
  { direction: 'down', startOffsetRatio: 0.2, startImageIndex: 8, speed: 0.28 },
  { direction: 'up', startOffsetRatio: 0.42, startImageIndex: 15, speed: 0.3 },
  { direction: 'down', startOffsetRatio: 0.65, startImageIndex: 23, speed: 0.26 },
];
