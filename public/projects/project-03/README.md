# Project 03 update for the approved V2 portfolio

## Put the folder in your repository

Extract the ZIP, then copy its `project-03` folder into:

`C:\Users\renat\Documents\GitHub\renatouy.github.io\public\projects\`

You should now have `public/projects/project-03/cleaned-contacts.html`.
Copy the folder itself, not another folder named after the ZIP.

## Update the existing Project 03 entry

Open `src/content/projects.ts`. In the approved current V2 ZIP, Project 03 occupies lines 41–52.
Replace that whole object, from its opening `{` through its closing `},`, with:

```ts
  {
    id: 'project-03', number: '03', shortTitle: 'Cleaner records. Clearer follow-ups.',
    title: 'CRM Data Cleanup & Lead Tracking', category: 'CRM & data accuracy', status: 'Complete',
    summary: 'Reviewed 36 contact rows, consolidated four duplicates, and organized 32 contacts, with 20 imported into HubSpot and four follow-up tasks created.',
    challenge: 'A 36-row contact export included duplicates, inconsistent fields, missing details, and unclear follow-up information. The list needed a clear record of what could be corrected and what still needed checking before use in a CRM.',
    actions: [
      'Preserved the raw export and kept the source record IDs for traceability.',
      'Consolidated four confirmed duplicate pairs and documented 16 data-quality issues.',
      'Standardized supported fields and kept 12 contacts flagged for review.',
      'Imported the 20 ready contacts into HubSpot and mapped the practice fields.',
      'Created four contact-linked tasks with due dates, priorities, and task notes.',
      'Prepared the cleaned contact list, issue log, follow-up tracker, and two handoff summaries.',
    ],
    outcome: '36 source rows reviewed, 32 contacts retained, 20 imported into HubSpot, and four follow-up tasks created. Twelve contacts remain flagged for review. The four tasks were Not Started at capture.',
    tools: ['Microsoft Excel', 'HubSpot'],
    skills: ['Data cleanup', 'Duplicate review', 'CRM import preparation', 'Issue logging', 'Follow-up tracking'],
    cover: '/projects/project-03/screenshots/hubspot-contacts.png',
    deliverables: [
      { id: 'contacts', label: 'Cleaned Contacts', description: 'All 32 retained contacts, with source IDs, notes, and quality flags.', src: '/projects/project-03/cleaned-contacts.html', type: 'document' },
      { id: 'issues', label: 'Issue Log', description: 'Sixteen documented issues, the action taken, and the items still needing review.', src: '/projects/project-03/issue-log.html', type: 'document' },
      { id: 'followups', label: 'Follow-up & Action Tracker', description: 'Four follow-ups with owners, due dates, task notes, and their recorded status.', src: '/projects/project-03/follow-up-tracker.html', type: 'document' },
      { id: 'summary', label: 'Executive CRM Cleanup Summary', description: 'The cleanup results, HubSpot handoff, and records still needing verification.', src: '/projects/project-03/executive-summary.html', type: 'document' },
      { id: 'decisions', label: 'Cleaning Decision Summary', description: 'How duplicate records, uncertain details, and follow-up actions were handled.', src: '/projects/project-03/cleaning-decisions.html', type: 'document' },
      { id: 'import', label: 'HubSpot Contact Import', description: 'Original screenshots showing field mapping and the imported practice contacts.', src: '/projects/project-03/hubspot-import.html', type: 'document' },
      { id: 'tasks', label: 'HubSpot Follow-up Tasks', description: 'The original task overview and four contact-linked task screenshots.', src: '/projects/project-03/hubspot-tasks.html', type: 'document' },
    ],
    note: 'Simulated CRM support sample using fictional contacts. The HubSpot screenshots show the actual practice account. The four follow-up tasks were Not Started at capture.',
  },
```

Do not replace the surrounding `projects` array, Project 02, or Project 04.
The existing React project viewer handles the layout and deliverables automatically.
You do not need to edit the router, ProjectsPage.tsx, main stylesheet, or site configuration.

## Update the related Showcase link

In `src/content/showcase.ts`, line 61 of the approved ZIP, replace:

```ts
    project: { id: 'project-03', label: 'See the CRM project progress' },
```

with:

```ts
    project: { id: 'project-03', label: 'See the completed CRM project' },
```

## Preview and publish

Save all files. Start your existing preview with `npm.cmd run dev` if it is not already running.
Visit the localhost URL printed in the terminal, then open `/projects/project-03`.
Check all seven deliverables and confirm the status says Complete.
Commit the new `public/projects/project-03` folder and the two edited content files, then push through your existing GitHub Pages workflow.
Do not replace your repository with this ZIP and do not upload only the ZIP file to GitHub.

## Folder contents

- Five readable HTML deliverables for the sheets and summaries.
- Two HTML evidence galleries displaying seven original HubSpot screenshots.
- `document.css`, based on the exact stylesheet used by Project 02's completed deliverables.
- `downloads/crm-cleanup-workbook.xlsx`, the completed six-tab workbook, with the supplied raw export preserved.
- `downloads/import-ready-20.csv` and `downloads/needs-review-12.csv`.
- `source-evidence/`, containing the original spreadsheet captures for traceability. These are not used as the main document views.

The summaries use the October 19 cleanup cutoff and the October 21 HubSpot captures.
The account had two contacts before the 20-record import and shows 22 afterward.
The four HubSpot tasks remain Not Started in the evidence. Task creation is not outreach completion.

