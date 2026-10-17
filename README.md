# Renato Uy Portfolio V2

A migration of Renato’s Administrative and Executive Assistant portfolio from V1 into the V2 template. Renato accepted this updated V2 as the working baseline on October 17, 2026. Future changes should build on this version. The site is ready for local review and for the existing `renatouy/renatouy.github.io` repository.

## Open the portfolio first

1. Extract this ZIP into its own folder.
2. Open **V2-Preview.html** in Chrome or Edge. This is a self-contained copy of the portfolio with its images, fonts, and sample documents embedded. No installation is needed for this review.
3. Scroll Home to move through Projects, Showcase, Services, About, Experience, and Contact. The menu highlights the section in view. Project 01 and Project 02 each include five deliverables. Showcase has seven rooms for visual work samples.

For editing and normal full-size sample links, use the development server below. The preview is a generated review copy; edit the source files rather than the preview HTML.

## Run and edit in VS Code

Use Node.js 24, the version used for this build.

Open the extracted `renato-portfolio-v2` folder in VS Code. The folder you open should contain `package.json` directly. In its terminal, run:

```bash
npm ci
npm run dev
```

Open the local address printed in the terminal, normally `http://localhost:5190`. If the port is in use, Vite prints the next available port. Saving a source edit updates the local view.

Useful commands:

```bash
npm run check
npm run typecheck
npm run build
npm run preview
npm run preview:offline
```

`check` verifies route rendering, continuous Home section order and navigation targets, unique IDs and heading structure, asset references, project statuses, sample content, and contact-message validation. `build` creates the production site in `dist/`. `preview` serves that production build locally. `preview:offline` rebuilds the site and refreshes V2-Preview.html.

## What is included

- `src/`: editable portfolio pages, content, and styles.
- `public/`: original portraits, Project 01 source images, formatted documents for Projects 01 and 02, tool marks, fonts, favicon, and sharing image.
- `dist/`: the production build.
- `V2-Preview.html`: the offline review copy.
- `MIGRATION.md`: what moved, what changed, and what remains in the project roadmap.
- The GitHub Pages deployment workflow and original license notices.

## Where to make changes

These line numbers refer to this delivered version. They can move after you edit a file.

| Change | File and starting line |
| --- | --- |
| Name, email, social links, location, portraits, credentials | `src/content/site.ts:4` |
| Homepage headline, four-step workflow, experience highlights | `src/content/home.ts:1` |
| All five projects, statuses, case studies, deliverables | `src/content/projects.ts:4` |
| Showcase headline and introduction | `src/content/showcase.ts:16` |
| Showcase room names, descriptions, and sample files | `src/content/showcase.ts:24` |
| Showcase layout, room controls, and enlarged samples | `src/features/showcase/ShowcasePage.tsx:24` |
| Showcase layout and responsive styles | `src/features/showcase/showcase.css:1` |
| Five real work-history summaries and outcomes | `src/content/experience.ts:32` |
| Services and the tools used for each one | `src/content/services.ts:4` |
| Full V1 tool list and logo files | `src/content/tools.ts:4` |
| Theme-aware tool marks and catalog layout | `src/features/portfolio/Shared.tsx:6` |
| Single moving tool strip in About | `src/features/portfolio/ToolsMarquee.tsx:8` |
| Tool-strip speed, spacing, and reduced motion | `src/features/portfolio/tools-marquee.css:1` |
| Contact page and form wording | `src/content/contact.ts:1` |
| Contact FAQs | `src/content/faqs.ts:2` |
| Navigation names and page descriptions | `src/app/routes.ts:12` |
| Home section order | `src/features/portfolio/HomePage.tsx:14` |
| Main continuous page composition | `src/features/portfolio/HomePage.tsx:23` |
| Original V2 headline layout and actions | `src/features/home/hero/HeroSection.tsx:10` |
| Headline sizing, entrance, and responsive styles | `src/features/home/hero/hero.css:1` |
| Headline scroll exit | `src/features/home/hero/use-hero-scroll.ts:4` |
| Animated background timing and theme handling | `src/components/background/SignalFlowBackground.tsx:9` |
| Original flowing-line geometry and pulse shader | `src/components/background/signal-flow.ts:1` |
| Direct section-link landing | `src/hooks/use-hash-landing.ts:6` |
| Project filters and deliverable viewer | `src/features/portfolio/ProjectsPage.tsx:16` |
| Content layout, spacing, and responsive styles | `src/features/portfolio/portfolio.css:2` |
| Light and dark theme colors | `src/styles/tokens.css:7` |
| One-line copyright | `src/components/page/SiteFooter.tsx:2` |
| LinkedIn, Facebook, and email glyphs | `src/components/brand/SocialIcon.tsx:5` |
| Shared social-button appearance | `src/components/brand/social-links.css:2` |
| Sidebar logo, portrait, name, and navigation | `src/components/sidebar/SidebarPanel.tsx:26` |

