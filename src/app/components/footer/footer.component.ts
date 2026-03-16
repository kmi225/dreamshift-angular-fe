import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ROUTES } from '../../constants/routes.constants';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  public readonly currentYear = new Date().getFullYear();
  private readonly router = inject(Router);
  public readonly routes = ROUTES;
  public showFooter = false;

  @Input() pageRoute = '';
  @Input() origin: 'app' | 'blogPost' = 'app';

  private routerEventsSub = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd)
  ).subscribe(() => this.updateVisibility());

  ngOnInit() {
    this.updateVisibility();
  }

  ngOnDestroy() {
    this.routerEventsSub.unsubscribe();
  }

  private updateVisibility(): void {
    const isBlogPostUrl = this.router.url.startsWith('/' + ROUTES.BLOG_POST_PREFIX);
    this.showFooter =
      (this.origin === 'app' && !isBlogPostUrl) ||
      (this.origin === 'blogPost' && isBlogPostUrl);
  }

  public navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  public navigateToSocials(social: string) {
    switch (social) {
      case 'linkedin':
        window.open('https://www.linkedin.com/company/dreamshiftcareers/posts/?feedView=all', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/dreamshift.careers/', '_blank');
        break;
      case 'tiktok':
        window.open('https://www.tiktok.com/@dreamshift.careers/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/dreamshift.careers/', '_blank');
        break;
      default:
        break;
    }
  }
}
