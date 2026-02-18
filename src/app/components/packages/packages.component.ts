import { Component } from '@angular/core';

interface Package {
  id: number;
  title: string;
  ideal: string;
  price: string;
  currency: string;
  bestSeller: boolean;
  packageInclusions: string[];
  packageExclusions: string[];
}

interface PackageInclusion {
  id: number;
  description: string;
}

@Component({
  selector: 'app-packages',
  imports: [],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {

  public readonly packages: Package[] = [ {
    id: 1,
    title: 'Essential Package',
    ideal: 'If you need a Basic Job Toolkit to land jobs',
    price: '60,000',
    currency: 'LKR',
    bestSeller: false,
    packageInclusions: [
      'Resume/CV Writing (1–2 Pages)',
      'Cover Letter Writing',
      `LinkedIn Optimisation <b>(Advanced)</b>`,
      'ATS Keyword Research',
      `Premium Consultation <b>(45 mins)</b>`,
      `Unlimited Revisions <b>(1 Month)</b>`,
    ],
    packageExclusions: [
      'Job Search Strategy Guide',
      'LinkedIn Banner Image + Free Designs',
      'Job Application Support (We Fully Manage Your Job Search)',
      'Any Other Documents You Need (Service Letters / Executive Profiles)'
    ]
  }, {
    id: 2,
    title: 'Advanced Package',
    ideal: 'If you need an all-in-one Job Toolkit with a guarantee',
    price: '65,000',
    currency: 'LKR',
    bestSeller: true,
    packageInclusions: [
      'Resume/CV Writing (1–2 Pages)',
      'Cover Letter Writing',
      `LinkedIn Optimisation <b>(Basic)</b>`,
      'ATS Keyword Research',
      `Premium Consultation <b>(1h +)</b>`,
      `Unlimited Revisions <b>(1 Month)</b>`,
      'Job Search Strategy Guide',
      'LinkedIn Banner Image + Free Designs',
    ],
    packageExclusions: [
      'Job Application Support (We Fully Manage Your Job Search)',
      'Any Other Documents You Need (Service Letters / Executive Profiles)'
    ]
  }, {
    id: 3,
    title: 'Ultimate Career Package',
    ideal: 'If you are Busy Professionals who need Professional Support',
    price: '100,000',
    currency: 'LKR',
    bestSeller: false,
    packageInclusions: [
      'Resume/CV Writing (1–2 Pages)',
      'Cover Letter Writing',
      `LinkedIn Optimisation <b>(Advanced)</b>`,
      'ATS Keyword Research',
      `Premium Consultation <b>(1h +)</b>`,
      `Unlimited Revisions <b>(3 Months)</b>`,
      'Job Search Strategy Guide',
      'LinkedIn Banner Image + Free Designs',
      'Job Application Support (We Fully Manage Your Job Search)',
      'Any Other Documents You Need (Service Letters / Executive Profiles)'
    ],
    packageExclusions: []
  }]
}
