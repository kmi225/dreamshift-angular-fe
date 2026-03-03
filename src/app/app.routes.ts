import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurProcessComponent } from './pages/our-process/our-process.component';
import { AussieToolkitComponent } from './pages/aussie-toolkit/aussie-toolkit.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [{
    path: '', 
    component: HomeComponent
}, {
    path: 'our-services', 
    component: OurServicesComponent
}, {
    path: 'our-process', 
    component: OurProcessComponent
}, {
    path: 'aussie-toolkit', 
    component: AussieToolkitComponent
},  {
    path: 'blog/:slug', 
    component: BlogPostComponent
}, {
    path: 'blog',
    component: BlogComponent
}, {
    path: 'services', 
    redirectTo: 'our-services',
}, {
    path: 'australia', 
    redirectTo: 'aussie-toolkit'
}, {    
    path: 'how-dreamshift-craft-job-winning-resumes', 
    redirectTo: 'our-process'
},{
    path: '**', 
    redirectTo: ''
}];
