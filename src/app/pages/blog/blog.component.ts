import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';    
import { BlogPostListItem } from '../../models/blog-post-list-item.model';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface BlogCategory {
  id: number;
  name: string;
  searchCategory: string;
  visible: boolean;
}

@Component({
  selector: 'app-blog',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  public posts: BlogPostListItem[] = [];

  public categories: BlogCategory[] = [ {
    id: 1,
    name: 'All',
    searchCategory: 'all',
    visible: true
  }, {
    id: 2,
    name: 'Career Guidance',
    searchCategory: 'category-career-guidance',
    visible: true
  }, {
    id: 3,
    name: 'DreamShift stories',
    searchCategory: 'category-dreamshift-stories',
    visible: true
  }, {
    id: 4,
    name: 'Editor\'s picks',
    searchCategory: 'category-4',
    visible: true
  }, {
    id: 5,
    name: 'Job Market Research',
    searchCategory: 'category-job-market-research',
    visible: true
  }, {
    id: 6,
    name: 'Resources',
    searchCategory: 'category-6',
    visible: true
  }, {
    id: 7,
    name: 'Resume and CV Writing',
    searchCategory: 'category-resume-cv-writing',
    visible: true
  }, {
    id: 8,
    name: 'Uncategorized',
    searchCategory: 'category-uncategorized',
    visible: true
  }, {
    id: 9,
    name: 'Sri Lankan Job Market',
    searchCategory: 'category-sri-lankan-job-market',
    visible: false
  }, {
    id: 10,
    name: 'Australian Job Market',
    searchCategory: 'category-australian-job-market',
    visible: false
  }, {
    id: 11,
    name: 'LinkedIn',
    searchCategory: 'category-linkedin',
    visible: false
  }, {
    id: 12,
    name: 'Applicant Tracking Systems',
    searchCategory: 'category-ats',
    visible: false
  }];

  public selectedCategory: number = 1;
  public loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.blogService.getPosts().subscribe((posts: BlogPostListItem[]) => {
      this.posts = posts;
      console.log(this.posts);
      this.loading = false;
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });
  }

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
}