The formatted sample documents are editable HTML files in `public/projects/project-01/` and `public/projects/project-02/`. Project 01 keeps the original calendar screenshot as deliverable 1. Deliverable 2 is a formatted weekly executive briefing, deliverables 3 and 4 are email drafts, and deliverable 5 is a structured scheduling decision summary. These use Project 02’s document styling. All five original Project 01 PNG files remain in the source folder.

For all future deliverables, turn PDFs and screenshots of documents into readable, selectable-text portfolio documents. Preserve the source content and its actual deadlines, times, and status. Keep screenshots of tools such as calendars and CRMs as screenshots.

About contains the single “Tools I work with” strip, positioned after the background, working values, and credentials. It includes all 20 tools from V1, with pause-on-hover, a Pause/Play button, and a static wrapped list for reduced-motion preferences. Screen readers receive one complete list without the duplicate visual loop. The duplicate strip in the Home introduction has been removed, bringing visitors to Projects sooner.

The tool marks use sourced brand artwork with a consistent, theme-aware monochrome treatment. Google Workspace uses its published wordmark. The incorrect palette, clapperboard, Word, and Anthropic marks have been replaced with the Canva, CapCut, Office, and Claude marks. The source table is in **TOOL-LOGO-SOURCES.md**, and the Simple Icons license is included. Preserve actual brand geometry when editing; do not draw substitutes. Services uses the same corrected marks with shorter lists relevant to each service.

Project 05 uses the category “Administrative operations.” Its planned business-travel exercise remains one example of that broader support area.

The sidebar displays the logo by itself, followed by the portrait and one profile name. The live clock and the Experience page’s migration note have been removed. Location remains visible in the portfolio.

## Original V2 motion and continuous Home

The original V2 flowing-line canvas is restored behind the portfolio, using the original curve geometry and pulse shader. Its colors follow the current theme, and its center follows the expanded or collapsed sidebar. Rendering begins after the first interaction or shortly after page load. Reduced-motion preferences use a still frame; hidden tabs stop the animation loop.

The original oversized, centered thin/bold headline and rising entrance are restored with the approved words “Support you can” and “rely on.” Scrolling parts and lowers the headline while its description and actions leave first. The original template's placeholder wording is not used.

Home is a continuous document: introduction → Projects → Showcase → Services → About, including the tools strip → Experience → Contact. The sidebar and mobile title follow the section in view. Menu clicks move to sections on Home, and clicks from project details or standalone pages return to the matching Home section. Ordinary wheel and touch scrolling stay native. Scrolling does not create history entries or change routes. Project details and all standalone page URLs remain available.

For example, `/#/#showcase` opens the Showcase section within Home, while `/#/showcase` opens its standalone page. Back and forward retain the router's saved scroll positions. Section headings step down inside Home, and nested pages do not replace Home's metadata.

## Add or replace Showcase samples

