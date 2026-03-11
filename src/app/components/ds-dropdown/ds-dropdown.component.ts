import { Component, computed, input, output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ds-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './ds-dropdown.component.html',
  styleUrl: './ds-dropdown.component.scss',
})
export class DsDropdownComponent {
  /** Options shown in the dropdown (e.g. ['Hybrid', 'Online', 'On-site']) */
  options = input.required<string[]>();
  /** Label shown on the trigger when nothing is selected */
  label = input.required<string>();
  /** Currently selected values (multi-select) */
  selected = input<Set<string>>(new Set());

  /** Emitted when selection changes; parent should update their state */
  selectedChange = output<Set<string>>();

  protected triggerText = computed(() => {
    const set = this.selected();
    const n = set?.size ?? 0;
    return n > 0 ? `${n} selected` : this.label();
  });

  protected hasSelection = computed(() => (this.selected()?.size ?? 0) > 0);

  protected isOptionSelected(value: string): boolean {
    return this.selected()?.has(value) ?? false;
  }

  protected toggleOption(value: string): void {
    const set = new Set(this.selected() ?? []);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    this.selectedChange.emit(set);
  }
}
