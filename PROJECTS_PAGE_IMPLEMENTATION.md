# Projects Page — October 8, 2026

## Purpose

Show evidence for Administrative Assistant and Executive Assistant applications before displaying adjacent capabilities. Every case study is grounded in Renato's resume, not a fabricated client engagement or a sample created after the fact.

## Narrative order

1. **Leadership Scheduling & Reliable Reporting** — part-time clerk, non-profit membership organization. 100% on-time reports for 9+ consecutive quarters.
2. **Salesforce Data Cleanup & Import Preparation** — Quanta. 200+ records, 76 leads, no revisions after submission.
3. **Lead Research & Workflow Tracking** — Kimavi. 150+ leads, 17 research insights.
4. **Data QA & Process Consistency** — Remotasks. 95%+ accuracy, 20% fewer labeling errors.
5. **Multilingual Content QA & File Organization** — Melt Labs. Localization-related research and QA supporting five languages.

## Interaction and design

- Existing cream/navy/orange tokens and Poppins typography.
- Scrollable Projects route within the existing desktop rail and mobile tab-bar shell.
- One featured admin case and four supporting cases, plus filter chips for browsing.
- Cards open accessible dialogs with task descriptions, outcomes, skill tags, Escape to close, focus trapping, and close-focus restoration.
- No confidential reports, files, client screenshots, or simulated metrics are presented as actual business documents.
- Homepage Projects teasers now use resume-backed proof instead of unrelated funnel or placeholder imagery.
- Supports light and dark themes and reduced-motion preferences.

## Updating the page

- Edit **`src/data/project-case-studies.ts`** to change case study copy and outcomes. Do not publish confidential client details.
- Edit **`src/components/ProjectsGrid.tsx`** for card and dialog behavior.
- Edit **`src/styles/projects-case-studies.css`** for project-specific styling.
- The scroll behavior is controlled by **`src/App.tsx`** (`FIXED_ROUTES`).
- The stylesheet is imported in **`src/main.tsx`** after the generic mobile style sheets.

## Verification and known setup issue

- `npm run typecheck` passed.
- Targeted ESLint of the changed TypeScript/TSX files passed.
- The uploaded archive included Windows `node_modules` binaries. The Linux runtime here cannot complete Vite's Rollup production build without installing Linux optional dependencies. On your Windows machine, run `npm ci` from the project folder, then `npm run build`.
- The existing codebase had a missing `aboutPortraitSrc` field in the `Profile` type. That field was added to keep the About portrait compatible with the site's established baseline.
- Full-project ESLint also reports pre-existing warnings/errors outside the changed Projects files in `Autopilot.tsx`, `HeroCanvasV2.tsx`, and `src/lib/contact.ts`.
