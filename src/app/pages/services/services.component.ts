import { Component } from '@angular/core';
import { MainServicesComponent } from '../../components/main-services/main-services.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

@Component({
  selector: 'app-services',
  imports: [
    MainServicesComponent,
    PackagesComponent,
    FullWidthBannerComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
