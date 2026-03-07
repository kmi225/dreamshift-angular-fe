import { Component, inject, Input } from '@angular/core';
import { BlogPostListItem, BlogPostListItemResponse } from '../../models/blog-post-list-item.model';
import { BlogService } from '../../services/blog.service';
import { BlogPostCardComponent } from '../blog-post-card/blog-post-card.component';

@Component({
  selector: 'app-inter-blog-post-navigation',
  imports: [BlogPostCardComponent],
  templateUrl: './inter-blog-post-navigation.component.html',
  styleUrl: './inter-blog-post-navigation.component.scss'
})
export class InterBlogPostNavigationComponent {
  @Input() currentPostId: number = 0;
  private readonly blogService = inject(BlogService);
  public relatedPosts: BlogPostListItem[] = [];

  ngOnInit() {
    this.blogService.getPosts(1, 4).subscribe((posts: BlogPostListItemResponse) => {
      //filter out the current post from the list of related posts and get a maximum of 3 posts
      this.relatedPosts = posts.data
        .filter((post: BlogPostListItem) => post.id !== this.currentPostId)
        .slice(0, 3);
    }, (error: any) => {
      console.error(error);
    });
  }
}
