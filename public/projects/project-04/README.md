# Project 04 update for the approved V2 portfolio

## Put this folder in your repository

Extract the ZIP, then copy its `project-04` folder into:

`C:\Users\renat\Documents\GitHub\renatouy.github.io\public\projects\`

The cover should now be at `public/projects/project-04/cover.svg`.
Copy the folder itself, not another folder named after the ZIP.
For Project 05, keep the whole `sample-files` folder so the register links work.

## Apply the code changes

Edit `src/content/projects.ts`. Replace only the object containing `id: 'project-04'`.
Include the opening `{` and closing `},`. Keep the surrounding array and other projects.

If applying both updates, do Project 05 first, then Project 04. This keeps the line references below unchanged while you work.

| Your starting file | Project 04 object |
| --- | --- |
| Approved current V2 ZIP, before the Project 03 update | Lines 53–63 |
| After applying the Project 03 replacement from this chat | Lines 69–79 |

If other edits have shifted the line numbers, search for the project ID above.

Paste this replacement:

```ts
  {
    id: 'project-04', number: '04', shortTitle: 'From a meeting to action.',
    title: 'Meeting Minutes & Action Tracking', category: 'Meeting documentation & follow-up', status: 'Complete',
    summary: 'An agenda, clear minutes, and six assigned actions for a client report, with a follow-up email ready for review.',
    challenge: 'The team needed to agree on the missing report figures, folder access, review time, and client deadline. Each next step needed an owner and a due date.',
    actions: [
      'Prepared a 30-minute agenda around the report and kickoff pack.',
      'Recorded three decisions and six actions with owners and due dates.',
      'Put the report figures, draft, approval, and client send in the right order.',
      'Added check-in times and a note for what to do if a deadline slips.',
      'Prepared a follow-up email and a short summary of the decisions.',
    ],
    outcome: 'Five documents ready to review, with six actions and three decisions recorded. The report still needs approval, and the follow-up email remains a draft.',
    tools: ['Google Docs', 'Google Sheets'],
    skills: ['Meeting preparation', 'Meeting minutes', 'Action tracking', 'Follow-up writing'],
    cover: '/projects/project-04/cover.svg',
    deliverables: [
      { id: 'agenda', label: 'Meeting agenda', description: 'A 30-minute plan with topics, timings, and the details to have ready.', src: '/projects/project-04/meeting-agenda.html', type: 'document' },
      { id: 'minutes', label: 'Meeting minutes', description: 'The discussion, three decisions, six actions, and items still open.', src: '/projects/project-04/meeting-minutes.html', type: 'document' },
      { id: 'actions', label: 'Meeting action tracker', description: 'Owners, deadlines, check-in times, and notes for all six actions.', src: '/projects/project-04/action-tracker.html', type: 'document' },
      { id: 'email', label: 'Meeting follow-up email', description: 'A short recap prepared for review, with clear owners and due dates.', src: '/projects/project-04/follow-up-email.html', type: 'document' },
      { id: 'summary', label: 'Meeting follow-up summary', description: 'What I recorded and how the report steps depend on each other.', src: '/projects/project-04/meeting-summary.html', type: 'document' },
    ],
    note: 'Simulated meeting support sample dated October 21, 2026. Names and details are fictional. The follow-up email is a draft, and the action tracker shows what is still open.',
  },
```

The existing project page will display the new documents automatically. The card and completed-project count come from the same data.
No component, router, main stylesheet, or site configuration changes are needed.
There is no existing Showcase link to change for these two projects in the supplied V2 ZIP.

## Preview and publish

Save all files. Start your preview with `npm.cmd run dev` if needed.
Use the localhost URL printed in the terminal, then open `/projects/project-04`.
Check all five deliverables. For Project 05, also open the sample files from the records register.
Commit the new project folder and `src/content/projects.ts`, then push using your existing GitHub Pages workflow.
Upload the extracted folder contents to the repository, not the ZIP file itself.

## What is included

- `meeting-agenda.html`: Meeting agenda.
- `meeting-minutes.html`: Meeting minutes.
- `action-tracker.html`: Meeting action tracker.
- `follow-up-email.html`: Meeting follow-up email.
- `meeting-summary.html`: Meeting follow-up summary.
- `document.css`: the same base stylesheet used by the completed Project 02 documents.
- `cover.svg`: the existing V2 cover artwork, updated to Complete.

The sample documents use short, direct wording. They are fictional work samples. Open actions, draft emails, and pending decisions keep their recorded status.
