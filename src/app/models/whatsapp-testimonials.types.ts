/** Vertical scroll direction for a testimonial column. */
export type WhatsappTestimonialsScrollDirection = 'up' | 'down';

export interface WhatsappTestimonialsColumnConfig {
  direction: WhatsappTestimonialsScrollDirection;
  /** 0–1: initial position within one loop (stagger across columns). */
  startOffsetRatio: number;
  /** px per animation frame; tune per column for subtle variation. */
  speed?: number;
  /** Rotate the image list by this many positions (0-based) before rendering. */
  startImageIndex?: number;
}
