import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostListItem } from '../../models/blog-post-list-item.model';
import { ROUTES } from '../../constants/routes.constants';
import { CommonModule } from '@angular/common';
import { BlogCategory } from '../../models/blog-category.model';

@Component({
  selector: 'app-blog-post-card',
  imports: [
    CommonModule
  ],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss'
})
export class BlogPostCardComponent {
  private readonly router = inject(Router);
  private readonly categoriesList = [];
  @Input() post: BlogPostListItem = {
    id: 0,
    slug: '',
    title: '',
    featuredImage: '',
  };

  getPostTitle(post: BlogPostListItem): string {
    const raw = String(post?.title ?? '');
    return this.decodeHtmlEntities(raw);
  }

  /** Decodes HTML entities (e.g. &#038; → &) so titles display as plain text. */
  private decodeHtmlEntities(text: string): string {
    if (typeof document === 'undefined') {
      return text.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
    }
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  navigateToPost(slug: string) {
    this.router.navigate([ROUTES.BLOG_POST_PREFIX, slug]);
  }

  getCategory(): string {
    if (!this.post.categories) {
      return '';
    }

    return this.post.categories
      .filter((category: BlogCategory) => category.parent === 0)
      .map((category: BlogCategory) => category.name)
      .join(', ');
  }
}
