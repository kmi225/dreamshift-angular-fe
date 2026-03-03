import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly currentYear = new Date().getFullYear();
  private readonly route = inject(ActivatedRoute);
  public showFooter: boolean = true;
  
  @Input() origin: 'app' | 'blogPost' = 'app';

  ngOnInit() {
    const url = this.route.snapshot.url;
    console.log("URL", url);
    if (url.some(segment => segment.path === 'blog') && this.origin === 'blogPost') {
      this.showFooter = true;
    } else if (url.some(segment => segment.path === 'blog') && this.origin === 'app') {
      this.showFooter = false;
    } else {
      this.showFooter = true;
    }

    console.log("SHOW FOOTER", this.origin, this.showFooter);
  }
}
