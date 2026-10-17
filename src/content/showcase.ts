export type ShowcaseMedia =
  | { type: 'image'; src: string; title: string; alt: string; width: number; height: number }
  | { type: 'video'; src: string; title: string; mime: 'video/mp4' | 'video/webm'; poster?: string }
  | { type: 'document'; src: string; title: string }

export type ShowcaseRoom = {
  id: string
  label: string
  title: string
  description: string
  focus: string[]
  media?: ShowcaseMedia
  project?: { id: string; label: string }
}

export const showcasePage = {
  eyebrow: 'Showcase / Sample work',
  titleThin: 'A closer look.',
  titleBold: 'At the work.',
  lede: 'Explore sample work across calendars, inboxes, project boards, travel, data, and creative support. Choose a room to look around.',
}

/** Use actual sample files. Tool screenshots stay intact; document captures become readable HTML. */
export const showcaseRooms: ShowcaseRoom[] = [
  {
    id: 'calendar', label: 'Calendar management',
    title: 'A week with room to focus.',
    description: 'An executive week with client meetings, interviews, a vendor demonstration, and protected focus time. Open the screenshot to inspect the schedule.',
    focus: ['Meeting coordination', 'Conflict resolution', 'Protected focus time'],
    media: {
      type: 'image', src: '/projects/project-01/calendar.png', title: 'Weekly executive calendar',
      alt: 'Simulated executive calendar for October 12–16, 2026, with meetings, interviews, lunch breaks, and focus time.',
      width: 1671, height: 941,
    },
    project: { id: 'project-01', label: 'Read the calendar case study' },
  },
  {
    id: 'project-management', label: 'Project management',
    title: 'Owners, deadlines, and the next step.',
    description: 'This room will show a project board with task ownership, due dates, progress, and follow-ups in one place.',
    focus: ['Task tracking', 'Clear ownership', 'Deadline coordination'],
  },
  {
    id: 'inbox', label: 'Inbox zero',
    title: 'A clear inbox. A clear next action.',
    description: 'This room will show an organized inbox with labels, priorities, and follow-ups, including a clear view of what still needs attention.',
    focus: ['Labels & categories', 'Inbox triage', 'Follow-up tracking'],
    project: { id: 'project-02', label: 'Read the inbox case study' },
  },
  {
    id: 'travel', label: 'Travel management',
    title: 'The details, before departure.',
    description: 'This room will show a travel plan with an itinerary, bookings, timing, and practical details for the trip.',
    focus: ['Itinerary planning', 'Travel coordination', 'Contingency planning'],
  },
  {
    id: 'data-entry', label: 'Data entry',
    title: 'Clean records. Useful information.',
    description: 'This room will show organized records, consistent fields, and a clear handoff in a spreadsheet or CRM.',
    focus: ['Data accuracy', 'Record organization', 'Quality checks'],
    project: { id: 'project-03', label: 'See the CRM project progress' },
  },
  {
    id: 'graphic-design', label: 'Graphic design',
    title: 'A message, made clear.',
    description: 'This room will show finished graphics and layouts, with attention to readability, spacing, and consistent presentation.',
    focus: ['Visual communication', 'Layout', 'Brand consistency'],
  },
  {
    id: 'video-editing', label: 'Video editing',
    title: 'A story that flows.',
    description: 'This room will show an edited video or an editing-workspace screenshot, with attention to pacing, captions, and a clean finish.',
    focus: ['Pacing', 'Captions', 'Editing workflow'],
  },
]
