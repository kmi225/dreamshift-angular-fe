import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BlogPostListItem } from '../models/blog-post-list-item.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

    private readonly http = inject(HttpClient);
    private readonly DREAMSHIFT_API_URL = 'https://dreamshift.net/wp-json/wp/v2';

    getPosts(page: number = 1) {
        return this.http.get<BlogPostListItem[]>(`${this.DREAMSHIFT_API_URL}/posts?per_page=100&page=${page}&_fields=id,date,slug,title,class_list`);
    }
    
    getPostBySlug(dreamshift_slug: string) {
        return this.http.get(`${this.DREAMSHIFT_API_URL}/posts?slug=${dreamshift_slug}`);
    }
}