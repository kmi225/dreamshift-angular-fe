import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component';
import { ProcessComponent } from './pages/process/process.component';

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
    path: 'services', 
    redirectTo: 'our-services'
}, {
    path: 'how-dreamshift-craft-job-winning-resumes', 
    redirectTo: 'our-process'
},{
    path: '**', 
    redirectTo: ''
}];
