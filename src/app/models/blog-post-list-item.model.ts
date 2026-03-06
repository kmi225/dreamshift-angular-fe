export interface BlogPostListItem {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    class_list: string[];
    excerpt: {
        rendered: string;
    };
}