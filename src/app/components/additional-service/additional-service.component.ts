import { Component, inject } from '@angular/core';
import { ROUTES } from '../../constants/routes.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-service',
  imports: [],
  templateUrl: './additional-service.component.html',
  styleUrl: './additional-service.component.scss'
})
export class AdditionalServiceComponent {
  private readonly router = inject(Router);

  public goToContactForm() {
    this.router.navigate([ROUTES.CONTACT]);
  }
}
