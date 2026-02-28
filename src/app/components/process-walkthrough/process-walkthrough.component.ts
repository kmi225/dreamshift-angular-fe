import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

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

  /** Overall scroll progress 0..1: 0 when first circle at viewport center, 1 when last circle at viewport center */
  scrollProgress = 0;

  /** Number of elements that transition in sequence: circle, line, circle, line, ... (6 circles + 5 lines) */
  private get totalElements(): number {
    return this.processSteps.length * 2 - 1;
  }

  ngAfterViewInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const icons = this.iconContainers?.toArray();
    if (!icons?.length) return;
    const first = icons[0].nativeElement.getBoundingClientRect();
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
    const raw = this.scrollProgress * this.totalElements - elementIndex;
    return Math.max(0, Math.min(1, raw));
  }

  public readonly processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Consultation/ Onboarding Call',
      description: 'Initial discussion to understand your needs and onboard you to our services.',
      icon: 'fa-phone',
    }, {
      id: 2,
      title: 'Invoice & Contract Agreement (NDA)',
      description: 'Formalizing our partnership with a Legal Agreement and NDA.',
      icon: 'fa-handshake',
    },
    {
      id: 3,
      title: 'ATS & Job Market Research',
      description: 'In-depth analysis of your industry and ATS (Applicant Tracking Systems)',
      icon: 'fa-search',
    },
    {
      id: 4,
      title: 'Data Collection via Questionnaire',
      description: 'Offering you taregeted questions to brand your unqiueness in Resume/CV.',
      icon: 'fa-file-circle-question',
    },
    {
      id: 5,
      title: 'Branding & Writing your Resume/CV',
      description: 'Crafting your professional narrative through Career Highlights & Key Projects.',
      icon: 'fa-file-pen',
    },
    {
      id: 6,
      title: 'Enhancing with your Revisions',
      description: 'Fine-tuning your documents based on your valuable feedback.',
      icon: 'fa-comments',
    },
  ];
}
