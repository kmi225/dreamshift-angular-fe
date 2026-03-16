export interface AccordionItem {
    id: string;
    title: string;
    /** HTML for the expanded content (rendered via [innerHTML]). */
    contentHtml: string;
}