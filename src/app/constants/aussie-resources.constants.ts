import { AussieResource } from '../models/aussie-resources.model';
import { ROUTES } from './routes.constants';
import { CDN_URL } from './cdn.constants';
import { BASE_HREF } from './deployment.constants';

export const PRIMARY_AUSSIE_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Online Job Search',
      description: 'Action plan + messaging templates for online job search.',
      image: BASE_HREF + 'images/aussie-toolkit/JobSearch.svg',
      link: ROUTES.JOB_SEARCH
    }, {
      id: 2,  
      title: 'Top Australian Recruiters',
      description: 'Find the top recruiters in Australia by industry and region.',
      image: BASE_HREF + 'images/aussie-toolkit/Recruiters.svg',
      link: ROUTES.RECRUITERS,
    },
    {
      id: 3,  
      title: 'The Connection Bank',
      description: 'Find and download the connection bank template to track your connections.',
      image: BASE_HREF + 'images/aussie-toolkit/ConnectionBank.svg',
      link: ROUTES.CONNECTION_BANK
    }
]

export const LAND_JOBS_FASTER_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Upskilling Resources',
      description: 'Explore online learning and Australian upskilling opportunities.',
      image: BASE_HREF + 'images/aussie-toolkit/upskillingResources.svg',
      link: ROUTES.UPSKILLING_RESOURCES
    },
    {
      id: 2,  
      title: 'Networking Platforms',
      description: 'Find the best networking platforms to build your career connections.',
      image: BASE_HREF + 'images/aussie-toolkit/Networking.svg',
      link: ROUTES.EVENTS_AND_NETWORKING
    }
]

export const ADDITIONAL_EXTERNAL_RESOURCES: AussieResource[] = [
    {
      id: 1,  
      title: 'Volunteer',
      description: 'Gain local experience and connect with Aussie communities.',
      icon: 'fa-heart',
      link: 'https://www.volunteer.com.au/'
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