import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlide, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoTestimonial } from '../../models/video-testimonial.model';

const TABLET_BREAKPOINT = 1024;
const MOBILE_BREAKPOINT = 842;

@Component({
  selector: 'app-video-testimonial',
  imports: [CommonModule, NgbCarouselModule, NgbSlide],
  templateUrl: './video-testimonial.component.html',
  styleUrl: './video-testimonial.component.scss'
})
export class VideoTestimonialComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener: (() => void) | null = null;
  private readonly sanitizer = inject(DomSanitizer);

  readonly testimonials: VideoTestimonial[] = [
    {
      id: 1,
      title: 'Yasiru&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120342108?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
      id: 2,
      title: 'Vishnu&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120342284?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
      id: 3,
      title: 'Indika&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120343095?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    }
  ];

  testimonialsPerSlide = 3;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTestimonialsPerSlide();
      this.resizeListener = () => {
        this.updateTestimonialsPerSlide();
      };
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private updateTestimonialsPerSlide(): void {
    const next = window.innerWidth > TABLET_BREAKPOINT ? 3 : 1;
    if (next !== this.testimonialsPerSlide) {
      this.testimonialsPerSlide = next;
      this.cdr.markForCheck();
    }
  }

  get testimonialSlides(): VideoTestimonial[][] {
    const slides: VideoTestimonial[][] = [];
    for (let i = 0; i < this.testimonials.length; i += this.testimonialsPerSlide) {
      slides.push(this.testimonials.slice(i, i + this.testimonialsPerSlide));
    }
    return slides;
  }

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

  /** Cached sanitized URLs so we return the same reference every time and avoid iframe reload flicker. */
  private sanitizedVideoUrls: Map<number, SafeResourceUrl> | null = null;

  getSanitizedVideoURL(testimonial: VideoTestimonial): SafeResourceUrl {
    if (!this.sanitizedVideoUrls) {
      this.sanitizedVideoUrls = new Map();
      this.testimonials.forEach((t) =>
        this.sanitizedVideoUrls!.set(t.id, this.sanitizer.bypassSecurityTrustResourceUrl(t.videoURL))
      );
    }
    return this.sanitizedVideoUrls.get(testimonial.id)!;
  }
}
