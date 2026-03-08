import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

interface AussieResource {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-aussie-toolkit',
  imports: [
    CommonModule,
    FullWidthBannerComponent
  ],
  templateUrl: './aussie-toolkit.component.html',
  styleUrl: './aussie-toolkit.component.scss'
})
export class AussieToolkitComponent {
  public aussieResources: AussieResource[] = [
    {
      id: 1,  
      title: 'Top Australian Recruiters',
      description: 'Find the top recruiters in Australia by industry and region.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/Recruiters.svg',
      link: 'https://dreamshift.net/australian-recruiters/',
    },
    {
      id: 2,  
      title: 'The Connection Bank',
      description: 'Find and download the connection bank template to track your connections.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/ConnectionBank.svg',
      link: 'https://dreamshift.net/connection-bank/'
    },
    {
      id: 3,  
      title: 'Online Job Search',
      description: 'Action plan + messaging templates for online job search.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/JobSearch.svg',
      link: 'https://dreamshift.net/job-search/'
    },
    {
      id: 4,  
      title: 'Upskilling Resources',
      description: 'Explore online learning and Australian upskilling opportunities.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/upskill.svg',
      link: 'https://dreamshift.net/upskilling-resources/'
    },
    {
      id: 5,  
      title: 'Networking Platforms',
      description: 'Find the best networking platforms to build your career connections.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/Networking.svg',
      link: 'https://dreamshift.net/networking/'
    },
    {
      id: 6,  
      title: 'Volunteer',
      description: 'Gain local experience and connect with Aussie communities.',
      icon: 'fa-heart',
      link: 'https://dreamshift.net/volunteer/'
    },
    {
      id: 7,  
      title: 'Temporary Jobs',
      description: 'Find flexible casual shifts and temp work across Australia.',
      icon: 'fa-briefcase',
      link: 'https://sidekicker.com/worker'
    },
    {
      id: 8,  
      title: 'Smart Search',
      description: 'Supercharge your job hunt research using AI intelligence.',
      icon: 'fa-wand-magic-sparkles',
      link: 'https://www.perplexity.ai/'
    },
    {
      id: 9,  
      title: 'Find Mentors',
      description: 'Connect with industry experts for free career guidance.',
      icon: 'fa-people-group',
      link: 'https://adplist.org/'
    }
  ];

  public row1Resources: AussieResource[] = this.aussieResources.slice(0, 3);
  public row2Resources: AussieResource[] = this.aussieResources.slice(3, 5);
  public row3Resources: AussieResource[] = this.aussieResources.slice(5, 9);

  public navigateToResource(link: string) {
    window.open(link, '_blank');
  }
}
