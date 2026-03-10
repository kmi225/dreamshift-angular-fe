import {
  Component,
  HostListener,
  computed,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterableCard } from '../../models/filterable-card.model';
import { FilterConfig } from '../../models/filter-config.model';

@Component({
  selector: 'app-filterable-resources',
  imports: [CommonModule, FormsModule],
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
  openDropdownId = signal<string | null>(null);

  filteredResources = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const resources = this.data();
    const filterConfigs = this.filters();
    const selected = this.selectedByFilterId();

    const getSearchableStrings = (card: FilterableCard): string[] => [
      card.name,
      card.description,
      ...card.metaTags,
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

  triggerText(filter: FilterConfig): string {
    const set = this.selectedByFilterId()[filter.id];
    const n = set?.size ?? 0;
    return n > 0 ? `${n} selected` : filter.label;
  }

  hasSelection(filterId: string): boolean {
    const set = this.selectedByFilterId()[filterId];
    return (set?.size ?? 0) > 0;
  }

  toggleDropdown(filterId: string): void {
    this.openDropdownId.update((current) =>
      current === filterId ? null : filterId
    );
  }

  toggleOption(filterId: string, value: string): void {
    this.selectedByFilterId.update((prev) => {
      const next = { ...prev };
      const set = new Set(next[filterId] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[filterId] = set;
      return next;
    });
  }

  isOptionSelected(filterId: string, value: string): boolean {
    const set = this.selectedByFilterId()[filterId];
    return set?.has(value) ?? false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.multi-select-wrapper')) {
      this.openDropdownId.set(null);
    }
  }
}
