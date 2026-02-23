import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

@Component({
  selector: 'app-process',
  imports: [
    FaqComponent,
    FullWidthBannerComponent
  ],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

}
