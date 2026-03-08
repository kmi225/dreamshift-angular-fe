import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BlogPostListItemResponse } from '../models/blog-post-list-item.model';
import { BlogPost } from '../models/blog-post.model';
import { BlogCategory } from '../models/blog-category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

    private readonly http = inject(HttpClient);
    private readonly DREAMSHIFT_API_URL = 'https://dreamshift.net/wp-json/wp/v2';
    private readonly DREAMSHIFT_API_URL_FAST_API = 'https://dreamshift.net/fast-api';

    getPosts(page: number = 1, limit: number = 9, category?: string, search?: string) {
        let params = new HttpParams()

        if (category) {
            params = params.set('category', category);
        }
        if (search) {
            params = params.set('search', search);
        }
        if (limit) {
            params = params.set('per_page', limit.toString());
        }
        if (page) {
            params = params.set('page', page.toString());
        }
        return this.http.get<BlogPostListItemResponse>(`${this.DREAMSHIFT_API_URL_FAST_API}/posts.php`, { params });
    }

    getCategories(): Observable<BlogCategory[]> {
        return this.http.get<BlogCategory[]>(`${this.DREAMSHIFT_API_URL_FAST_API}/categories.php`);
    }
    
    getPostBySlug(dreamshift_slug: string) {
        return this.http.get<BlogPost>(`${this.DREAMSHIFT_API_URL_FAST_API}/post.php?slug=${dreamshift_slug}`);
    }
}