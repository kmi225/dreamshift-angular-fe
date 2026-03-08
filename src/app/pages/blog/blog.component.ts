import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPostListItem, BlogPostListItemResponse } from '../../models/blog-post-list-item.model';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPostCardComponent } from '../../components/blog-post-card/blog-post-card.component';
import { BlogCategory } from '../../models/blog-category.model';

@Component({
  selector: 'app-blog',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    BlogPostCardComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);
  public categoriesList: BlogCategory[] = [];

  public page: number = 1;
  public limit: number = 9;
  public category?: string;
  public search?: string;

  public posts: BlogPostListItem[] = [];

  public selectedCategory: number = 1;
  public loading: boolean = false;
  public totalPosts: number = 0;
  public loadingCategories: boolean = false;
  public loadingMorePosts: boolean = false;

  ngOnInit() {
    this.page = 1;
    this.limit = 9;
    this.category = undefined;
    this.search = undefined;
    this.posts = [];
    this.getPosts();
    this.getCategories();
  }

  public getPosts() {
    this.loading = true;
    this.blogService.getPosts(this.page, this.limit, this.category ?? undefined, this.search ?? undefined)
    .subscribe((posts: BlogPostListItemResponse) => {
      this.posts = posts.data;
      this.totalPosts = posts.count;
      this.loading = false;
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });
  }

  public getCategories() {
    this.loadingCategories = true;
    this.blogService.getCategories().subscribe((categories: BlogCategory[]) => {
      this.categoriesList = categories;
      // this.loadingCategories = false;
    }, (error: any) => {
      console.error(error);
      // this.loadingCategories = false;
    });
  } 

  public loadMorePosts() {
    this.page++;
    this.loadingMorePosts = true;
    this.blogService.getPosts(this.page, this.limit, this.category ?? undefined, this.search ?? undefined)
    .subscribe((posts: BlogPostListItemResponse) => {
      this.posts.push(...posts.data);
      this.loadingMorePosts = false;
    }, (error: any) => {
      console.error(error);
      this.loadingMorePosts = false;
    });
  }

  public setCategory() {
    if (this.category === "undefined") {
      this.category = undefined;
    }
    this.page = 1;
    this.posts = [];
    this.getPosts();
  }

  public setSearch() {
    this.page = 1;
    this.posts = [];
    this.getPosts();
  }
}
