import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlide, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ClientTestimonialComponent } from '../client-testimonial/client-testimonial.component';
import { CDN_URL } from '../../constants/cdn.constants';
import { ClientTestimonial } from '../../models/client-testimonial.model';

const TABLET_BREAKPOINT = 1024;
const MOBILE_BREAKPOINT = 842;

@Component({
  selector: 'app-client-testimonial-container',
  imports: [CommonModule, NgbCarouselModule, NgbSlide, ClientTestimonialComponent],
  templateUrl: './client-testimonial-container.component.html',
  styleUrl: './client-testimonial-container.component.scss'
})
export class ClientTestimonialContainerComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener: (() => void) | null = null;

  readonly testimonials: ClientTestimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      testimonial: `"Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service."`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-2-Reviews-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'Software Engineer',
      testimonial: `"Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service."`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-5-Reviews-amp-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
    },
    {
      id: 3,
      name: 'John Doe',
      position: `Business Analyst <br>Peoplecare Health Insurance`,
      testimonial: `"Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service."`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-5-Reviews-amp-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
    },
    {
      id: 4,
      name: 'John Doe',
      position: 'Software Engineer',
      testimonial: `Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service.`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-2-Reviews-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
    },
    {
      id: 5,
      name: 'Jane Doe',
      position: 'Software Engineer',
      testimonial: `Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service.`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-5-Reviews-amp-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
    },
    {
      id: 6,
      name: 'John Doe',
      position: `Business Analyst <br>Peoplecare Health Insurance`,
      testimonial: `Getting a Job in Australia 🇦🇺 through Skill Migration Visa was easier thanks to DreamShift's Resume Writing & LinkedIn Service.`,
      imageURL: CDN_URL + '2025/01/DreamShift-Client-5-Reviews-amp-Testimonials-Best-Resume-CV-Writing-Service-with-60-Day-Interview-Guarantee-in-Sri-Lanka.jpg'
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
    const next = window.innerWidth > TABLET_BREAKPOINT ? 3 : (window.innerWidth > MOBILE_BREAKPOINT ? 2 : 1);
    if (next !== this.testimonialsPerSlide) {
      this.testimonialsPerSlide = next;
      this.cdr.markForCheck();
    }
  }

  get testimonialSlides(): ClientTestimonial[][] {
    const slides: ClientTestimonial[][] = [];
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
}
