import { Component, Input } from '@angular/core';
import { EmailTemplateModel } from '../../models/email-template.model';
import { DsDropdownComponent } from '../ds-dropdown/ds-dropdown.component';
import { EmailTemplateComponent } from '../email-template/email-template.component';

@Component({
  selector: 'app-email-template-list',
  imports: [DsDropdownComponent, EmailTemplateComponent],
  templateUrl: './email-template-list.component.html',
  styleUrl: './email-template-list.component.scss'
})
export class EmailTemplateListComponent {
  /** Current selection for ds-dropdown: Set of selected option strings (template titles). */
  selected: Set<string> = new Set<string>();

  @Input() templates: Array<EmailTemplateModel> = [];

  ngOnInit(): void {
    // Assign a new Set so change detection picks up the initial selection
    this.selected = new Set<string>([this.templates[0].title]);
  }

  getDropdownOptions(): string[] {
    return this.templates.map((t) => t.title);
  }

  onTemplateSelectionChange(selected: Set<string>): void {
    this.selected = selected;
  }

  /** Get the template object for the current selection (first selected title). Used for email preview. */
  getSelectedTemplate(): typeof this.templates[0] | null {
    const first = [...this.selected][0];
    return this.templates.find((t) => t.title === first) ?? null;
  }
}
