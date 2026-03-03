import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';

@Component({
  selector: 'app-blog-post',
  imports: [
    FooterComponent,
    CommonModule,
    FullWidthBannerComponent,
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {

  private readonly blogService = inject(BlogService);
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  public slug: string = this.route.snapshot.params['slug'];
  private post: any;
  public blogTitle: string = '';
  public blogText: string = '';
  /** Sanitized HTML so heading IDs are preserved in the DOM for TOC scrolling */
  public blogTextSafe: SafeHtml = '';
  public loading: boolean = false;
  public toc: any[] = [];
  
  ngOnInit() {
    this.loading = true;
    this.blogService.getPostBySlug(this.slug).subscribe((post: any) => {
      this.post = post[0];
      this.blogTitle = this.post.title.rendered;
      this.blogText = this.cleanWordPressHtml(this.post.content.rendered);
      this.blogTextSafe = this.sanitizer.bypassSecurityTrustHtml(this.blogText);
      this.toc = this.generateTOC(this.blogText);
      console.log(this.toc);
      console.log(this.blogText);
      this.loading = false;
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });

    console.log("PARAMS", this.route.snapshot);
  } 

  cleanWordPressHtml(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    // 1️⃣ Remove Gutenberg block classes
    doc.querySelectorAll('[class]').forEach(el => {
      const filtered = Array.from(el.classList).filter(
        cls => !cls.startsWith('wp-block')
      );
  
      if (filtered.length > 0) {
        el.className = filtered.join(' ');
      } else {
        el.removeAttribute('class');
      }
    });
  
    // 2️⃣ Remove inline styles (optional)
    doc.querySelectorAll('[style]').forEach(el => {
      el.removeAttribute('style');
    });
  
    // 3️⃣ Remove empty paragraphs
    doc.querySelectorAll('p').forEach(p => {
      if (!p.textContent?.trim()) {
        p.remove();
      }
    });

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

  generateTOC(html: string) {
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

  goToSection(id: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
