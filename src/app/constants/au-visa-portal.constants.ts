import { AccordionItem } from '../models/accordion-item.model';

export const STUDENT_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'key-visa-conditions',
        title: 'Key Visa Conditions',
        contentHtml: `<ul>
            <li><b>8105/8104:</b> Work limits</li>
            <li><b>8202:</b> You must remain enrolled and maintain course progress</li>
            <li><b>8501:</b> You must maintain adequate health insurance</li>
        </ul>`
    },
    {
        id: 'genuine-student-gs-requirement',
        title: 'Genuine Student (GS) Requirement',
        contentHtml: `The GS requirement (replacing GTE as of March 2024) <b>checks whether you are genuinely coming to Australia to study.</b> You must explain your course choice, how it fits your background, and your future career plans.`
    },
    {
        id: 'financial-capacity',
        title: 'Financial Capacity',
        contentHtml: `You must show you can afford tuition and living costs. As of late 2025, a primary applicant needs to show approximately <b>AUD $29,710</b> for living expenses.`
    },
    {
        id: 'work-rights-on-500',
        title: 'Work Rights on 500',
        contentHtml: `When your course is in session, you can work up to <b>48 hours per fortnight</b>. During official school breaks, you can work <b>unlimited hours</b>.`
    },
    {
        id: 'overseas-student-health-cover',
        title: 'Overseas Student Health Cover',
        contentHtml: `OSHC is mandatory health insurance for the entire duration of your visa. Average cost for a single student is <b>~AUD $478–$600 per year</b>.`
    }
];

export const POST_STUDY_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'the-two-main-streams',
        title: 'The Two Main Streams',
        contentHtml: `<ol>
            <li><b>Post-Higher Education Work:</b> For those with a Bachelor's degree or higher</li>
            <li><b>Post-Vocational Education Work:</b> For those with trade qualifications or diplomas relevant to occupations on the Skilled Occupation List.</li>
        </ol>`
    },
    {
        id: 'new-age-limits-2024-25',
        title: 'New Age Limits (2024-25)',
        contentHtml: `<p>Effective July 2024, the age limit for most applicants is <b>35 years</b>. Exceptions (up to age 50) remain for Masters (Research) and PhD graduates, as well as Hong Kong and British National Overseas (BNO) passport holders.</p>`
    },
    {
        id: 'stay-durations-by-qualification',
        title: 'Stay Durations by Qualification',
        contentHtml: `<p>Your stay length depends on your degree:</p>
        <ul>
            <li><b>Bachelor or Masters (Coursework)</b> graduates get 2 years</li>
            <li><b>Masters (Research)</b> graduates get 3 years</li>
            <li><b>PhD</b> graduates get 3 years</li>
        </ul>
        <p>Note: Indian nationals may have different durations under AI-ECTA.</p>`
    },
    {
        id: 'work-rights-conditions',
        title: 'Work Rights & Conditions',
        contentHtml: `<p>The 485 visa provides <b>unrestricted work rights</b>, allowing you to work 40+ hours per week in any field. You must maintain <b>Overseas Visitor Health Cover (OVHC)</b> for the duration of this visa.</p>`
    }
];

export const SKILLED_INDEPENDENT_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'how-it-works',
        title: 'How It Works',
        contentHtml: `<p>This is a points-tested permanent visa. You submit an Expression of Interest (EOI) and must be invited to apply. You do <b>not</b> need an employer or state sponsor.</p>`
    },
    {
        id: 'current-status-2025',
        title: 'Current Status (2025)',
        contentHtml: `<p>This visa is currently very competitive with a low allocation (approx 16,900 places). Invitations are prioritised for critical sectors like <b>Healthcare and Teaching</b>.</p>`
    },
    {
        id: 'points-score',
        title: 'Points Score',
        contentHtml: `<p>You need a minimum of <b>65 points</b>, but in reality, many non-critical occupations require 85+ points to be invited.</p>`
    },
    {
        id: 'permanent-residency',
        title: 'Permanent Residency',
        contentHtml: `<p>This is a direct PR visa. If granted, you can live and work anywhere in Australia indefinitely and access Medicare immediately.</p>`
    }
];

export const SKILLS_IN_DEMAND_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'new-202425-rules',
        title: 'New 2024/25 Rules',
        contentHtml: `<p>This visa replaced the TSS 482. It now offers a clearer pathway to PR (186 visa) for all streams after working for your sponsor for <b>2 years</b> (down from 3).</p>`
    },
    {
        id: 'stream-1-core-skills',
        title: 'Stream 1: Core Skills',
        contentHtml: `<p>For workers in occupations on the Core Skills list. You must earn at least the TSMIT threshold (increasing to <b>$76,515</b> from July 2025).</p>`
    },
    {
        id: 'stream-2-specialist-skills',
        title: 'Stream 2: Specialist Skills',
        contentHtml: `<p>For highly skilled workers in almost any occupation (except trades/labour) who earn at least <b>$141,210</b> per year.</p>`
    },
    {
        id: 'work-experience',
        title: 'Work Experience',
        contentHtml: `<p>You now only need <b>1 year</b> of full-time work experience to be eligible for this visa (reduced from the previous 2-year requirement).</p>`
    }
];

