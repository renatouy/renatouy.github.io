# Project 05 update for the approved V2 portfolio

## Put this folder in your repository

Extract the ZIP, then copy its `project-05` folder into:

`C:\Users\renat\Documents\GitHub\renatouy.github.io\public\projects\`

The cover should now be at `public/projects/project-05/cover.svg`.
Copy the folder itself, not another folder named after the ZIP.
For Project 05, keep the whole `sample-files` folder so the register links work.

## Apply the code changes

Edit `src/content/projects.ts`. Replace only the object containing `id: 'project-05'`.
Include the opening `{` and closing `},`. Keep the surrounding array and other projects.

If applying both updates, do Project 05 first, then Project 04. This keeps the line references below unchanged while you work.

| Your starting file | Project 05 object |
| --- | --- |
| Approved current V2 ZIP, before the Project 03 update | Lines 64–92 |
| After applying the Project 03 replacement from this chat | Lines 80–108 |
| Project 03 and Project 04 already applied | Lines 94–122 |

If other edits have shifted the line numbers, search for the project ID above.

Paste this replacement:

```ts
  {
    id: 'project-05', number: '05', shortTitle: 'Administrative Operations',
    title: 'Administrative Operations & Process Documentation', category: 'Administrative operations', status: 'Complete',
    summary: 'Eight sample files organized into clear folders, with a records register, six recurring admin tasks, and a short guide for the next person.',
    challenge: 'A small team needed a clear place for requests, finance records, supplies, and reports, along with a way to find the current file and keep routine tasks from being missed.',
    actions: [
      'Organized eight sample files into five folders with clear names.',
      'Linked each file in a register with its owner, status, and notes.',
      'Kept the previous stock-check version in the archive.',
      'Added six recurring tasks with owners and next due dates.',
      'Wrote a short work guide and a handoff showing the open requests.',
    ],
    outcome: 'Five portfolio documents and eight linked sample files ready to review. Pending approvals, a draft report, and the next checks remain clearly listed.',
    tools: ['Google Drive', 'Google Docs', 'Google Sheets'],
    skills: ['File organization', 'Records management', 'Process writing', 'Recurring task tracking'],
    cover: '/projects/project-05/cover.svg',
    deliverables: [
      { id: 'folders', label: 'Shared-folder & file naming guide', description: 'Where each file belongs and how to name current and archived versions.', src: '/projects/project-05/folder-guide.html', type: 'document' },
      { id: 'records', label: 'Administrative records register', description: 'Eight linked sample files with owners, status, access guidance, and notes.', src: '/projects/project-05/records-register.html', type: 'document' },
      { id: 'routines', label: 'Recurring admin task tracker', description: 'Six routine tasks with owners, regular times, and the next due date.', src: '/projects/project-05/recurring-tasks.html', type: 'document' },
      { id: 'guide', label: 'Routine admin work guide', description: 'Short steps for handling requests, filing records, and closing tasks.', src: '/projects/project-05/admin-work-guide.html', type: 'document' },
      { id: 'handoff', label: 'Administrative handoff summary', description: 'What I set up, what still needs a decision, and when to check again.', src: '/projects/project-05/handoff-summary.html', type: 'document' },
    ],
    note: 'Simulated admin support sample dated October 21, 2026. All linked files are fictional examples. The access groups are suggestions for the shared folder.',
  },
```

The existing project page will display the new documents automatically. The card and completed-project count come from the same data.
No component, router, main stylesheet, or site configuration changes are needed.
There is no existing Showcase link to change for these two projects in the supplied V2 ZIP.

## Preview and publish

Save all files. Start your preview with `npm.cmd run dev` if needed.
Use the localhost URL printed in the terminal, then open `/projects/project-05`.
Check all five deliverables. For Project 05, also open the sample files from the records register.
Commit the new project folder and `src/content/projects.ts`, then push using your existing GitHub Pages workflow.
Upload the extracted folder contents to the repository, not the ZIP file itself.

## What is included

- `folder-guide.html`: Shared-folder & file naming guide.
- `records-register.html`: Administrative records register.
- `recurring-tasks.html`: Recurring admin task tracker.
- `admin-work-guide.html`: Routine admin work guide.
- `handoff-summary.html`: Administrative handoff summary.
- `document.css`: the same base stylesheet used by the completed Project 02 documents.
- `cover.svg`: the existing V2 cover artwork, updated to Complete.
- `sample-files/Northstar-Admin/`: all eight fictional files linked in the register, including the archived stock check.

The sample documents use short, direct wording. They are fictional work samples. Open actions, draft emails, and pending decisions keep their recorded status.
