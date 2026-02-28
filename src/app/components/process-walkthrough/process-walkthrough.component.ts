import { Component } from '@angular/core';
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
export class ProcessWalkthroughComponent {
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