export const SKILLED_NOMINATED_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'state-nomination-5-points',
        title: 'State Nomination (+5 Points)',
        contentHtml: `<p>Unlike the 189, this visa requires a nomination from a state (like NSW, VIC, or QLD). Receiving this nomination automatically adds <b>+5 points</b> to your score.</p>`
    },
    {
        id: 'state-obligations',
        title: 'State Obligations',
        contentHtml: `<p>In exchange for nomination, you typically must commit to living and working in that specific state for <b>2 years</b> after the visa is granted.</p>`
    },
    {
        id: 'permanent-residency',
        title: 'Permanent Residency',
        contentHtml: `<p>This is a <b>permanent visa</b> from day one. You get full work rights and access to Medicare immediately.</p>`
    }
];

export const SKILLED_WORK_REGIONAL_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'the-regional-boost-15',
        title: 'The Regional Boost (+15)',
        contentHtml: `<p>This visa offers the highest points boost: <b>+15 points</b> if you are nominated by a regional state agency or sponsored by an eligible family member in a regional area.</p>`
    },
    {
        id: 'regional-requirement',
        title: 'Regional Requirement',
        contentHtml: `<p>You must live, work, and study in a “Designated Regional Area” (generally anywhere <i>except</i> Sydney, Melbourne, or Brisbane) for <b>3 years</b>.</p>`
    },
    {
        id: 'pathway-to-pr',
        title: 'Pathway to PR',
        contentHtml: `<p>This visa is valid for 5 years. After living in a regional area for 3 years and meeting income reporting rules, you can apply for the 191 Permanent Residence visa.</p>`
    }
];

export const EMPLOYER_NOMINATION_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'direct-entry-stream',
        title: 'Direct Entry Stream',
        contentHtml: `<p>For applicants who have a positive skills assessment and at least <b>3 years</b> of relevant work experience. You can get PR immediately if an employer sponsors you.</p>`
    },
    {
        id: 'transition-stream-trt',
        title: 'Transition Stream (TRT)',
        contentHtml: `<p>For workers already on a 482 visa. You can usually transition to this PR visa after working for your sponsoring employer for <b>2 years</b>.</p>`
    },
    {
        id: 'no-points-test',
        title: 'No Points Test',
        contentHtml: `<p>This visa is <b>not</b> points-tested. Eligibility depends on your employer’s nomination, your age (usually under 45), and your skills.</p>`
    }
];

export const PR_SKILLED_REGIONAL_VISA_ACCORDION_ITEMS: AccordionItem[] = [
    {
        id: 'eligibility',
        title: 'Eligibility',
        contentHtml: `<p>You must have held a provisional regional visa (subclass 491 or 494) for at least <b>3 years</b>.</p>`
    },
    {
        id: 'income-requirements',
        title: 'Income Requirements',
        contentHtml: `<p>You do not need to meet a specific high salary threshold, but you must provide <b>ATO Notices of Assessment</b> for 3 income years to prove you earned taxable income.</p>`
    },
    {
        id: 'no-new-nomination',
        title: 'No New Nomination',
        contentHtml: `<p>You do NOT need a new state nomination or employer sponsor for this visa. It depends entirely on your compliance with the previous regional visa conditions.</p>`
    }
];

export const AU_VISAS = [
    {
        id: 500,
        navTitle: 'Student Visa (500)',
        heading: `Student Visa (Subclass 500) Guide`,
        subtext: `Lets you study full-time in Australia for the duration of your course`,
        accordionItems: STUDENT_VISA_ACCORDION_ITEMS
    },
    {
        id: 485,
        navTitle: 'Temporary Graduate (485)',
        heading: `Post-Study Work Visa (Subclass 485) Guide`,
        subtext: `Lets eligible graduates stay and work in Australia to gain professional experience after finishing their studies.`,
        accordionItems: POST_STUDY_VISA_ACCORDION_ITEMS
    },
    {
        id: 189,
        navTitle: 'Skilled Independent (189)',
        heading: `Skilled Independent (189)`,
        subtext: `A permanent residency visa for invited workers with skills Australia needs. It does not require a sponsor`,
        accordionItems: SKILLED_INDEPENDENT_VISA_ACCORDION_ITEMS
    },
    {
        id: 482,
        navTitle: 'Skills in Demand (482)',
        heading: `Skills in Demand (482)`,
        subtext: `An employer-sponsored temporary visa that replaced the old TSS 482 in late 2024`,
        accordionItems: SKILLS_IN_DEMAND_VISA_ACCORDION_ITEMS
    },
    {
        id: 190,
        navTitle: 'Skilled Nominated (190)',
        heading: `Skilled Nominated (190)`,
        subtext: `A permanent residency visa for skilled workers who are nominated by an Australian state or territory government`,
        accordionItems: SKILLED_NOMINATED_VISA_ACCORDION_ITEMS
    },
    {
        id: 491,
        navTitle: 'Skilled Work Regional (491)',
        heading: `Skilled Work Regional (491)`,
        subtext: `A 5-year provisional visa requiring you to live and work in regional Australia. It provides a pathway to PR 191`,
        accordionItems: SKILLED_WORK_REGIONAL_VISA_ACCORDION_ITEMS
    },
    {
        id: 186,
        navTitle: 'Employer Nomination (186)',
        heading: `Employer Nomination (186)`,
        subtext: `Allows Australian employers to sponsor skilled workers for permanent residency`,
        accordionItems: EMPLOYER_NOMINATION_VISA_ACCORDION_ITEMS
    },
    {
        id: 191,
        navTitle: 'PR Skilled Regional (191)',
        heading: `PR Skilled Regional (191)`,
        subtext: `The permanent residency stage for workers who have held a 491 or 494 visa for at least three years`,
        accordionItems: PR_SKILLED_REGIONAL_VISA_ACCORDION_ITEMS
    }
]