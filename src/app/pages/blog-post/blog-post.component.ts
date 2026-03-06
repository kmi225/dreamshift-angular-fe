import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { BlogPostRightPanelComponent } from '../../components/blog-post-right-panel/blog-post-right-panel.component';
import { InterBlogPostNavigationComponent } from '../../components/inter-blog-post-navigation/inter-blog-post-navigation.component';
import { BlogPostListItem } from '../../models/blog-post-list-item.model';

@Component({
  selector: 'app-blog-post',
  imports: [
    FooterComponent,
    CommonModule,
    FullWidthBannerComponent,
    BlogPostRightPanelComponent,
    InterBlogPostNavigationComponent
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {

  private readonly blogService = inject(BlogService);
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);

  public slug: string = this.route.snapshot.params['slug'];
  private post: any;
  public blogTitle: string = '';
  public blogText: string = '';
  /** Sanitized HTML so heading IDs are preserved in the DOM for TOC scrolling */
  public blogTextSafe: SafeHtml = '';
  public loading: boolean = false;
  public toc: any[] = [];
  public desktopImageBanner: string = 'https://dreamshift.net/wp-content/uploads/elementor/thumbs/3-4-rfbqp4v0wb7w1n56a3wxynalv2c6lat26e1vn7optk.jpg';
  public mobileImageBanner: string = 'https://dreamshift.net/wp-content/uploads/2025/09/Blog-Thumbnail-new-26.png';

  ngOnInit() {
    this.loading = true;
    this.blogService.getPostBySlug(this.slug).subscribe((post: any) => {
      this.post = post[0];
      this.blogTitle = this.post.title.rendered;
      this.blogText = this.addContentHeadingIds(this.post.content.rendered);
      // this.blogTextSafe = this.sanitizer.bypassSecurityTrustHtml(this.blogText);
      this.toc = this.generateTOC(this.blogText);
      console.log(this.toc);
      console.log(this.blogText);
      this.loading = false;
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });
  } 

  getPostContent(): string {
    return this.blogText.toString();
  }

  addContentHeadingIds(html: string): string {
    if (!isPlatformBrowser(this.platformId) || typeof DOMParser === 'undefined') {
      return html;
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Inject IDs into headings for TOC generation (unique and non-empty)
    const seen = new Map<string, number>();
    doc.querySelectorAll('h1, h2, h3, h4').forEach(h => {
      let id = this.slugify(h.textContent || '').replace(/^-+|-+$/g, '') || 'heading';
      const count = (seen.get(id) ?? 0) + 1;
      seen.set(id, count);
      h.id = count > 1 ? `${id}-${count}` : id;
    });

    return doc.body.innerHTML;
  }

  generateTOC(html: string): { id: string; text: string; level: number }[] {
    if (!isPlatformBrowser(this.platformId) || typeof DOMParser === 'undefined') {
      return [];
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2, h3, h4'));

    return headings.map(h => ({
      id: h.id,
      text: h.textContent || '',
      level: parseInt(h.tagName.replace('H', ''), 10)
    }));
  }
  
  slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }

  private readonly scrollOffset = 130; // px above target to account for fixed header

  goToSection(id: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - this.scrollOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
