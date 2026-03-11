import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPostListItem, BlogPostListItemResponse } from '../../models/blog-post-list-item.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPostCardComponent } from '../../components/blog-post-card/blog-post-card.component';
import { DsDropdownComponent } from '../../components/ds-dropdown/ds-dropdown.component';
import { DsInputComponent } from '../../components/ds-input/ds-input.component';
import { BlogCategory } from '../../models/blog-category.model';

@Component({
  selector: 'app-blog',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    BlogPostCardComponent,
    DsDropdownComponent,
    DsInputComponent,
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
      this.loadingCategories = false;
    }, (error: any) => {
      console.error(error);
      this.loadingCategories = false;
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

  /** Options for the category dropdown: "All" plus category names */
  public getCategoryOptions(): string[] {
    if (this.loadingCategories) return [];
    return ['All', ...this.categoriesList.map((c) => c.name)];
  }

  /** Label for the category dropdown (shows loading state) */
  public getCategoryDropdownLabel(): string {
    return this.loadingCategories ? 'Loading categories...' : 'Select category';
  }

  /** Current selection for ds-dropdown: "All" when no category, otherwise single category name */
  public getSelectedCategorySet(): Set<string> {
    if (this.category == null) return new Set(['All']);
    const name = this.categoriesList.find((c) => c.slug === this.category)?.name;
    return name != null ? new Set([name]) : new Set(['All']);
  }

  /** Handle category dropdown change (single-select: one category or "All") */
  public onCategorySelectionChange(selected: Set<string>): void {
    const arr = [...selected];
    if (arr.length === 0 || arr.includes('All')) {
      this.category = undefined;
    } else {
      const name = arr[arr.length - 1];
      const slug = this.categoriesList.find((c) => c.name === name)?.slug;
      this.category = slug;
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
