import { AussieResource } from '../models/aussie-resources.model';
import { ROUTES } from './routes.constants';

export const PRIMARY_AUSSIE_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Top Australian Recruiters',
      description: 'Find the top recruiters in Australia by industry and region.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/Recruiters.svg',
      link: ROUTES.RECRUITERS,
    },
    {
      id: 2,  
      title: 'The Connection Bank',
      description: 'Find and download the connection bank template to track your connections.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/ConnectionBank.svg',
      link: ROUTES.CONNECTION_BANK
    },
    {
      id: 3,  
      title: 'Online Job Search',
      description: 'Action plan + messaging templates for online job search.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/JobSearch.svg',
      link: 'https://dreamshift.net/job-search/'
    }
]

export const LAND_JOBS_FASTER_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Upskilling Resources',
      description: 'Explore online learning and Australian upskilling opportunities.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/upskill.svg',
      link: ROUTES.UPSKILLING_RESOURCES
    },
    {
      id: 2,  
      title: 'Networking Platforms',
      description: 'Find the best networking platforms to build your career connections.',
      image: 'https://dreamshift.net/wp-content/uploads/2025/09/Networking.svg',
      link: ROUTES.EVENTS_AND_NETWORKING
    }
]

export const ADDITIONAL_EXTERNAL_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Volunteer',
      description: 'Gain local experience and connect with Aussie communities.',
      icon: 'fa-heart',
      link: 'https://dreamshift.net/volunteer/'
    },
    {
      id: 2,  
      title: 'Temporary Jobs',
      description: 'Find flexible casual shifts and temp work across Australia.',
      icon: 'fa-briefcase',
      link: 'https://sidekicker.com/worker'
    },
    {
      id: 3,  
      title: 'Smart Search',
      description: 'Supercharge your job hunt research using AI intelligence.',
      icon: 'fa-wand-magic-sparkles',
      link: 'https://www.perplexity.ai/'
    },
    {
      id: 4,  
      title: 'Find Mentors',
      description: 'Connect with industry experts for free career guidance.',
      icon: 'fa-people-group',
      link: 'https://adplist.org/'
    }
];