# V1 to V2 migration

## Accepted working version

Renato accepted the updated V2 as the portfolio’s working baseline on October 17, 2026. Further edits apply to this V2.

The version with sourced tool logos and the moving About strip is the accepted code baseline. The continuous Home document keeps one complete strip in About, after the background, working values, and credentials. The duplicate strip in the Home introduction has been removed to bring Projects into view sooner.

The first refinement replaces the LinkedIn and Facebook icon-library silhouettes with clean brand glyphs. The shared buttons use subtle borders and matching spacing in the sidebar and on Contact, with brand-color hover states.

All 20 tools from V1’s “Tools I work with” section appear in About. Every mark uses the same monochrome treatment and follows the theme’s text color in light and dark mode. The single continuously moving strip retains pause-on-hover, a Pause/Play control, and reduced-motion support. Service-specific lists use the same corrected marks and remain focused on each service.

The logo audit replaced the generic Canva palette and CapCut clapperboard, the Word mark under Office, and Anthropic’s mark under Claude. All tool artwork now comes from published brand assets or sourced Simple Icons files, with provenance recorded in TOOL-LOGO-SOURCES.md. Google Workspace uses its official wordmark. The previous custom Salesforce and Photoshop variants have been removed; the supplied brand geometry is preserved.

Project 01’s weekly briefing, vendor email, candidate email, and scheduling decision summary use the same readable document styling as Project 02. The original calendar remains a tool screenshot. The Experience page’s migration/confidentiality note has been removed; company names remain unchanged.

The sidebar’s live clock and the duplicate name beside the logo have been removed. The profile name remains below the portrait, and the portfolio still shows Renato’s location. The logo band and collapse control have been repositioned to close the space left by the clock.

## Positioning

V2 now introduces Renato as an Administrative and Executive Assistant. The first screen presents “Support you can rely on” in the original V2’s oversized centered thin/bold headline design, with its entrance and scroll exit. The original animated line background is restored. Direct actions lead to Projects and Contact within continuous Home.

The visitor can explore Showcase for a quick visual look, or follow Home → Projects → Case study → Deliverables → Contact for the full work sample. Services, About, and Experience provide supporting context.

## Restored Showcase

Showcase is restored as a Home section, standalone page, and navigation entry. Its seven rooms are Calendar management, Project management, Inbox zero, Travel management, Data entry, Graphic design, and Video editing. The room list and large sample frame adapt the original V2 rooms to Renato’s work. Room buttons switch the preview directly, without scroll interception.

Only the Calendar room currently has a sample: the original Project 01 tool screenshot, unchanged, with an enlarged view. The other six rooms remain clearly marked “Sample coming next.” Inbox, travel, and data rooms also link to the relevant existing case study or project plan. No completed project board, zero-inbox result, itinerary, graphic, or video is invented.

The product film, product statistics, external product link, Questions section, and FAQ structured data are not part of this restored page. Future rooms can display real screenshots, videos with native controls, or readable HTML documents. PDF and document screenshots follow the standing document-format rule; tool screenshots stay intact.

## Content carried over

| V1 material | V2 destination |
| --- | --- |
| Name, real email, Facebook, and LinkedIn links | Shared profile, sidebar, and Contact |
| Circular Home/sidebar portrait | Sidebar, with the same original image |
| Separate About portrait | About page, with consistently rounded corners |
| “Support you can rely on” headline | Homepage hero |
| “A task comes in → I make the plan → I handle the details → You stay focused” | Four-step homepage workflow |
| Five resume-backed work summaries | Experience page, with employers, roles, dates, responsibilities, and outcomes |
| Alison and Google course credentials | About page, without invented credential IDs or links |
| Inbox/calendar, lead research, CRM, operations, and content support | Services page |
| Original Project 01 assets | Five deliverables: one original tool screenshot and four formatted documents |
| All 20 “Tools I work with” entries | One strip in About, with theme-aware marks |
| Projects 02–05 roadmap | Projects page and individual project pages |
| “© 2026 All rights reserved.” | One-line footer |

## Project status

