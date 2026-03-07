import { Component, TemplateRef, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { CDN_URL } from '../../constants/cdn.constants';
import { ROUTES } from '../../constants/routes.constants';

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
  private readonly router = inject(Router);
  private offcanvasService = inject(NgbOffcanvas);
  private lastScrollY = 0;
  public isHeaderVisible = true;
  public isBlogPostPage = false;
  public readonly links = [{
    id: 1,
    text: 'Home',
    route: 'home'
  },
  {
    id: 2,
    text: 'Our Services',
    route: 'our-services'
  },
  {
    id: 3,
    text: 'Our Process',
    route: 'our-process'
  },
  {
    id: 4,
    text: 'Aussie Job Toolkit',
    route: 'aussie-toolkit'
  },
  {
    id: 5,
    text: 'About Us',
    route: ''
  },
  {
    id: 6,
    text: 'Blog',
    route: 'blog'
  }];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // If on blog post page, don't hide header (header is outside router-outlet so use Router.url)
    if (this.router.url.startsWith(ROUTES.BLOG_POST_PREFIX)) {
      this.isHeaderVisible = true;
      this.isBlogPostPage = true;
      return;
    }
    this.isBlogPostPage = false;

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

  public navigateToHome() {
    this.router.navigate([ROUTES.HOME]);
  }

  public openMenu(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { 
      position: 'end',
      panelClass: 'ds-header-offcanvas'
    });
  }
}
