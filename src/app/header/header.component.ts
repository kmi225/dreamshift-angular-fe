import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
  }]
}
