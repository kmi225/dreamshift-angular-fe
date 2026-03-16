import { ProcessStep } from '../models/process-step.model';

export const OUR_PROCESS_STEPS: ProcessStep[] = [
    {
      id: 1,
      title: 'Consultation/ Onboarding Call',
      description: 'Initial discussion to understand your needs and onboard you to our services.',
      icon: 'fa-solid fa-phone',
    }, {
      id: 2,
      title: 'Invoice & Contract Agreement (NDA)',
      description: 'Formalizing our partnership with a Legal Agreement and NDA.',
      icon: 'fa-solid fa-handshake',
    },
    {
      id: 3,
      title: 'ATS & Job Market Research',
      description: 'In-depth analysis of your industry and ATS (Applicant Tracking Systems)',
      icon: 'fa-solid fa-search',
    },
    {
      id: 4,
      title: 'Data Collection via Questionnaire',
      description: 'Offering you taregeted questions to brand your unqiueness in Resume/CV.',
      icon: 'fa-solid fa-file-circle-question',
    },
    {
      id: 5,
      title: 'Branding & Writing your Resume/CV',
      description: 'Crafting your professional narrative through Career Highlights & Key Projects.',
      icon: 'fa-solid fa-file-pen',
    },
    {
      id: 6,
      title: 'Enhancing with your Revisions',
      description: 'Fine-tuning your documents based on your valuable feedback.',
      icon: 'fa-solid fa-comments',
    },
];