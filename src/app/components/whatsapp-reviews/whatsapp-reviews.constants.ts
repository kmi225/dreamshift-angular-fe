/** Numbered PNGs in `public/images/whatsapp-reviews` (1.png … 30.png). */
export const WHATSAPP_REVIEW_IMAGE_COUNT = 30;

export const WHATSAPP_REVIEW_IMAGE_FOLDER = 'images/whatsapp-reviews';

export function whatsappReviewImageSrc(imageNumber: number): string {
  if (imageNumber < 1 || imageNumber > WHATSAPP_REVIEW_IMAGE_COUNT) {
    return `${WHATSAPP_REVIEW_IMAGE_FOLDER}/1.png`;
  }
  return `${WHATSAPP_REVIEW_IMAGE_FOLDER}/${imageNumber}.png`;
}
