import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';
import { CompaniesListItem } from '../../models/companies-list-item.model';
import { CommonModule } from '@angular/common';

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
  
  readonly companiesList: CompaniesListItem[] = [
    { label: 'ansell', imageURL: CDN_URL + '2024/02/Ansell-logo-monochrome-white.svg' },
    { label: 'deloitte', imageURL: CDN_URL + '2024/02/Deloitte-logo-monochrome-white.svg' },
    { label: 'kiwi bank', imageURL: CDN_URL + '2024/02/Kiwi-bank-monochrome-white.svg' },
    { label: 'pwc', imageURL: CDN_URL + '2024/02/PWC-white-monochrome-white.svg' },
    { label: 'emirates', imageURL: CDN_URL + '2024/02/Emirates-monochrome-white.svg' },
    { label: 'qatar airways', imageURL: CDN_URL + '2024/02/Qatar-airways-monochrome-white.svg' },
    { label: 'kpmg', imageURL: CDN_URL + '2024/02/KPMG-monochrome-white-3.svg' }
  ];

  private animationId: number | null = null;
  private offset = 0;
  private singleTrackWidth = 0;
  private speed = 1; // px per frame — adjust for faster/slower

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
