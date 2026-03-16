import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, QueryList, ViewChild, ViewChildren, booleanAttribute } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ProcessStep } from '../../models/process-step.model';

@Component({
  selector: 'app-process-walkthrough',
  imports: [
    CommonModule
  ],
  templateUrl: './process-walkthrough.component.html',
  styleUrl: './process-walkthrough.component.scss'
})
export class ProcessWalkthroughComponent implements AfterViewInit {
  @ViewChild('walkthroughContainer') walkthroughContainer?: ElementRef<HTMLElement>;
  @ViewChildren('iconContainer') iconContainers!: QueryList<ElementRef<HTMLElement>>;

  @Input() public processSteps!: ProcessStep[];
  /** When false, disables scroll-based animation and shows all steps as fully yellow. */
  @Input({ transform: booleanAttribute }) public animate: boolean = true;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  /** Overall scroll progress 0..1: 0 when first circle at viewport center, 1 when last circle at viewport center */
  scrollProgress = 0;

  /** Number of elements that transition in sequence: circle, line, circle, line, ... (6 circles + 5 lines) */
  private get totalElements(): number {
    return this.processSteps.length * 2 - 1;
  }

  ngAfterViewInit(): void {
    if (this.animate) {
      this.onWindowScroll();
    } else {
      this.scrollProgress = 1;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.animate) {
      this.scrollProgress = 1;
      return;
    }
    if (!isPlatformBrowser(this.platformId)) return;
    const icons = this.iconContainers?.toArray();
    if (!icons?.length) return;
    const el0 = icons[0].nativeElement;
    if (typeof el0?.getBoundingClientRect !== 'function') return;
    const first = el0.getBoundingClientRect();
    const last = icons[icons.length - 1].nativeElement.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const y1 = first.top + first.height / 2;
    const y2 = last.top + last.height / 2;
    const range = y2 - y1;
    if (range <= 0) {
      this.scrollProgress = y1 <= viewportCenter ? 1 : 0;
      return;
    }
    const progress = (viewportCenter - y1) / range;
    this.scrollProgress = Math.max(0, Math.min(1, progress));
  }

  /** Progress 0 (purple) -> 1 (yellow) for the element at the given index (0 = first circle, 1 = first line, 2 = second circle, ...). */
  getElementProgress(elementIndex: number): number {
    if (!this.animate) {
      return 1;
    }
    const raw = this.scrollProgress * this.totalElements - elementIndex;
    return Math.max(0, Math.min(1, raw));
  }
}
