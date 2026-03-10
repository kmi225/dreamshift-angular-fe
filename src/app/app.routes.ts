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

export const routes: Routes = [{
    path: ROUTES.HOME, 
    component: HomeComponent
}, {
    path: ROUTES.OUR_SERVICES, 
    component: OurServicesComponent
}, {
    path: ROUTES.OUR_PROCESS, 
    component: OurProcessComponent
}, {
    path: ROUTES.AUSSIE_TOOLKIT, 
    component: AussieToolkitComponent
},  {
    path: ROUTES.BLOG_POST,
    component: BlogPostComponent
}, {
    path: ROUTES.BLOG,
    component: BlogComponent
}, {
    path: ROUTES.CONTACT,
    component: ContactComponent
},
{
    path: ROUTES.AUSSIE_UPSKILLING_RESOURCES,
    component: UpskillingResourcesComponent
},
// OLD SITE ROUTES BEING REDIRECTED TO NEW SITE ROUTES
{
    path: 'services', 
    redirectTo: ROUTES.OUR_SERVICES,
}, {
    path: 'australia', 
    redirectTo: ROUTES.AUSSIE_TOOLKIT,
}, {    
    path: 'how-dreamshift-craft-job-winning-resumes', 
    redirectTo: ROUTES.OUR_PROCESS,
},{
    path: '**', 
    redirectTo: ROUTES.HOME,
}];
