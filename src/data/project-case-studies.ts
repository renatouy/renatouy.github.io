export type CaseCategory = 'executive' | 'crm' | 'operations'

export type ProjectStatus = 'complete' | 'coming-soon'

export type CaseStudy = {
  id: string
  index: string
  status: ProjectStatus
  category: CaseCategory
  categoryLabel: string
  organization: string
  role: string
  title: string
  summary: string
  challenge: string
  actions: string[]
  outcome: string
  skills: string[]
  flow: [string, string, string]
  metric: { value: string; label: string }
}

export const CASE_FILTERS: {
  key: CaseCategory | 'all'
  label: string
}[] = [
  { key: 'all', label: 'All projects' },
  { key: 'executive', label: 'Executive support' },
  { key: 'crm', label: 'CRM & data' },
  { key: 'operations', label: 'Admin & operations' },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'executive-calendar',
    index: '01',
    status: 'complete',
    category: 'executive',
    categoryLabel: 'Executive support',
    organization: 'Simulated portfolio project',
    role: 'Executive Assistant',
    title: 'Executive Calendar & Meeting Coordination',
    summary:
      'A complete executive support exercise covering calendar planning, scheduling conflicts, briefing preparation, and stakeholder communication.',
    challenge:
      'A busy executive week included an urgent client renewal meeting, operational reviews, interviews, a vendor demonstration, protected focus time, and a Friday reporting deadline.',
    actions: [
      'Reviewed meeting requests and existing commitments before building the weekly schedule.',
      'Prioritized the urgent client renewal meeting within the available Wednesday time window.',
      'Moved the vendor demonstration and candidate interview to avoid scheduling conflicts.',
      'Protected lunch periods, executive focus time, and leadership report preparation time.',
      'Prepared an executive briefing, scheduling decision summary, and professional scheduling emails.',
    ],
    outcome:
      'Created a structured five-day executive schedule with clear priorities, protected focus time, coordinated meeting changes, and supporting communication documents.',
    skills: [
      'Calendar management',
      'Scheduling',
      'Prioritization',
      'Executive communication',
      'Conflict resolution',
      'Briefing preparation',
      'Attention to detail',
    ],
    flow: ['Prioritize', 'Coordinate', 'Follow through'],
    metric: {
      value: '5',
      label: 'portfolio deliverables created',
    },
  },

{
  id: 'inbox-management',
  index: '02',
  status: 'complete',
  category: 'executive',
  categoryLabel: 'Executive communication',
  organization: 'Northstar Consulting · Simulated',
  role: 'Executive Assistant',
  title: 'Executive Inbox Management & Communication Support',
  summary:
    'A simulated executive support exercise covering inbox triage, message prioritization, response drafting, follow-up tracking, and daily reporting.',
  challenge:
    'A busy inbox contained 10 messages with different levels of urgency, deadlines, approval requirements, scheduling requests, financial follow-ups, and routine administrative tasks. The goal was to surface what needed immediate executive attention without losing track of lower-priority work.',
  actions: [
    'Reviewed and prioritized 10 emails based on urgency, deadline, and required action.',
    'Separated items requiring executive approval from tasks I could handle or prepare independently.',
    'Drafted professional replies for a contract renewal, client meeting request, and invoice follow-up.',
    'Built a follow-up and action tracker with owners, deadlines, follow-up dates, statuses, and notes.',
    'Prepared a daily executive inbox summary and prioritization decision summary for clear handoff and review.',
  ],
  outcome:
    'Produced a clear view of what required immediate attention, what was awaiting executive approval, and what could be followed up later, with three response drafts and all remaining actions documented for follow-through.',
  skills: [
    'Inbox management',
    'Email triage',
    'Executive communication',
    'Prioritization',
    'Follow-up tracking',
    'Google Sheets',
    'Gmail',
    'Executive reporting',
  ],
  flow: ['Triage', 'Draft', 'Track'],
  metric: {
    value: '10',
    label: 'emails triaged and prioritized',
  },
},

  {
    id: 'crm-data',
    index: '03',
    status: 'coming-soon',
    category: 'crm',
    categoryLabel: 'CRM & data support',
    organization: 'Portfolio project',
    role: 'In development',
    title: 'CRM Data Cleanup & Salesforce Preparation',
    summary:
      'A planned project showing how raw records can be cleaned, standardized, checked, and prepared for CRM import.',
    challenge:
      'The project will demonstrate accurate data organization and preparation using a realistic administrative CRM workflow.',
    actions: [
      'Clean and standardize sample contact and account records.',
      'Identify missing, duplicate, or inconsistent data.',
      'Prepare an organized Salesforce-ready import file.',
    ],
    outcome:
      'The completed case study will include before-and-after data examples, validation checks, and an import-ready spreadsheet.',
    skills: [
      'Salesforce',
      'CRM management',
      'Data cleaning',
      'Spreadsheets',
      'Accuracy',
    ],
    flow: ['Clean', 'Validate', 'Prepare'],
    metric: {
      value: 'Soon',
      label: 'case study in development',
    },
  },

  {
    id: 'meeting-pack',
    index: '04',
    status: 'coming-soon',
    category: 'executive',
    categoryLabel: 'Executive support',
    organization: 'Portfolio project',
    role: 'In development',
    title: 'Executive Meeting Pack & Action Tracker',
    summary:
      'A planned case study covering meeting preparation, briefing materials, notes, decisions, action owners, and follow-ups.',
    challenge:
      'This project will demonstrate how I would support an executive before, during, and after an important meeting.',
    actions: [
      'Prepare a meeting agenda and concise briefing document.',
      'Create structured meeting minutes and decision notes.',
      'Track action items, owners, deadlines, and follow-ups.',
    ],
    outcome:
      'The final project will show a complete meeting support workflow from preparation through post-meeting follow-up.',
    skills: [
      'Meeting coordination',
      'Agenda preparation',
      'Meeting minutes',
      'Action tracking',
      'Follow-up',
    ],
    flow: ['Prepare', 'Document', 'Track'],
    metric: {
      value: 'Soon',
      label: 'case study in development',
    },
  },

  {
    id: 'admin-operations',
    index: '05',
    status: 'coming-soon',
    category: 'operations',
    categoryLabel: 'Administrative operations',
    organization: 'Portfolio project',
    role: 'In development',
    title: 'Administrative Operations & Documentation',
    summary:
      'A planned project focused on organized files, recurring task tracking, SOP documentation, and administrative workflow support.',
    challenge:
      'The project will demonstrate how I turn recurring administrative work into an organized and easy-to-follow system.',
    actions: [
      'Create a structured shared-drive file organization system.',
      'Build a recurring administrative task tracker.',
      'Document a repeatable process as a clear SOP.',
    ],
    outcome:
      'The completed case study will include a file structure, task tracker, and professional SOP sample.',
    skills: [
      'Documentation',
      'File organization',
      'SOP writing',
      'Task tracking',
      'Administrative support',
    ],
    flow: ['Organize', 'Document', 'Maintain'],
    metric: {
      value: 'Soon',
      label: 'case study in development',
    },
  },
]