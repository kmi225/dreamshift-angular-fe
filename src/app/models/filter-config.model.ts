/** Configuration for one filter dropdown (2 or 3 per page) */
export interface FilterConfig {
    id: string;
    /** Placeholder when nothing selected (e.g. "Select Subjects...") */
    label: string;
    options: string[];
    /** true = item holds string[] and match if any selected; false = item holds string */
    multiSelect: boolean;
}