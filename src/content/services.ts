import type { Service } from './schema'
import { tools } from './tools'

export const services: Service[] = [
  {
    id: 'executive-support',
    title: 'Inbox & calendar management',
    summary: 'A clear schedule, a manageable inbox, and fewer loose ends.',
    outcome: 'Keep the week organized',
    bullets: [
      'Inbox triage and reply drafts',
      'Scheduling and meeting coordination',
      'Daily priorities, briefings, and follow-ups',
    ],
    tools: [tools.workspace, tools.office, tools.slack],
    project: 'project-01',
  },
  {
    id: 'research',
    title: 'Lead generation & research',
    summary: 'Useful research and organized leads ready for the next step.',
    outcome: 'Make the next step easier',
    bullets: [
      'Prospect research and qualification',
      'Competitor and market research',
      'Clear lead lists with consistent fields',
    ],
    tools: [
      tools.workspace,
      tools.office,
      tools.salesforce,
      tools.hubspot,
    ],
    project: 'project-03',
  },
  {
    id: 'crm',
    title: 'CRM & data management',
    summary: 'Accurate records that are easier to find, use, and maintain.',
    outcome: 'Keep your data dependable',
    bullets: [
      'CRM data cleanup and import preparation',
      'Duplicate checks and consistent formatting',
      'Data entry, records, and recurring reporting',
    ],
    tools: [
      tools.salesforce,
      tools.hubspot,
      tools.office,
      tools.workspace,
    ],
    project: 'project-03',
  },
  {
    id: 'operations',
    title: 'Operations & documentation',
    summary: 'Shared files, clear instructions, and handoffs people can follow.',
    outcome: 'Give work a clear next step',
    bullets: [
      'File organization and written procedures',
      'Meeting notes and action tracking',
      'Quality checks and progress updates',
    ],
    tools: [
      tools.workspace,
      tools.office,
      tools.notion,
      tools.asana,
      tools.trello,
      tools.clickup,
      tools.slack,
    ],
    project: 'project-05',
  },
  {
    id: 'content',
    title: 'Graphic design & video editing',
    summary: 'Graphics, photo edits, and short videos for your posts and presentations.',
    outcome: 'Get your content ready to share',
    bullets: [
      'Social media graphics, presentations, and simple layouts',
      'Photo edits, resizing, and image cleanup',
      'Short video edits, captions, and basic transitions',
    ],
    tools: [
      tools.canva,
      tools.photoshop,
      tools.adobe,
      tools.capcut,
    ],
  },
]