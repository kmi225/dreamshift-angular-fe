import { Component, inject } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes.constants';

@Component({
  selector: 'app-blog-post-right-panel',
  imports: [],
  templateUrl: './blog-post-right-panel.component.html',
  styleUrl: './blog-post-right-panel.component.scss'
})
export class BlogPostRightPanelComponent {
  public readonly routes = ROUTES;
  readonly cdnUrl = CDN_URL;
  private readonly router = inject(Router);
  
  public navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
