import { Component, inject, Input } from '@angular/core';
import { BlogPostListItem, BlogPostListItemResponse } from '../../models/blog-post-list-item.model';
import { BlogService } from '../../services/blog.service';
import { BlogPostCardComponent } from '../blog-post-card/blog-post-card.component';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inter-blog-post-navigation',
  imports: [
    BlogPostCardComponent,
    CommonModule
  ],
  templateUrl: './inter-blog-post-navigation.component.html',
  styleUrl: './inter-blog-post-navigation.component.scss'
})
export class InterBlogPostNavigationComponent {
  @Input() currentPostId: number = 0;
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);
  @Input() previousPost: {
    id: number;
    title: string;
    slug: string;
  } = {
    id: 0,
    title: '',
    slug: ''
  };
  @Input() nextPost: {
    id: number;
    title: string;
    slug: string;
  } = {
    id: 0,
    title: '',
    slug: ''
  };
  @Input() relatedPosts: BlogPostListItem[] = [];

  ngOnInit() {
    console.log(this.previousPost);
    console.log(this.nextPost);
    console.log(this.relatedPosts);
  }

  navigateToPost(post: {
    id: number;
    title: string;
    slug: string;
  }) {
    this.router.navigate([ROUTES.BLOG_POST_PREFIX, post.slug]);
  }
}
