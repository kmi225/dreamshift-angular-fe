import { Component } from '@angular/core';
import { Package } from '../../models/package.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {

  public readonly packages: Package[] = [ {
    id: 1,
    title: 'Essential Package',
    ideal: 'If you need a basic job toolkit to start landing interviews',
    price: '450',
    currency: 'AUD',
    bestSeller: false,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (1–2 Pages)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'ATS Keyword Research'
      },
      {
        id: 5,
        description: `Premium Consultation <b>(45 mins)</b>`
      },
      {
        id: 6,
        description: `Unlimited Revisions <b>(1 Month)</b>`
      },
      {
        id: 7,
        description: 'Job Search Strategy Guide'
      },
      {
        id: 8,
        description: 'LinkedIn Banner Image + Free Designs'
      },
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'Job Search Strategy Guide'
      },
      {
        id: 2,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 3,
        description: 'Job Application Support (We Fully Manage Your Job Search)'
      },
      {
        id: 4,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ]
  }, {
    id: 2,
    title: 'Advanced Package',
    ideal: 'If you need an all-in-one job toolkit with a guarantee',
    price: '500',
    currency: 'AUD',
    bestSeller: true,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (1–2 Pages)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing'
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
        description: `Premium Consultation <b>(1h +)</b>`
      },
      {
        id: 6,
        description: `Unlimited Revisions <b>(1 Month)</b>`
      },
      {
        id: 7,
        description: 'Job Search Strategy Guide'
      },
      {
        id: 8,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 9,
        description: 'LinkedIn Banner Image + Free Designs'
      },
    ],
    packageExclusions: [
      {
        id: 1,
        description: 'Job Application Support (We Fully Manage Your Job Search)'
      },
      {
        id: 2,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      },
      {
        id: 3,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ]
  }, {
    id: 3,
    title: 'Ultimate Career Package',
    ideal: 'Busy professionals who need end-to-end career support',
    price: '700',
    currency: 'AUD',
    bestSeller: false,
    packageInclusions: [
      {
        id: 1,
        description: 'Resume/CV Writing (1–2 Pages)'
      },
      {
        id: 2,
        description: 'Cover Letter Writing'
      },
      {
        id: 3,
        description: `LinkedIn Optimisation <b>(Advanced)</b>`
      },
      {
        id: 4,
        description: 'ATS Keyword Research'
      },
      {
        id: 5,
        description: `Premium Consultation <b>(1h +)</b>`
      },
      {
        id: 6,
        description: `Unlimited Revisions <b>(3 Months)</b>`
      },
      {
        id: 7,
        description: 'Job Search Strategy Guide'
      },
      {
        id: 8,
        description: 'LinkedIn Banner Image + Free Designs'
      },
      {
        id: 9,
        description: 'Job Application Support (We Fully Manage Your Job Search)'
      },
      {
        id: 10,
        description: 'Any Other Documents You Need (Service Letters / Executive Profiles)'
      }
    ],
    packageExclusions: []
  }]
}
