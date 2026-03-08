import { BlogCategory } from "./blog-category.model";

export interface BlogPostListItem {
    id: number;
    title: string;
    slug: string;
    date?: string;
    excerpt?: string;
    featuredImage: string;
    categories?: BlogCategory[];
}

export interface BlogPostListItemResponse {
    data: BlogPostListItem[];
    count: number;
}