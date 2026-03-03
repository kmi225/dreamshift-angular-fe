import { Component, inject, OnChanges } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {
  title = 'dreamshift-angular-fe';
  public isBlogPostPage: boolean = false;
  private readonly route = inject(ActivatedRoute);

  ngOnChanges() {
    console.log("PARAMS", this.route.snapshot);
    this.isBlogPostPage = this.route.snapshot.params['slug'] !== undefined;
  } 
}
