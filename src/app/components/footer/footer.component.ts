import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
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
export class FooterComponent {
  public readonly currentYear = new Date().getFullYear();
  private readonly router = inject(Router);
  public showFooter: boolean = true;
  @Input() pageRoute: string = '';
  @Input() origin: 'app' | 'blogPost' = 'app';

  ngOnInit() {
    if (this.router.url.startsWith(ROUTES.BLOG_POST_PREFIX) && this.origin === 'app') {
      this.showFooter = false;
    } else {
      this.showFooter = true;
    }
  }
}
