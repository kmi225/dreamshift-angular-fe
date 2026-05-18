import { Component } from '@angular/core';

interface PolicyNavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-terms-and-policies',
  imports: [],
  templateUrl: './terms-and-policies.component.html',
  styleUrl: './terms-and-policies.component.scss'
})
export class TermsAndPoliciesComponent {
  public adminEmail = 'admin@dreamshift.net';
  public adminEmailMailerLink = `mailto:${this.adminEmail}`;
  public readonly phone = '+61 489 989 406';
  public readonly phoneTelLink = 'tel:+61489989406';

  public readonly policyNav: PolicyNavItem[] = [
    { id: 'refund-policy', label: 'Refund Policy', icon: 'fa-money-check-dollar' },
    { id: 'privacy-policy', label: 'Privacy Policy', icon: 'fa-shield-halved' },
    { id: 'terms-and-conditions', label: 'Terms & Conditions', icon: 'fa-file-contract' },
  ];

  private readonly scrollOffset = 130;

  scrollToSection(id: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    const top = element.getBoundingClientRect().top + window.scrollY - this.scrollOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
