import { Component, inject, Input } from '@angular/core';
import { Package } from '../../models/package.model';
import { CommonModule } from '@angular/common';
import { ROUTES } from '../../constants/routes.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  @Input() mode: 'home' | 'services' = 'home';

  private readonly router = inject(Router);

  public readonly packages: Package[] = [ 
    {
    id: 1,
    title: 'Essential Package',
    ideal: 'If you have one specific job opening to apply for',
    price: '750',
    currency: 'AUD',
    bestSeller: false,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (1 Version)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing (1 Version)'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Basic)</b>`
      },
      {
        id: 4,
        description: 'ATS Keyword Research'
      },
      {
        id: 5,
        description: `Consultation <b>(2 Calls)</b>`
      },
      {
        id: 6,
        description: `Ongoing Support <b>(1 Month)</b>`
      },
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'LinkedIn Banner + Free Designs'
      },
      {
        id: 2,
        description: 'Job Search Strategy (50+ jobs in 10hrs)'
      },
      {
        id: 3,
        description: 'Interview Preparation Guide'
      },
      {
        id: 4,
        description: 'Job Application Support (2 Months)'
      },
      {
        id: 5,
        description: 'Dedicated Senior Writer'
      }
    ]
  }, {
    id: 2,
    title: 'Advanced Package',
    ideal: 'If you want experts to handle every document & guide you',
    price: '800',
    currency: 'AUD',
    bestSeller: true,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (3-4 Versions)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing (3-4 Versions)'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'LinkedIn Banner + Free Designs'
      },
      {
        id: 5,
        description: 'ATS Keyword Research'
      },
      {
        id: 6,
        description: `Consultation <b>(Unlimited Calls)</b>`
      },
      {
        id: 7,
        description: `Job Search Strategy (50+ jobs in 10 hrs)`
      },
      {
        id: 9,
        description: 'Interview Preparation Guide (each interview)'
      },
      {
        id: 8,
        description: 'Ongoing Support <b>(until you land a job)</b>'
      }
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'Job Application Support (2 Months)'
      },
      {
        id: 2,
        description: 'Dedicated Senior Writer'
      }
    ]
  }, {
    id: 3,
    title: 'Ultimate Career Package',
    ideal: 'If you want us to apply for jobs & handle everything for you',
    price: '1500',
    currency: 'AUD',
    bestSeller: false,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (3-4 Versions)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing (3-4 Versions)'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'LinkedIn Banner + Free Designs'
      },
      {
        id: 5,
        description: 'ATS Keyword Research'
      },
      {
        id: 6,
        description: `Consultation <b>(Unlimited Calls)</b>`
      },
      {
        id: 7,
        description: `Job Search Strategy (50+ jobs in 10 hrs)`
      },
      {
        id: 8,
        description: 'Interview Preparation Guide (each interview)'
      },
      {
        id: 9,
        description: 'Job Application Support (2 Months)'
      },
      {
        id: 10,
        description: 'Dedicated Senior Writer'
      },
      {
        id: 11,
        description: 'Ongoing Support <b>(until you land a job)</b>'
      }
    ],
    packageExclusions: []
  }]

  public navigateToContact() {
    this.router.navigate([ROUTES.CONTACT]);
  }
}
