/**
 * Resume-backed summaries of past work. Keep metrics and organization names
 * faithful to the resume; never add fabricated clients, assets, or outcomes.
 * Illustrative steps in the UI are labels, not reproductions of private data.
 */
export type CaseCategory = 'admin' | 'crm' | 'quality'

export type CaseStudy = {
  id: string
  index: string
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

export const CASE_FILTERS: { key: CaseCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All work' },
  { key: 'admin', label: 'Admin & operations' },
  { key: 'crm', label: 'CRM & research' },
  { key: 'quality', label: 'Quality & documentation' },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'leadership-support',
    index: '01',
    category: 'admin',
    categoryLabel: 'Administrative support',
    organization: 'Non-profit membership organization',
    role: 'Clerk · Part-time',
    title: 'Leadership Scheduling & Reliable Reporting',
    summary: 'Coordinating communications, schedules, records, and recurring reports in a confidential environment.',
    challenge: 'Leadership schedules, member records, and time-sensitive reporting all needed accurate, consistent follow-through.',
    actions: [
      'Managed inbox correspondence and calendar scheduling on behalf of organizational leadership.',
      'Maintained administrative records and prepared recurring financial and membership reports.',
      'Processed and reconciled weekly financial records while safeguarding sensitive information.',
    ],
    outcome: 'Maintained 100% on-time submission of financial and membership reports for 9+ consecutive quarters.',
    skills: ['Calendar management', 'Inbox coordination', 'Records', 'Reporting', 'Discretion'],
    flow: ['Coordinate', 'Document', 'Report'],
    metric: { value: '9+', label: 'consecutive quarters of on-time reporting' },
  },
  {
    id: 'salesforce-readiness',
    index: '02',
    category: 'crm',
    categoryLabel: 'CRM & data support',
    organization: 'Quanta',
    role: 'Administrative & Data Support Assistant',
    title: 'Salesforce Data Cleanup & Import Preparation',
    summary: 'Turning outreach and contract information into accurate, consistently structured CRM-ready records.',
    challenge: 'Accounts, contacts, and outreach details needed standardized formats before they could be uploaded into Salesforce.',
    actions: [
      'Consolidated contract and outreach data into Salesforce-ready import templates.',
      'Cleaned and organized 200+ account, opportunity, and contact records.',
      'Researched 76 qualified leads and standardized names, dates, and fee details.',
    ],
    outcome: 'Submitted import-ready data with no revisions required after submission.',
    skills: ['Salesforce', 'Data cleaning', 'Spreadsheets', 'Lead research', 'Accuracy'],
    flow: ['Collect', 'Standardize', 'Prepare'],
    metric: { value: '200+', label: 'CRM records prepared' },
  },
  {
    id: 'research-tracking',
    index: '03',
    category: 'crm',
    categoryLabel: 'Research & coordination',
    organization: 'Kimavi',
    role: 'General Virtual Assistant',
    title: 'Lead Research & Workflow Tracking',
    summary: 'Building organized lead lists and keeping research, files, and deliverables easier to track.',
    challenge: 'Research outputs and team deliverables needed to stay organized and ready for follow-up.',
    actions: [
      'Researched and qualified 150+ prospective leads, tracking them in spreadsheets and CRM tools.',
      'Organized shared files in Google Drive and coordinated administrative deliverables.',
      'Tested products and reviewed competitors, identifying 17 actionable insights.',
    ],
    outcome: 'Contributed organized prospect records and research findings to support outreach and product decisions.',
    skills: ['Lead generation', 'Google Sheets', 'Google Drive', 'Competitor research', 'Coordination'],
    flow: ['Research', 'Qualify', 'Track'],
    metric: { value: '150+', label: 'qualified leads researched' },
  },
  {
    id: 'quality-workflows',
    index: '04',
    category: 'quality',
    categoryLabel: 'Quality assurance',
    organization: 'Remotasks',
    role: 'Quality Assurance Specialist · Project-based',
    title: 'Data QA & Process Consistency',
    summary: 'Reviewing high-volume data against guidelines, correcting errors, and improving handoff consistency.',
    challenge: 'Detailed project guidelines required consistent application across large volumes of annotated data.',
    actions: [
      'Reviewed and corrected annotated records to meet task guidelines.',
      'Maintained 95%+ accuracy across high-volume project-based tasks.',
      'Worked with project managers to improve workflows and documentation.',
    ],
    outcome: 'Reduced labeling errors by 20% while maintaining reliable quality and deadline performance.',
    skills: ['Quality assurance', 'Documentation', 'Attention to detail', 'Workflow improvement'],
    flow: ['Review', 'Correct', 'Verify'],
    metric: { value: '95%+', label: 'task accuracy' },
  },
  {
    id: 'multilingual-operations',
    index: '05',
    category: 'quality',
    categoryLabel: 'Operations & documentation',
    organization: 'Melt Labs',
    role: 'Operations Assistant',
    title: 'Multilingual Content QA & File Organization',
    summary: 'Supporting multilingual course releases with content checks, research, and structured documentation.',
    challenge: 'Course modules and project files needed consistent formatting and organized handoffs across languages.',
    actions: [
      'Researched expansion opportunities, supporting localization work involving five languages.',
      'Reviewed AI-translated course modules for content accuracy and formatting consistency.',
      'Maintained organized project documentation in shared Google Drive folders.',
    ],
    outcome: 'Supported multilingual releases with cleaner content and easier-to-find project documentation.',
    skills: ['Content QA', 'Research', 'Google Drive', 'File organization', 'Localization support'],
    flow: ['Research', 'Review', 'Organize'],
    metric: { value: '5', label: 'languages supported' },
  },
]
