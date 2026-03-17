import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';
import { CompaniesListItem } from '../../models/companies-list-item.model';
import { CommonModule } from '@angular/common';
import { COMPANIES_LIST } from '../../constants/companies-list.constants';

@Component({
  selector: 'app-rotating-images-array',
  imports: [
    CommonModule
  ],
  templateUrl: './rotating-images-array.component.html',
  styleUrl: './rotating-images-array.component.scss'
})
export class RotatingImagesArrayComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track') trackRef!: ElementRef<HTMLElement>;
  
  readonly companiesList: CompaniesListItem[] = COMPANIES_LIST;

  private animationId: number | null = null;
  private offset = 0;
  private singleTrackWidth = 0;
  private speed = 0.6; // px per frame — adjust for faster/slower

  ngAfterViewInit(): void {
    // Wait one frame for the DOM to fully render and measure
    requestAnimationFrame(() => this.init());
  }

  private init(): void {
    const track = this.trackRef.nativeElement;
    // The track renders 2 passes of the list, so half = one full pass width
    this.singleTrackWidth = track.scrollWidth / 2;
    this.animate();
  }

  private animate(): void {
    this.offset += this.speed;

    // Once we've scrolled one full pass, reset silently to 0 — seamless loop
    if (this.offset >= this.singleTrackWidth) {
      this.offset = 0;
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
