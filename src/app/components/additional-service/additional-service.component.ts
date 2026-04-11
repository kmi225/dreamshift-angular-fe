import { Component, inject } from '@angular/core';
import { ROUTES } from '../../constants/routes.constants';
import { Router } from '@angular/router';
import { AnimateOnVisibleDirective } from '../../directives/animate-on-visible.directive';

@Component({
  selector: 'app-additional-service',
  imports: [
    AnimateOnVisibleDirective
  ],
  templateUrl: './additional-service.component.html',
  styleUrl: './additional-service.component.scss'
})
export class AdditionalServiceComponent {
  private readonly router = inject(Router);

  public goToContactForm() {
    this.router.navigate([ROUTES.CONTACT]);
  }
}
