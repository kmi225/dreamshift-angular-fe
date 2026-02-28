import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  /** Overall scroll progress 0..1 through the section */
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
    const el = this.walkthroughContainer?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
    const progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
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
      icon: 'fa-file-pen',
    },
    {
      id: 4,
      title: 'Data Collection via Questionnaire',
      description: 'Offering you taregeted questions to brand your unqiueness in Resume/CV.',
      icon: 'fa-search',
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
