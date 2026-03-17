import { AfterViewInit, Component, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ClientTestimonial } from '../../models/client-testimonial.model';
import { CLIENT_TESTIMONIALS_ROW_1 } from '../../constants/client-testimonials.constants';
import { ClientTestimonialComponent } from '../client-testimonial/client-testimonial.component';

@Component({
  selector: 'app-client-testimonial-container',
  imports: [
    CommonModule,
    ClientTestimonialComponent
  ],
  templateUrl: './client-testimonial-container.component.html',
  styleUrl: './client-testimonial-container.component.scss'
})
export class ClientTestimonialContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track') trackRef!: ElementRef<HTMLElement>;
  
  @Input() testimonials!: ClientTestimonial[];
  /** When true, the track moves to the left; when false, to the right. */
  @Input() animationLeft = true;
  @Input() speed = 0.6; // px per frame — adjust for faster/slower

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private animationId: number | null = null;
  private offset = 0;
  private singleTrackWidth = 0;
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // Wait one frame for the DOM to fully render and measure
    requestAnimationFrame(() => this.init());
  }

  private init(): void {
    const track = this.trackRef.nativeElement;
    // The track renders 2 passes of the list, so half = one full pass width
    this.singleTrackWidth = track.scrollWidth / 2;

    // For rightward animation, start from the end of the first track so the
    // visible content matches the leftward case.
    if (!this.animationLeft) {
      this.offset = this.singleTrackWidth;
    }

    this.animate();
  }

  private animate(): void {
    const direction = this.animationLeft ? 1 : -1;
    this.offset += this.speed * direction;

    if (this.animationLeft) {
      // Moving left: once we've scrolled one full pass, reset to 0 — seamless loop
      if (this.offset >= this.singleTrackWidth) {
        this.offset = 0;
      }
    } else {
      // Moving right: once we've reached the start, jump back to one full pass width
      if (this.offset <= 0) {
        this.offset = this.singleTrackWidth;
      }
    }

    this.trackRef.nativeElement.style.transform = `translateX(-${this.offset}px)`;
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
