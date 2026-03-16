import { AccordionItem } from '../models/accordion-item.model';

export const FREQUENTLY_ASKED_QUESTIONS: AccordionItem[] = [
    {
      id: 'industries',
      title: 'Have you worked with clients in my industry?',
      contentHtml: `
        We’ve partnered with clients across 40+ industries, including:
        <ul>
          <li>Banking &amp; Finance</li>
          <li>Beauty &amp; Cosmetics</li>
          <li>Business Development</li>
          <li>Education</li>
          <li>Government &amp; Regulatory</li>
          <li>Human Resources (HR)</li>
          <li>Information Technology (IT)</li>
          <li>Logistics</li>
          <li>Manufacturing</li>
          <li>Non-Profit &amp; Humanitarian</li>
          <li>Operations</li>
          <li>Retail</li>
          <li>Sales &amp; Marketing</li>
          <li>Telecommunication</li>
          <li>Travel &amp; Hospitality</li>
        </ul>
        If you don’t see your industry listed, don’t hesitate to reach out. We’re here to help!
      `
    },
    {
      id: 'customization',
      title: 'Can I customize a package to fit my needs?',
      contentHtml: `
        <b>Absolutely!</b> We understand that every client is unique, and we’re flexible in tailoring our
        services to meet your specific requirements. Just let us know what you need, and we’ll work with you
        to create a personalized solution.
      `
    },
    {
      id: 'revisions',
      title: 'Do you offer revisions?',
      contentHtml: `
        <b>Yes</b>, we value your satisfaction and offer revisions to ensure your documents meet your
        expectations. We provide unlimited rounds of revisions within 1st week after delivering the initial draft.
      `
    },
    {
      id: 'expedited',
      title: 'What if I have an Urgent Project Deadline?',
      contentHtml: `
        We understand that sometimes time is of the essence. While we strive to accommodate urgent requests
        whenever possible, <b>EXPEDITED SERVICES</b> may be available for a small additional fee. Please
        contact us to discuss your specific timeline, and we’ll do our best to meet your needs.
      `
    },
    {
      id: 'turnaround-time',
      title: 'What is the turnaround time for your services?',
      contentHtml: `
        Turnaround times vary depending on the package and service you choose which are mentioned above.
        Typically, you can expect to receive your completed documents <b>within 5–14 Days</b>, ensuring
        timely delivery without compromising quality.
      `
    }
];