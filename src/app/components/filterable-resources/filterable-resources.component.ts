import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DsDropdownComponent } from '../ds-dropdown/ds-dropdown.component';
import { DsInputComponent } from '../ds-input/ds-input.component';
import { FilterableCard } from '../../models/filterable-card.model';
import { FilterConfig } from '../../models/filter-config.model';

@Component({
  selector: 'app-filterable-resources',
  imports: [CommonModule, NgbDropdownModule, DsDropdownComponent, DsInputComponent],
  templateUrl: './filterable-resources.component.html',
  styleUrl: './filterable-resources.component.scss',
})
export class FilterableResourcesComponent {
  /** Card data to display and filter */
  data = input.required<FilterableCard[]>();
  /** Filter configs: 2 or 3 dropdowns */
  filters = input.required<FilterConfig[]>();
  /** Search input placeholder */
  searchPlaceholder = input<string>('Search...');
  /** Message when no results */
  noResultsMessage = input<string>('No results match your filters.');

  searchQuery = signal('');
  selectedByFilterId = signal<Record<string, Set<string>>>({});

  filteredResources = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const resources = this.data();
    const filterConfigs = this.filters();
    const selected = this.selectedByFilterId();

    const getSearchableStrings = (card: FilterableCard): string[] => [
      card.name,
      card.description,
      ...card.metaTags,
      ...(card.branches ?? []),
      ...Object.values(card.filterValues).flatMap((v) => (Array.isArray(v) ? v : [v])),
    ];

    return resources.filter((card) => {
      const matchSearch =
        !query ||
        getSearchableStrings(card).some((s) =>
          s.toLowerCase().includes(query)
        );

      const matchFilters = filterConfigs.every((config) => {
        const selectedSet = selected[config.id];
        if (!selectedSet?.size) return true;
        const value = card.filterValues[config.id];
        if (value == null) return false;
        if (config.multiSelect && Array.isArray(value)) {
          return value.some((v) => selectedSet.has(v));
        }
        return selectedSet.has(value as string);
      });

      return matchSearch && matchFilters;
    });
  });

  getSelectedForFilter(filterId: string): Set<string> {
    return this.selectedByFilterId()[filterId] ?? new Set();
  }

  setSelection(filterId: string, selected: Set<string>): void {
    this.selectedByFilterId.update((prev) => ({ ...prev, [filterId]: selected }));
  }
}
