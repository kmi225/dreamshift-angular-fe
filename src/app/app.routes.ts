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

export const routes: Routes = [{
    path: ROUTES.HOME,
    component: HomeComponent,
    title: 'DreamShift | We write CVs with a 60-Day Interview Guarantee - Australia'
},{
    path: ROUTES.OUR_PROCESS,
    component: OurProcessComponent,
    title: 'How DreamShift Crafts Job Winning Resumes? - DreamShift'
}, {
    path: ROUTES.OUR_SERVICES,
    component: OurServicesComponent,
    title: 'Services and Packages (Resume Writing Services) - DreamShift'
}, {
    path: ROUTES.AUSSIE_TOOLKIT,
    title: 'Australian Job Search Toolkit - DreamShift',
    children: [
        {
            path: '',
            component: AussieToolkitComponent
        },
        {
            path: ROUTES.UPSKILLING_RESOURCES,
            component: UpskillingResourcesComponent,
            title: 'Courses & Upskilling Resources - Dreamshift'
        },
        {
            path: ROUTES.EVENTS_AND_NETWORKING,
            component: EventsAndNetworkingComponent,
            title: 'Networking Resources - Dreamshift'
        },
        {
            path: ROUTES.RECRUITERS,
            component: RecruitersComponent,
            title: 'Top Australian Recruiters - Dreamshift'
        },
        {
            path: ROUTES.CONNECTION_BANK,
            title: 'The Connection Bank - Dreamshift',
            loadComponent: () =>
              import('./pages/connection-bank/connection-bank.component').then(
                (m) => m.ConnectionBankComponent
              ),
        },
        {
            path: ROUTES.JOB_SEARCH,
            title: 'Job Search Action Plan - Dreamshift',
            loadComponent: () =>
              import('./pages/job-seach/job-seach.component').then(
                (m) => m.JobSeachComponent
              ),
        }
    ]
}, {
    path: ROUTES.AUSTRALIAN_VISA_PATHWAYS,
    component: AuVisaPathwaysComponent,
    title: 'Australian Visa Pathways - DreamShift'
}, {
    path: ROUTES.BLOG_POST,
    component: BlogPostComponent,
    title: 'Blog Post - Dreamshift'
}, {
    path: ROUTES.BLOG,
    component: BlogComponent,
    title: 'Blog - Dreamshift'
}, {
    path: ROUTES.CONTACT,
    component: ContactComponent,
    title: 'Contact Us For Resume Writing Services - DreamShift'
},
{
    path: ROUTES.TERMS_AND_POLICIES,
    component: TermsAndPoliciesComponent,
    title: 'Terms and Policies - DreamShift'
},
{
    path: ROUTES.ABOUT_US,
    component: InProgressComponent,
    title: 'About Us - DreamShift'
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
}, {
    path: '**', 
    redirectTo: ROUTES.HOME,
}];
