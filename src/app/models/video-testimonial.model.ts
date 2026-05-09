export const VIDEO_CATEGORIES = {
  TESTIMONIAL: 'Testimonials',
  CAREER_SEARCH: 'Career Search'
} as const;
 
export type VideoCategories = typeof VIDEO_CATEGORIES[keyof typeof VIDEO_CATEGORIES];;

export interface VideoTestimonial {
  id: number;
  title: string;
  videoURL: string;
  category?: VideoCategories;
}