Showcase is a visual gallery in continuous Home at `/#/#showcase` and as a standalone page at `/#/showcase`; Projects holds the detailed case studies. The seven rooms cover calendar management, project management, inbox zero, travel management, data entry, graphic design, and video editing. The Calendar room currently uses the original Project 01 screenshot. Other rooms are marked “Sample coming next” until actual files are supplied. The template’s product film, product stats, and Questions section are omitted.

Place a new file in `public/showcase/`, creating that folder when adding the first file. Edit the matching room’s `media` entry in `src/content/showcase.ts`, starting at line 24. Replacing the existing Calendar `media.src` changes only its Showcase preview; Project 01 keeps its original deliverable.

For a tool screenshot, use this shape with the actual file path and pixel dimensions:

```ts
media: {
  type: 'image',
  src: '/showcase/project-board.png',
  title: 'Project management board',
  alt: 'Describe what is visible in the actual screenshot.',
  width: 1600,
  height: 900,
},
```

For a video, use `type: 'video'` with `src`, `title`, `mime: 'video/mp4'` or `mime: 'video/webm'`, and an optional `poster` image path. Videos use native controls and do not autoplay. For a document, first make its readable HTML portfolio edition and use `type: 'document'` with `src` and `title`. Tool screenshots remain unchanged. Do not attach a generic screenshot or claim inbox zero before the actual sample demonstrates it.

Adding a real `media` entry makes the room display its sample and changes its label to “Sample ready.” Descriptions and skills are editable in the same room entry. The optional `project` entry links the room to an existing case study or project plan. Run `npm run check` and `npm run preview:offline` after editing so both the production copy and offline review file include the new sample.

## Move V2 into the existing GitHub repository

First review V2 in its separate folder and keep your V1 folder as a backup.

1. Open your local checkout of `renatouy.github.io`. Preserve its Git history and repository connection.
2. Replace the old `src/` and `public/` directories with V2’s versions. Copy V2’s root project files, including `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, the license notices, and the included GitHub Pages workflow. Copy the contents of the V2 project folder into the repository root, rather than nesting the entire folder one level deeper.
3. The included workflow is `.github/workflows/deploy.yml`, starting at line 1. If the repository already has a different Pages deployment workflow, use one workflow for V2 so separate workflows do not publish different builds.
4. In the GitHub repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
5. Commit and push the V2 source to `main`. The workflow installs dependencies, runs the checks, builds V2, and uploads only `dist/` for publication.
6. Follow the run in **Actions**. After the Pages deployment succeeds, visit `https://renatouy.github.io/`.

`node_modules/`, `dist/`, and the generated offline preview are excluded from Git commits. The source and workflow rebuild the published site. The ZIP still includes `dist/` for a ready-made production copy.

GitHub’s current setup instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Links and GitHub Pages

Page URLs use hashes, for example `https://renatouy.github.io/#/projects/project-01`. This lets project links refresh directly on GitHub Pages without a server rewrite. The configuration targets the root site `renatouy.github.io`, rather than a subfolder repository URL.

The sitemap lists the root page. Individual hash routes are navigation targets rather than separate search-indexable pages. Page titles, descriptions, structured data, and the sharing image are filled in for Renato’s portfolio.

## Contact behavior

The form prepares a message in the visitor’s email app. The visitor reviews and sends it there. The site does not claim that a message has been delivered. The email address and a copy-message fallback remain visible.

## Verification

The production build, TypeScript check, lint for changed source files, seven page renders, continuous Home section/navigation checks, five project route renders, 43 asset references, Showcase room integrity, sample status checks, and contact-message validation passed. Both portraits and all five original Project 01 images were compared with V1 and are byte-for-byte unchanged. The complete tool list was checked against V1, and the four formatted Project 01 documents share Project 02’s base document styling.

Browser automation was unavailable in this environment. A visual check of the actual desktop/mobile layout, WebGL animation, and scroll behavior is still needed before treating the site as fully browser-tested. The source includes responsive rules for narrow phones, tablets, desktop, both themes, and reduced-motion preferences.

This package prepares V2 for review and publication. It does not itself update the live GitHub repository.
