import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-template',
  imports: [
    CommonModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownButtonItem,
  ],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.scss'
})
export class EmailTemplateComponent {
@Input() emailIcon: string = '';
@Input() emailTitle: string = '';
@Input() emailSubject: string = '';
@Input() emailBody: string = ``;
@Input() emailTo: string = '';

  private htmlToUrlEncoded(html: string): string {
    // Step 1: Restore paragraph breaks to double newlines
    let decoded = html
      .replace(/<\/p><p>/g, '\n\n')   // </p><p> → double newline
      .replace(/<br>/gi, '\n')         // <br> → single newline
      .replace(/^<p>/, '')             // Remove opening <p>
      .replace(/<\/p>$/, '');          // Remove closing </p>
  
    // Step 2: Unescape HTML special characters
    decoded = decoded
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  
    // Step 3: URL-encode the result
    return encodeURIComponent(decoded);
  }

  public getMailerLink(): string {
    return `mailto:${this.emailTo}?subject=${this.htmlToUrlEncoded(this.emailSubject)}?body=${this.htmlToUrlEncoded(this.emailBody)}`;
  }

  public copyText(): void {
    //replace '  ' with ''
    const text = this.emailBody.replace(/<[^>]*>?/g, '');
    navigator.clipboard.writeText(text);

    // Show a success message
    alert('Text copied to clipboard');
  }

  public sendEmailFromTemplate(): void {
    window.open(this.getMailerLink(), '_blank');
  }
}
