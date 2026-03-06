import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';    
import { BlogPostListItem } from '../../models/blog-post-list-item.model';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPostCardComponent } from '../../components/blog-post-card/blog-post-card.component';
import { CATEGORIES_LIST } from '../../constants/blog.constants';

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
    BlogPostCardComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);
  public readonly categoriesList = CATEGORIES_LIST;

  public posts: BlogPostListItem[] = [];

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
}
