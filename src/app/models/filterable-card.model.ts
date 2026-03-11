/** A card item that can be filtered and displayed in the grid */
export interface FilterableCard {
    name: string;
    description: string;
    /** Tags shown on the card (e.g. price, learning type) */
    metaTags: string[];
    link: string;
    /** Values used for filtering; key = filter id, value = single string or array for multi-select */
    filterValues: Record<string, string | string[]>;
    /** Optional: list of branch names shown in a tooltip/dropdown (e.g. recruiters page) */
    branches?: string[];
}