import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-template',
  imports: [
    CommonModule,
  ],
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.scss'
})
export class EmailTemplateComponent {
@Input() emailIcon: string = 'fa-regular fa-envelope';
@Input() emailTitle: string = 'Application Email with Referral';
@Input() emailSubject: string = 'Application for [Job Title] – Referral from [Referrer’s Name]';
@Input() emailBody: string = `
  <p>Dear [Hiring Manager’s Name],</p>

  <p>I’m writing to express my interest in the [Job Title] role at [Company Name]. I have a strong background in [Brief Skills/Field], and I was encouraged to apply by [Referrer’s Name or Title], who spoke highly of your team.

  <p>I would appreciate the opportunity to discuss how my experience aligns with your team’s needs.</p>

  <p>Kind regards,</p>
  <p>[Your Name]</p>
  `;
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
}
