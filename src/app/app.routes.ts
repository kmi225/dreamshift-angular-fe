import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component';
import { ProcessComponent } from './pages/process/process.component';
import { AussieToolkitComponent } from './pages/aussie-toolkit/aussie-toolkit.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [{
    path: '', 
    component: HomeComponent
}, {
    path: 'our-services', 
    component: ServicesComponent
}, {
    path: 'our-process', 
    component: ProcessComponent
}, {
    path: 'aussie-toolkit', 
    component: AussieToolkitComponent
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