| Project | Status | Included work |
| --- | --- | --- |
| 01. Executive Calendar & Meeting Coordination | Complete | Original calendar screenshot, formatted weekly executive briefing and two email drafts, and structured scheduling decision summary |
| 02. Executive Inbox Management & Communication Support | Complete | Portfolio editions of the inbox tracker, three reply drafts, follow-up/action tracker, daily summary, and prioritization decision summary |
| 03. CRM Data Cleanup & Lead Tracking | In progress | Current progress and the five-deliverable plan; final sample files remain to be added |
| 04. Meeting Minutes & Action Tracking | Planned | Planned deliverable list and project page |
| 05. Business Travel & Itinerary Planning | Planned | Planned deliverable list and project page |

Project 05 uses the category “Administrative operations.” The planned business-travel exercise remains part of that broader support area.

Project 03 reflects the earlier update that Cleaned Contacts and Issue Log are finished. The next deliverables follow the current practice workbook: Follow-up Tracker, Executive Summary, and Cleaning Decision Summary. The migration does not mark the whole CRM project complete or invent final screenshots or metrics.

## Project 02 source handling

Project 02 was complete in the prior conversation, but its files were absent from the V1 ZIP. Its two trackers, all three email drafts, and two summary documents were recovered from the earlier files.

The portfolio editions use selectable text and responsive tables. Browser/editor controls are removed by presenting the content as HTML, and Renato/Alex identifiers are replaced with Executive Assistant/Executive role labels. The underlying priorities, deadlines, approval requirements, drafted status, and overdue items are preserved. The summaries are organized with headings for easier review. The work remains explicitly simulated, and drafts are not presented as sent email.

Project 01’s five original images remain untouched in the source folder. Only the calendar displays as an image; the weekly briefing, two email drafts, and scheduling decision summary display as selectable-text HTML documents. The reformatted documents preserve the original scheduling details and remain labeled as simulated work. The candidate’s proposed Thursday interview is separate from the Wednesday hiring interview. The calendar time zone remains as supplied.

## Template sections adapted or removed

Developer apps, software products, funnels, booking-page demos, experiments, placeholder video testimonials, community/partner badges, and an unfilled resource link were removed. The site contains no invented client endorsements, customer logos, or project performance claims.

The V2 sidebar, collapse behavior, mobile navigation, search palette, typography, blue palette, and light/dark themes are retained. The original V2 WebGL background is restored with its actual 34 flowing curves and traveling pulses. The animated canvas follows theme colors and sidebar alignment, renders a still frame for reduced motion, and stops its loop while the tab is hidden.

The centered thin/bold hero restores the original entrance and parting/sinking scroll effect while retaining the approved portfolio headline. Its scroll exit uses native scroll events rather than a separate scrolling engine.

Home once again contains the full section sequence, with Projects, Showcase, Services, About, Experience, and Contact beneath its introduction. The menu and mobile title track the visible section automatically. Menu links jump within Home, including from standalone pages. Native wheel and touch scrolling continue normally; scrolling does not change routes or add history entries. Direct standalone routes and project details remain available. Nested sections use one Home H1, subordinate headings, unique IDs, and Home metadata.

The Showcase room concept is retained and adapted for sample work, while the original software-product imagery and copy stay removed.

A flat RU monogram, favicon, and sharing image are included. These are a simple portfolio mark based on the earlier branding direction; a separate finished logo file was not present in either uploaded archive.

## Future updates

Edit project content in src/content/projects.ts, starting at line 4. Add actual deliverable files before changing a project to Complete. Keep fictional practice work labeled as simulated, and retain the actual work-history summaries on Experience.

Edit Showcase rooms and media in src/content/showcase.ts, starting at line 24. Keep a room’s sample absent until the actual file is ready. Adding a Showcase sample does not automatically mark a related project complete.

Renato’s standing deliverable-format preference: convert PDFs and screenshots of documents into readable, selectable-text portfolio documents, preserving their factual content, times, deadlines, and status. Keep screenshots of tools, including calendars and CRMs, as screenshots. Apply this rule to future projects as well as updates to existing ones.

Use actual tool brand marks and retain their source URLs. Do not substitute generic icons or recreate logos from memory, even when a supplied template asset has a matching filename. Check the drawing against published brand artwork before reusing it.

A resume download and client testimonials were not added because those source files were not included. They can be added when the actual materials are available.

## Review record

Build and source-render checks passed. Portraits and Project 01 assets match V1 exactly. The source was reviewed for responsive layout rules, keyboard navigation, dark-mode tool marks, native sample dialogs, focus handling, and reduced motion. Actual browser rendering and interactive testing remain unverified because the required browser QA surface was unavailable.
