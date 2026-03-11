import { Component } from '@angular/core';
import { FilterableResourcesComponent } from '../../components/filterable-resources/filterable-resources.component';
import {
  DEFAULT_UPSKILLING_CARDS,
  DEFAULT_UPSKILLING_FILTERS,
} from '../../constants/upskilling-resources.constants';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

@Component({
  selector: 'app-upskilling-resources',
  imports: [FilterableResourcesComponent, FullWidthBannerComponent],
  templateUrl: './upskilling-resources.component.html',
  styleUrl: './upskilling-resources.component.scss',
})
export class UpskillingResourcesComponent {
  readonly data = DEFAULT_UPSKILLING_CARDS;
  readonly filters = DEFAULT_UPSKILLING_FILTERS;
}
