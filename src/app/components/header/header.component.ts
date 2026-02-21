import { Component, TemplateRef, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    NgbOffcanvasModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly cdnUrl = CDN_URL;
  private offcanvasService = inject(NgbOffcanvas);
  private lastScrollY = 0;
  public isHeaderVisible = true;

  public readonly links = [{
    text: 'Home',
    route: 'home'
  },
  {
    text: 'Our Services',
    route: 'services'
  },
  {
    text: 'Our Process',
    route: 'services'
  },
  {
    text: 'Aussie Job Toolkit',
    route: 'services'
  },
  {
    text: 'About Us',
    route: 'services'
  },
  {
    text: 'Blog',
    route: 'services'
  }];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollY = window.scrollY;
    
    // Show header when scrolling up, hide when scrolling down
    if (currentScrollY < this.lastScrollY) {
      // Scrolling up
      this.isHeaderVisible = true;
    } else if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      // Scrolling down (only hide after scrolling past 100px to avoid hiding at top)
      this.isHeaderVisible = false;
    }
    
    // Always show header at the very top of the page
    if (currentScrollY < 10) {
      this.isHeaderVisible = true;
    }
    
    this.lastScrollY = currentScrollY;
  }

  public openMenu(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { 
      position: 'end',
      panelClass: 'ds-header-offcanvas'
    });
  }
}
