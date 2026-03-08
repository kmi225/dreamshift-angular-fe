import { BlogCategory } from "./blog-category.model";

export interface BlogPost {
    post: {
        id: number;
        title: string;
        slug: string;
        date: string;
        content: string;
        featuredImage: string;
        categories: BlogCategory[];
    },
    previous: {
        id: number;
        title: string;
        slug: string;
    },
    next: {
        id: number;
        title: string;
        slug: string;
    },
    related: {
        id: number;
        title: string;
        slug: string;
        featuredImage: string;
    }[]
}