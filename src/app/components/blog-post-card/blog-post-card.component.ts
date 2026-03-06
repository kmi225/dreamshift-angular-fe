import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostListItem } from '../../models/blog-post-list-item.model';
import { CATEGORIES_LIST } from '../../constants/blog.constants';

@Component({
  selector: 'app-blog-post-card',
  imports: [],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss'
})
export class BlogPostCardComponent {
  private readonly router = inject(Router);
  private readonly categoriesList = CATEGORIES_LIST;
  @Input() post: BlogPostListItem = {
    id: 0,
    date: '',
    slug: '',
    title: {
      rendered: ''
    },
    class_list: [],
    excerpt: {
      rendered: ''
    }
  };

  getPostTitle(post: BlogPostListItem): string {
    const raw = String(post?.title?.rendered ?? '');
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
    this.router.navigate(['/blog-post', slug]);
  }

  getCategoryName(class_list: string[]): string {
    //return first category name from the list of categories that exists in the class_list
    return this.categoriesList.filter(category => class_list.includes(category.searchCategory))[0]?.name ?? '';
  }
}
