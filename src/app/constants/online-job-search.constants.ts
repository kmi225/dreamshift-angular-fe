import { EmailTemplateModel } from "../models/email-template.model";
import { ProcessStep } from "../models/process-step.model";

export const ONLINE_JOB_SEARCH_TEMPLATES: EmailTemplateModel[] = [
  {
    title: 'Application Email with Referral',
    emailTo: 'hiringmanager@company.com',
    emailSubject: 'Application for [Job Title] – Referral from [Referrer’s Name]',
    emailBody: `<p>Dear [Hiring Manager’s Name],</p>
      <p>I’m writing to express my interest in the [Job Title] role at [Company Name]. I have a strong background in [Brief Skills/Field], and I was encouraged to apply by [Referrer’s Name or Title], who spoke highly of your team.</p>
      <p>I would appreciate the opportunity to discuss how my experience aligns with your team’s needs.</p>
      <p>Kind regards,<br/>[Your Name]</p>`
  },
  {
    title: 'Follow-Up After Application',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Follow-Up on [Job Title] Application',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>I hope you're doing well. I recently applied for the [Job Title] role at [Company Name] and came across your profile while learning more about the team.</p>
      <p>With experience in [Key Areas], I’m excited about the opportunity and would love to know if there are any updates on the process.</p>
      <p>Happy to share any further details if needed!</p>
      <p>Best regards,<br/>[Your Name]</p>`
  },
  {
    title: 'To A Recruiter Right After Applying',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Follow-Up on [Job Title] Application',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>I hope you're doing well. I recently applied for the [Job Title] role at [Company Name] and came across your profile while learning more about the team.</p>
      <p>With experience in [Key Areas], I’m excited about the opportunity and would love to know if there are any updates on the process.</p>
      <p>Happy to share any further details if needed!</p>
      <p>Best regards,<br/>[Your Name]</p>`
  },
  {
    title: 'Message To Inquire About A Job Application',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Application Status Inquiry – [Job Title] at [Company Name]',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>I hope you're doing well. I recently applied for the [Job Title] position at [Company Name] and came across your profile while learning more about the team.</p>
      <p>With [X]+ years of experience in [insert your key skills or domain], I’m truly excited about the opportunity to contribute.</p>
      <p>Would love to know if there are any updates.</p>
      <p>Best regards,<br/>[Your Name]</p>`
  },
  {
    title: 'Reply When Recruiter Asks for CV',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Re: [Job Title] – CV & Additional Details',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>Thank you so much for getting back to me!</p>
      <p>Please find my updated CV attached. Here’s a quick summary:</p>
      <ul>
        <li>Current Location: [City, Country]</li>
        <li>Years of Experience: [e.g., 5+ years in Digital Marketing / Software Development, etc.]</li>
        <li>Key Areas: [List 4–5 relevant skills]</li>
        <li>Availability: [Immediate / Notice Period]</li>
        <li>Work Authorization: [Yes / Visa Type]</li>
      </ul>
      <p>Please let me know if you need anything else.</p>
      <p>Best regards,<br/>[Your Full Name]</p>`
  },
  {
    title: 'Message To A Recruiter After A Rejection',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Request for Feedback – [Job Title] Application',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>Thank you for updating me on the outcome of my application for the [Job Title] role at [Company Name].</p>
      <p>I’d greatly appreciate any feedback you could share regarding my application or interview. Even a few lines would be helpful.</p>
      <p>Thanks again for the opportunity.</p>
      <p>Warm regards,<br/>[Your Name]</p>`
  },
  {
    title: 'Graduate Role Application Template',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Application for [Graduate Role Title] – [Your Name]',
    emailBody: `<p>Hi [Hiring Manager’s / Recruiter’s Name],</p>
      <p>I’m writing to express my interest in the [Graduate Position Title] at [Company Name]. I recently completed my [Bachelor’s/Master’s] in [Field] from [University Name].</p>
      <p>As an international candidate, I bring a global perspective, strong academic foundation, and hands-on project experience.</p>
      <p>I’m currently on a [Visa Type] and fully available.</p>
      <p>Looking forward to hearing from you.</p>
      <p>Warm regards,<br/>[Your Full Name]<br/>[Phone] | [Email] | [LinkedIn URL]</p>`
  },
  {
    title: 'Industry Switch Template',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Application for [Job Title] – [Your Name]',
    emailBody: `<p>Hi [Hiring Manager’s / Recruiter’s Name],</p>
      <p>I’m reaching out to express my interest in the [Job Title] role at [Company Name]. While my background is in [Previous Industry], I’m now transitioning into [Target Industry].</p>
      <p>I’ve developed strong [relevant skills] and have been upskilling through [mention course or experience].</p>
      <p>Attached is my updated CV.</p>
      <p>Thanks so much,<br/>[Your Name]</p>`
  },
  {
    title: 'Remote Job Application Template',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Application for Remote [Job Title] – [Your Name]',
    emailBody: `<p>Hi [Hiring Manager’s / Recruiter’s Name],</p>
      <p>I’m interested in the remote [Job Title] role at [Company Name]. With [X] years of experience in [Field], I have a strong track record of delivering results in remote environments.</p>
      <p>I’m confident in my ability to work autonomously and across time zones.</p>
      <p>Attached is my CV.</p>
      <p>Kind regards,<br/>[Your Name]<br/>[Phone] | [Email] | [LinkedIn URL]</p>`
  },
  {
    title: 'Follow-Up After No Response from Recruiter',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Follow-Up on [Job Title] Application',
    emailBody: `<p>Hi [Hiring Manager’s / Recruiter’s Name],</p>
      <p>Just checking in to see if there are any updates on the [Job Title] position I applied for at [Company].</p>
      <p>I remain very enthusiastic and happy to provide any further information.</p>
      <p>Thanks again for your time!</p>
      <p>Best,<br/>[Your Name]</p>`
  }
];

export const UTILIZING_YOUR_CONNECTIONS_TEMPLATES: EmailTemplateModel[] = [
  {
    title: 'Linkedin Message to Connections at Target Companies',
    emailBody: `<p>Hi [Name],</p>
      <p>I came across your profile while exploring opportunities in [Field] and saw you’re at [Company Name].</p>
      <p>With [X]+ years of experience in [Relevant Areas], I’d love to hear what your experience has been like and any insights you have into the company.</p>
      <p>Looking forward to connecting!</p>
      <p>Best,<br/>[Your Full Name]</p>`
  },
  {
    title: 'Message to Friends/Connections',
    emailBody: `<p>Hey [Name],</p>
      <p>I came across your profile while looking into [Industry] roles and noticed you're at [Company Name].</p>
      <p>Would love to hear your experience there and if you have tips for someone exploring similar roles.</p>
      <p>Thanks and happy to connect!,<br/>– [Your Name]</p>`
  },
  {
    title: 'University Alumni Message',
    emailBody: `<p>Hi [Name],</p>
      <p>I came across your profile while exploring opI noticed we’re both alumni of [University Name] — always great to see a fellow graduate!</p>
      <p>I’m currently exploring roles in [Field] and would love to hear your journey if you’re open to it.</p>
      <p>Best,<br/>[Your Full Name]</p>`
  },
  {
    title: 'To Former Colleagues Asking for Referrals',
    emailBody: `<p>Hi [Name],</p>
      <p>Hope you’re doing great! I’m currently exploring new opportunities in [Field/Job Title] and noticed you're now at [Company].</p>
      <p>If you hear of any openings or could refer me, I’d really appreciate it.</p>
      <p>Happy to send my resume.</p>
      <p>Cheers,<br/>[Your Name]</p>`
  },
  {
    title: 'Thank You For Referral Or Help',
    emailBody: `<p>Hi [Name],</p>
      <p>Thank you so much for referring me to [Company]/[Role] or connecting me with [Contact Name].</p>
      <p>I appreciate your support and will keep you posted on the outcome.</p>
      <p>Let me know if I can ever return the favour!</p>
      <p>Warm regards,<br/>[Your Name]</p>`
  },
  {
    title: 'To Connect After a Webinar/Workshop',
    emailBody: `<p>Hi [Name],</p>
      <p>I recently attended your session on [Topic/Event] and found it really insightful — especially your points on [Key Takeaway].</p>
      <p>I’d love to stay connected and follow more of your work.</p>
      <p>Thanks again!</p>
      <p>Best,<br/>[Your Name]</p>`
  }
];

export const REACHING_OUT_TO_RECRUITERS_TEMPLATES: EmailTemplateModel[] = [
  {
    title: 'Email to Recruiters',
    emailTo: 'recruiter@company.com',
    emailSubject: 'Open to [Field] Roles | [X] Years Experience',
    emailBody: `<p>Dear [Recruiter’s Name],</p>
      <p>I came across your profile and noticed your experience recruiting for roles in [Region]. I’m currently exploring opportunities in [Field] and would love to connect.</p>
      <p>I have [X] years of experience managing [Key Tasks] across [Countries/Industries].</p>
      <p>Here’s my LinkedIn: [URL]</p>
      <p>Looking forward to connecting!</p>
      <p>Warm regards,<br/>[Your Name]</p>`
  }, 
  {
    title: 'LinkedIn Message to Recruiters',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>I saw you recruit for roles in [Industry/Location] and wanted to connect.</p>
      <p>I’m open to roles like [Job Title] where I can contribute with my experience in [Key Skills or Achievements].</p>
      <p>Would love to hear if you’re hiring or open to a quick chat.</p>
      <p>Thanks and looking forward!</p>
      <p>[Your Name]</p>`
  }, 
  {
    title: 'LinkedIn Message to a Company Leader',
    emailBody: `<p>Hi [Name],</p>
      <p>I saw your profile while exploring senior roles in [Field] and your work at [Company] stood out.</p>
      <p>With [X] years of experience in [Key Skills], I’m looking for my next leadership role.</p>
      <p>Would love to hear more about your experience and insights into the company culture.</p>
      <p>Best regards,<br/>[Your Name]</p>`
  }, 
  {
    title: 'Instagram Message to a Recruiter',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>I saw you recruit for [Industry] and I’m currently exploring opportunities in [Field/Job Title].</p>
      <p>Happy to share more about my background if anything relevant comes up.</p>
      <p>Looking forward to connecting!</p>
      <p>- [Your Name]</p>`
  }, 
  {
    title: 'WhatsApp Message to a Recruiter',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>This is [Your Name]. I recently applied for the [Job Title] role and wanted to follow up.</p>
      <p>I have [X years] of experience in [Field] and would love to connect.</p>
      <p>Happy to send my CV or further details.</p>
      <p>Thanks!</p>
      <p>- [Your First Name]</p>`
  }, 
  {
    title: 'Follow-up Message to Recruiter',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>Thanks for the update — I really appreciate you keeping me in mind.</p>
      <p>Please feel free to reach out if something relevant opens up.</p>
      <p>I’m happy to chat anytime!</p>
      <p>Best regards,<br/>[Your Name]</p>`
  }, 
  {
    title: 'Cold Outreach to HR Manager',
    emailBody: `<p>Hi [Name],</p>
      <p>Hope you’re doing well. I came across your profile while researching [Company Name] and wanted to express interest in [Field] roles.</p>
      <p>Happy to share more or send my resume if needed.</p>
      <p>Best,<br/>[Your Name]</p>`
  }, 
  {
    title: 'Referral Message to a Recruiter',
    emailBody: `<p>Hi [Recruiter’s Name],</p>
      <p>Hope you’re doing well. I came across your profile while rI was referred to you by [Referrer’s Name], who suggested I reach out.</p>
      <p>I’m currently exploring opportunities in [Field] and would love to share more about my experience in [Key Skills].</p>
      <p>Happy to send over my CV.</p>
      <p>Best regards,<br/>[Your Full Name]<br/>[LinkedIn Profile / Phone Number]</p>`
  }, 
  {
    title: 'Graduate Role – LinkedIn Message',
    emailBody: `<p>Hi [Name],</p>
      <p>Hope you’re doing well. I came across I’m a recent graduate from [University Name], specialising in [Field]. I’m exploring graduate roles and came across [Company Name].</p>
      <p>Would love any advice or insight into the team.</p>
      <p>Thanks so much!</p>
      <p>– [Your Name]</p>`
  }, 
  {
    title: 'Industry Switch – LinkedIn Message',
    emailBody: `<p>Hi [Name],</p>
      <p>Hope you’re doing well. I came acroI’m transitioning from [Old Industry] into [New Industry] and came across your profile.</p>
      <p>I’d love to connect and hear your advice on making this move.</p>
      <p>Thanks,<br/>[Your Name]</p>`
  }
];


export const ONLINE_JOB_SEARCH_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    description: 'Search through job portals like Indeed, Seek, and LinkedIn Jobs.',
    // icon: 'fa-solid fa-search',
    icon: 'fa-solid fa-1',
  },
  {
    id: 2,
    description: 'Read each job description carefully',
    // icon: 'fa-brands fa-linkedin-in',
    icon: 'fa-solid fa-2',
  },
  {
    id: 3,
    description: 'Tailor your docs to match the keywords',
    // icon: 'fa-solid fa-message',
    icon: 'fa-solid fa-3',
  },
  {
    id: 4,
    description: 'Keep a record of each job you applied',
    // icon: 'fa-solid fa-phone',
    icon: 'fa-solid fa-4',
  }
];

export const UTILIZING_YOUR_CONNECTIONS_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    description: 'Make a list of connections - this can be Friends/Family in relevant industries, Alumni or university friends or LinkedIn or Instagram connections',
    // icon: 'fa-solid fa-search',
    icon: 'fa-solid fa-1',
  },
  {
    id: 2,
    description: 'Message them asking for insights or referrals',
    // icon: 'fa-brands fa-linkedin-in',
    icon: 'fa-solid fa-2',
  },
  {
    id: 3,
    description: 'Ensure that it is short, friendly, and professional',
    // icon: 'fa-solid fa-message',
    icon: 'fa-solid fa-3',
  },
  {
    id: 4,
    description: 'Follow up in seven days if no response',
    // icon: 'fa-solid fa-phone',
    icon: 'fa-solid fa-4',
  }
];

export const REACHING_OUT_TO_RECRUITERS_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    description: 'Search on LinkedIn by title: "Recruiter", "Talent Acquisition", or through Company websites(look at the Careers or Team page).',
    // icon: 'fa-solid fa-search',
    icon: 'fa-solid fa-1',
  },
  {
    id: 2,
    description: 'Connect with recruiters on LinkedIn',
    // icon: 'fa-brands fa-linkedin-in',
    icon: 'fa-solid fa-2',
  },
  {
    id: 3,
    description: 'Message them once connected',
    // icon: 'fa-solid fa-message',
    icon: 'fa-solid fa-3',
  },
  {
    id: 4,
    description: 'Save their emails if listed and follow up',
    // icon: 'fa-solid fa-phone',
    icon: 'fa-solid fa-4',
  },
  {
    id: 5,
    description: 'Always be polite and specific',
    // icon: 'fa-regular fa-handshake',
    icon: 'fa-solid fa-5',
  }
];
