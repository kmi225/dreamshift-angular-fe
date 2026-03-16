import { EmailTemplateModel } from "../models/email-template.model";

export const ONLINE_JOB_SEARCH: EmailTemplateModel[] = [
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
    title: 'Follow-Up immediately after applying',
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
  }
];

export const UTILIZING_YOUR_CONNECTIONS: EmailTemplateModel[] = ONLINE_JOB_SEARCH;
export const REACHING_OUT_TO_RECRUITERS: EmailTemplateModel[] = ONLINE_JOB_SEARCH;
