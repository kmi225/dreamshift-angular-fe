import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurProcessComponent } from './pages/our-process/our-process.component';
import { AussieToolkitComponent } from './pages/aussie-toolkit/aussie-toolkit.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ROUTES } from './constants/routes.constants';
import { ContactComponent } from './pages/contact/contact.component';
import { UpskillingResourcesComponent } from './pages/upskilling-resources/upskilling-resources.component';
import { EventsAndNetworkingComponent } from './pages/events-and-networking/events-and-networking.component';
import { RecruitersComponent } from './pages/recruiters/recruiters.component';
import { TermsAndPoliciesComponent } from './pages/terms-and-policies/terms-and-policies.component';
import { AuVisaPathwaysComponent } from './pages/au-visa-pathways/au-visa-pathways.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { VideoLibraryPageComponent } from './pages/video-library-page/video-library-page.component';

export const routes: Routes = [{
    path: ROUTES.HOME,
    component: HomeComponent,
    title: 'DreamShift | We write CVs with a 60-Day Interview Guarantee - Australia',
    data: {
        meta: {
            description: 'Land Australian Job Interviews within 60 days with DreamShift\'s Premium Resume, CV writing services.',
            focusKeyword: ['dreamshift', 'australian jobs', 'australian', 'australia', 'CV australia']
        }
    }
}, {
    path: ROUTES.OUR_SERVICES,
    component: OurServicesComponent,
    title: 'Services and Packages (Resume Writing Services) - DreamShift',
    data: {
        meta: {
            description: 'Discover DreamShift’s professional resume writing services. Premium affordable packages to help you reach your career goals.',
            focusKeyword: ['resume writing', 'packages', 'cv', 'pricing', 'services']
        }
    }
}, {
    path: ROUTES.OUR_PROCESS,
    component: OurProcessComponent,
    title: 'How DreamShift Crafts Job Winning Resumes? - DreamShift',
    data: {
        meta: {
            description: 'Learn how DreamShift process job winning resumes. The cheat code for your next career step is right here, in our safe hands.',
            focusKeyword: ['job winning resumes', 'dreamshift', 'cheat code', 'process', 'job winning']
        }
    }
}, {
    path: ROUTES.AUSSIE_TOOLKIT,
    title: 'Australian Job Search Guide - DreamShift',
    children: [
        {
            path: '',
            component: AussieToolkitComponent,
            title: 'Australian Job Search Guide - DreamShift',
            data: {
                meta: {
                    description: 'We analysed 100+ Successful Job Seekers in Australia and turned it into a step-by-step guide.',
                    focusKeyword: ['job search toolkit', 'successful job seekers', 'step-by-step guide', 'job search']
                }
            }
        },
        {
            path: ROUTES.UPSKILLING_RESOURCES,
            component: UpskillingResourcesComponent,
            title: 'Courses & Upskilling Resources - Dreamshift',
            data: {
                meta: {
                    description: 'Explore our curated list of courses and upskilling resources to help you land your dream job.',
                    focusKeyword: ['courses', 'upskilling', 'resources', 'job search']
                }
            }
        },
        {
            path: ROUTES.EVENTS_AND_NETWORKING,
            component: EventsAndNetworkingComponent,
            title: 'Networking Resources - Dreamshift',
            data: {
                meta: {
                    description: 'Discover Australia\'s top professional event & networking platforms for career growth, industry connections, and community events',
                    focusKeyword: ['networking', 'events', 'platforms', 'career growth']
                }
            }
        },
        {
            path: ROUTES.RECRUITERS,
            component: RecruitersComponent,
            title: 'Top Australian Recruiters - Dreamshift',
            data: {
                meta: {
                    description: 'Discover Australia\'s top recruiters in various industries. Find the right recruiter for your next career step.',
                    focusKeyword: ['recruiters', 'industries', 'career growth']
                }
            }
        },
        {
            path: ROUTES.CONNECTION_BANK,
            title: 'The Connection Bank - Dreamshift',
            loadComponent: () =>
              import('./pages/connection-bank/connection-bank.component').then(
                (m) => m.ConnectionBankComponent
              ),
            data: {
                meta: {
                    description: 'Download the connection bank template to track your professional connections and reach out to them for job opportunities.',
                    focusKeyword: ['connection bank', 'connections', 'tracking']
                }
            }
        },
        {
            path: ROUTES.JOB_SEARCH,
            title: 'Job Search Action Plan - Dreamshift',
            loadComponent: () =>
              import('./pages/job-seach/job-seach.component').then(
                (m) => m.JobSeachComponent
              ),
            data: {
                meta: {
                    description: 'We\'ve created a simple Job Search Strategy for you, focusing on three key areas to help you land your next opportunity.',
                    focusKeyword: ['job search strategy', 'job search', 'job search strategy']
                }
            }
        }
    ]
}, {
    path: ROUTES.AUSTRALIAN_VISA_PATHWAYS,
    component: AuVisaPathwaysComponent,
    title: 'Australian Visa Pathways - DreamShift',
    data: {
        meta: {
            description: 'A beginner-friendly A-Z guide for international students and skilled migrants to find their ideal visa pathway in Australia',
            focusKeyword: ['australian visa pathways', 'australian visa', 'australian', 'visa pathways', 'visa']
        }
    }
}, {
    path: ROUTES.BLOG_POST,
    component: BlogPostComponent,
    title: 'Blog Post - Dreamshift',
    data: {
        meta: {
            description: 'Read our latest blog posts to stay updated on the latest job search tips and strategies.',
            focusKeyword: ['blog posts', 'blog', 'job search tips', 'job search strategies']
        }
    }
}, {
    path: ROUTES.BLOG,
    component: BlogComponent,
    title: 'Blog - Dreamshift',
    data: {
        meta: {
            description: 'Read our latest blog posts to stay updated on the latest job search tips and strategies.',
            focusKeyword: ['blog posts', 'blog', 'job search tips', 'job search strategies']
        }
    }
}, {
    path: ROUTES.CONTACT,
    component: ContactComponent,
    title: 'Contact Us For Resume Writing Services - DreamShift',
    data: {
        meta: {
            description: 'Contact us for resume writing services. We\'ll help you land your dream job in Australia.',
            focusKeyword: ['contact us', 'resume writing', 'job search', 'job search strategies']
        }
    }
},
{
    path: ROUTES.TERMS_AND_POLICIES,
    component: TermsAndPoliciesComponent,
    title: 'Terms and Policies - DreamShift',
    data: {
        meta: {
            description: 'Read our terms and policies to understand how we work and what you can expect from us.',
            focusKeyword: ['terms and policies', 'terms', 'policies']
        }
    }
},
{
    path: ROUTES.ABOUT_US,
    component: InProgressComponent,
    title: 'About Us - DreamShift',
    data: {
        meta: {
            description: 'Learn about DreamShift and our mission to help you land your dream job in Australia.',
            focusKeyword: ['about us', 'dreamshift', 'mission', 'job search']
        }
    }
},
{
    path: ROUTES.VIDEO_LIBRARY,
    component: VideoLibraryPageComponent,
    title: 'Video Library - DreamShift',
    data: {
        meta: {
            description: 'Watch our video library to learn more about our resume writing services and how we can help you land your dream job in Australia.',
            focusKeyword: ['video library', 'resume writing', 'job search', 'job search strategies']
        }
    }
},
// OLD SITE ROUTES BEING REDIRECTED TO NEW SITE ROUTES
{
    path: 'services', 
    redirectTo: ROUTES.OUR_SERVICES,
}, {
    path: 'pricing-au', 
    redirectTo: ROUTES.OUR_SERVICES,
}, {
    path: 'australia', 
    redirectTo: ROUTES.AUSSIE_TOOLKIT,
}, {    
    path: 'how-dreamshift-craft-job-winning-resumes', 
    redirectTo: ROUTES.OUR_PROCESS,
},{
    path: 'au-visa-portal', 
    redirectTo: ROUTES.AUSTRALIAN_VISA_PATHWAYS,
},{
    path: '**', 
    redirectTo: ROUTES.HOME,
}];
