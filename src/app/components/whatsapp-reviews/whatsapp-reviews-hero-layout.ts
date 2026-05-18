/**
 * Static hero: **10** hand-picked screenshots in a 5×2 column layout (no rotation).
 * PNG aspect hints in `public/images/whatsapp-reviews`:
 * - **Square:** wider / shorter shots crop cleanly at 1:1.
 * - **Portrait / tall:** typical phone screenshots.
 */

export type HeroCellVariant = 'square' | 'portrait' | 'tall';

export interface HeroCell {
  readonly imageNumber: number;
  readonly variant: HeroCellVariant;
  readonly tilt?: 'left' | 'right';
}

export interface HeroColumn {
  readonly cells: readonly HeroCell[];
}

/** Five columns × two tiles = 10 images. Order left → right, top → bottom within each column. */
export const WHATSAPP_HERO_COLUMNS: readonly HeroColumn[] = [
  {
    cells: [
      { imageNumber: 21, variant: 'tall' },
      { imageNumber: 27, variant: 'tall' },
      { imageNumber: 24, variant: 'tall' },
    ],
  },
  {
    cells: [
      { imageNumber: 3, variant: 'portrait' },
      { imageNumber: 30, variant: 'square' },
    ],
  },
  {
    cells: [
      { imageNumber: 31, variant: 'portrait' },
      { imageNumber: 25, variant: 'square' },
    ],
  },
  {
    cells: [
      { imageNumber: 28, variant: 'square', tilt: 'right' },
      { imageNumber: 11, variant: 'square', tilt: 'right' },
    ],
  },
] as const;

/** Vertical offset per column (rem) for a light stagger. */
export const WHATSAPP_HERO_COLUMN_STAGGER_REM: readonly number[] = [0, 1.1, 2.2, 0.55, 1.65];

export function isHeroTiltRightCell(cell: HeroCell): boolean {
  return false;
}
