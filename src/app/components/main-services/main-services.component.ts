import { Component } from '@angular/core';

interface MainService {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
  price: string;
}

@Component({
  selector: 'app-main-services',
  imports: [],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})
export class MainServicesComponent {
  public readonly services: MainService[] = [ {
    id: 1,
    icon: 'fa-solid fa-pen fa-2xl',
    title: 'Resume Writing',
    subtitle: 'We don\'t just use templates',
    bullets: [
      'We Understand your Requirement',
      'We do a Job Market Research',
      'We do an ATS Keyword Research',
      'Finally We Brand You with Words'
    ],
    price: '30,000 LKR Onwards'
  }, {
    id: 2,
    icon: 'fa-regular fa-file-lines fa-2xl',
    title: 'Cover Letter Writing',
    subtitle: 'Our Cover Letters Tell Your Story',
    bullets: [
      'We Identify Your Unique Selling Point',
      'We Craft a Story that Brands You',
      'We Give You a Templated Cover Letter',
      'We Also Give You a Fixed Cover Letter'
    ],
    price: '15,000 LKR Onwards'
  }, {
    id: 3,
    icon: 'fa-brands fa-linkedin-in fa-2xl',
    title: 'LinkedIn Optimization',
    subtitle: 'LinkedIn is Your Top Google Result',
    bullets: [
      'We Find your True Personal Brand',
      'We Optimize to Rank Your Profile',
      'We write Content that\'s Easy to Read',
      'We Design your Banner & Highlights'
    ],
    price: '30,000 LKR Onwards'
  }]
}
