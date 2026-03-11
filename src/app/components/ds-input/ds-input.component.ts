import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-input.component.html',
  styleUrl: './ds-input.component.scss',
})
export class DsInputComponent {
  /** Font Awesome icon classes (e.g. "fa-solid fa-magnifying-glass"). Omit for no icon. */
  icon = input<string>();
  /** Placeholder text */
  placeholder = input<string>('');
  /** Current value (for two-way binding use with valueChange) */
  value = input<string>('');
  /** Input type */
  type = input<string>('text');

  /** Emitted when the value changes */
  valueChange = output<string>();

  protected onInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.valueChange.emit(el.value);
  }
}
