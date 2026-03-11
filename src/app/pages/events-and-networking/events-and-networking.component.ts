import { Component } from '@angular/core';
import { FilterableResourcesComponent } from '../../components/filterable-resources/filterable-resources.component';
import {
  DEFAULT_EVENTS_CARDS,
  DEFAULT_EVENTS_FILTERS,
} from '../../constants/events-and-networking.constants';

@Component({
  selector: 'app-events-and-networking',
  imports: [FilterableResourcesComponent],
  templateUrl: './events-and-networking.component.html',
  styleUrl: './events-and-networking.component.scss',
})
export class EventsAndNetworkingComponent {
  readonly data = DEFAULT_EVENTS_CARDS;
  readonly filters = DEFAULT_EVENTS_FILTERS;
}
