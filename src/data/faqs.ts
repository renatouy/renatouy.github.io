export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: "I'm a virtual and executive assistant. I handle inbox and calendar management, lead generation, CRM and Salesforce data cleanup, research, SOP documentation and social media scheduling for founders and small teams.",
  },
  {
    q: 'How fast can you start?',
    a: "Once we agree on scope, I can get started quickly. My schedule is flexible, including night shifts to line up with US business hours.",
  },
  {
    q: 'How much do you charge?',
    a: "I work hourly, either part-time or full-time at 8 hours a day. Tell me what you need and I'll put together a rate that fits the scope.",
  },
  {
    q: 'Where are you based?',
    a: "I'm in Cagayan de Oro City, Philippines (GMT+8). I adjust my hours to overlap with your business day, including US time zones.",
  },
  {
    q: 'What happens after I write?',
    a: "I'll reply by email or Slack, ask a few questions about your workflow and tools, and we'll agree on scope. I'm happy to work in whatever setup you already use.",
  },
]
