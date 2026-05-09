import { Component, inject, Input } from '@angular/core';
import { Package } from '../../models/package.model';
import { CommonModule } from '@angular/common';
import { CDN_URL } from '../../constants/cdn.constants';
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

  readonly cdnUrl = CDN_URL;
  private readonly router = inject(Router);

  public readonly packages: Package[] = [ 
    {
    id: 1,
    title: 'Essential Package',
    ideal: 'If you have 1 targeted job opening to apply',
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
        description: `Premium Consultation <b>(1 hour)</b>`
      },
      {
        id: 6,
        description: `Ongoing Support <b>(1 Month)</b>`
      },
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'Job Search Strategy (To apply 50+ jobs in 10 hours)'
      },
      {
        id: 2,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 3,
        description: 'Job Application Support (2 Months - We apply for jobs on behalf)'
      },
      {
        id: 4,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ]
  }, {
    id: 2,
    title: 'Advanced Package',
    ideal: 'If you want experts to create every single document & guide you',
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
        description: 'Cover Letter Writing (Multiple Versions)'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 5,
        description: 'ATS Keyword Research'
      },
      {
        id: 6,
        description: `Premium Consultation <b>(2h +)</b>`
      },
      {
        id: 7,
        description: `Job Search Strategy (To apply 50+ jobs in 10 hours)`
      },
      {
        id: 8,
        description: 'Ongoing Support <b>(2 Months)</b>'
      }
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'Job Application Support (2 Months - We apply for jobs on behalf)'
      },
      {
        id: 2,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ]
  }, {
    id: 3,
    title: 'Ultimate Career Package',
    ideal: 'If you want experts to create every job application document',
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
        description: 'Cover Letter Writing (Multiple Versions)'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 5,
        description: 'ATS Keyword Research'
      },
      {
        id: 6,
        description: `Premium Consultation <b>(2h +)</b>`
      },
      {
        id: 7,
        description: `Job Search Strategy (To apply 50+ jobs in 10 hours)`
      },
      {
        id: 8,
        description: 'Ongoing Support <b>(2 Months)</b>'
      },
      {
        id: 9,
        description: 'Job Application Support (2 Months - We apply for jobs on behalf)'
      },
      {
        id: 10,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ],
    packageExclusions: []
  }]

  public navigateToContact() {
    this.router.navigate([ROUTES.CONTACT]);
  }
}
