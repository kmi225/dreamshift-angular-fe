import { Component } from '@angular/core';
import { FilterableResourcesComponent } from '../../components/filterable-resources/filterable-resources.component';
import {
  DEFAULT_UPSKILLING_CARDS,
  DEFAULT_UPSKILLING_FILTERS,
} from '../../constants/upskilling-resources.constants';

@Component({
  selector: 'app-upskilling-resources',
  imports: [FilterableResourcesComponent],
  templateUrl: './upskilling-resources.component.html',
  styleUrl: './upskilling-resources.component.scss',
})
export class UpskillingResourcesComponent {
  readonly data = DEFAULT_UPSKILLING_CARDS;
  readonly filters = DEFAULT_UPSKILLING_FILTERS;
}
