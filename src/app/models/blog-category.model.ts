export interface BlogCategory {
    id: number;
    name: string;
    slug: string;
    parent: number;
    postCount?: number;
    children?: BlogCategory[];
}