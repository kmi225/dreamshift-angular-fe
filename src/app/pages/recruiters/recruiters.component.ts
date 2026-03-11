import { Component } from '@angular/core';
import { FilterableResourcesComponent } from '../../components/filterable-resources/filterable-resources.component';
import {
  DEFAULT_RECRUITERS_CARDS,
  DEFAULT_RECRUITERS_FILTERS,
} from '../../constants/recruiters.constants';

@Component({
  selector: 'app-recruiters',
  imports: [FilterableResourcesComponent],
  templateUrl: './recruiters.component.html',
  styleUrl: './recruiters.component.scss',
})
export class RecruitersComponent {
  readonly data = DEFAULT_RECRUITERS_CARDS;
  readonly filters = DEFAULT_RECRUITERS_FILTERS;
}
