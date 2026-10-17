import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes, parsePath } from 'react-router'

const root = fileURLToPath(new URL('../', import.meta.url))
const server = await createServer({ root, configFile: false, logLevel: 'error', resolve: { alias: { '@': resolve(root, 'src') } }, server: { middlewareMode: true, hmr: false }, appType: 'custom' })
let assets = 0
const asset = (src) => { assert(src.startsWith('/'), `Expected a public path: ${src}`); assert(existsSync(resolve(root, `public${src}`)), `Missing asset: ${src}`); assets++ }
try {
  const { projects } = await server.ssrLoadModule('/src/content/projects.ts')
  const { site, socials } = await server.ssrLoadModule('/src/content/site.ts')
  const { pages, navTarget } = await server.ssrLoadModule('/src/app/routes.ts')
  const { tools } = await server.ssrLoadModule('/src/content/tools.ts')
  const { showcaseRooms } = await server.ssrLoadModule('/src/content/showcase.ts')
  assert.equal(projects.length, 5)
  assert.equal(new Set(projects.map((project) => project.id)).size, 5)
  assert.equal(projects.filter((project) => project.status === 'Complete').length, 2)
  assert.equal(projects.filter((project) => project.status === 'In progress').length, 1)
  assert.equal(projects.filter((project) => project.status === 'Planned').length, 2)
  for (const project of projects) {
    asset(project.cover)
    if (project.status === 'Complete') assert.equal(project.deliverables.length, 5, `${project.id} needs its five deliverables`)
    else assert.equal(project.deliverables.length, 0, `${project.id} must not claim finished samples`)
    for (const item of project.deliverables) {
      asset(item.src)
      if (item.type === 'document') {
        const text = readFileSync(resolve(root, `public${item.src}`), 'utf8')
        assert.match(text, /Simulated Executive Assistant work sample/)
        assert(!/<script\b/i.test(text), 'Sample documents should not run scripts')
        assert(!/\bAlex\b|\bRenato\b/.test(text), `Personal identifiers remain in ${item.src}`)
      }
    }
  }
  for (const tool of Object.values(tools)) asset(tool.logo)
  assert.equal(showcaseRooms.length, 7)
  assert.equal(new Set(showcaseRooms.map((room) => room.id)).size, showcaseRooms.length)
  for (const room of showcaseRooms) {
    if (room.media) asset(room.media.src)
    if (room.media?.type === 'video' && room.media.poster) asset(room.media.poster)
    if (room.project) assert(projects.some((project) => project.id === room.project.id), `Unknown related project in ${room.id}`)
  }
  for (const src of [site.avatar.src, site.aboutPortrait.src, site.logo.light, site.logo.dark, '/favicon.svg', '/apple-touch-icon.png', '/og-image.png']) asset(src)
  assert.equal(site.email, 'renatojuyjr@gmail.com')
  assert.deepEqual(socials.map((social) => social.href), ['https://www.linkedin.com/in/renato-uy', 'https://www.facebook.com/ren7930', 'mailto:renatojuyjr@gmail.com'])

  const home = await server.ssrLoadModule('/src/features/portfolio/HomePage.tsx')
  const work = await server.ssrLoadModule('/src/features/portfolio/ProjectsPage.tsx')
  const other = await server.ssrLoadModule('/src/features/portfolio/Pages.tsx')
  const contact = await server.ssrLoadModule('/src/features/contact/ContactPage.tsx')
  const showcase = await server.ssrLoadModule('/src/features/showcase/ShowcasePage.tsx')
  const components = { home: home.HomePage, projects: work.ProjectsPage, showcase: showcase.ShowcasePage, about: other.AboutPage, services: other.ServicesPage, experience: other.ExperiencePage, contact: contact.ContactPage }
  const render = (element, path = '/') => renderToString(React.createElement(MemoryRouter, { initialEntries: [path] }, element))
  const homePage = pages.find((page) => page.id === 'home')
  const homeHtml = render(React.createElement(home.HomePage, { page: homePage }))
  const ids = [...homeHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  assert.equal(ids.length, new Set(ids).size, 'Continuous Home must not duplicate section, form, or room IDs')
  assert.equal((homeHtml.match(/<title>/g) ?? []).length, 1, 'Nested sections must not replace Home metadata')
  assert(homeHtml.includes(homePage.title.replaceAll('&', '&amp;')))
  assert.deepEqual(pages.map((page) => page.section), ['top', 'projects', 'showcase', 'services', 'about', 'experience', 'contact'])
  let previousSection = -1
  for (const page of pages) {
    const target = parsePath(navTarget(page))
    assert.equal(target.pathname, '/', `Navigation to ${page.label} must stay on continuous Home`)
    assert.equal(target.hash, `#${page.section}`)
    const position = homeHtml.indexOf(`id="${page.section}"`)
    assert(position > previousSection, `Home section is missing or out of order: ${page.section}`)
    previousSection = position
    if (page.id !== 'home') assert(homeHtml.includes(`<h2 id="${page.section}-title"`), `${page.label} needs a section heading`)
  }
  for (const match of homeHtml.matchAll(/\baria-(?:labelledby|controls)="([^"]+)"/g)) {
    for (const id of match[1].split(' ')) assert(ids.includes(id), `Home control references missing element: ${id}`)
  }
  assert(homeHtml.includes('hero__layer--thin') && homeHtml.includes('hero__layer--bold'))
  assert(homeHtml.includes('Support you can') && homeHtml.includes('rely on.'))
  const background = await server.ssrLoadModule('/src/components/background/SignalFlowBackground.tsx')
  assert.match(render(React.createElement(background.SignalFlowBackground, { layout: 'sidebar-expanded' })), /<canvas[^>]*aria-hidden="true"/)
  for (const page of pages) {
    const html = render(React.createElement(components[page.id], { page }), page.path)
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `One primary heading on ${page.path}`)
    assert(!/PLACEHOLDER|Your Name|Your Brand|Your headline|you@example\.com/.test(html), `Unfilled template content on ${page.path}`)
    assert(!/href="(?:#|)"/.test(html), `Dead link on ${page.path}`)
    assert(html.includes('Renato'), `Identity missing on ${page.path}`)
    if (page.id === 'showcase') {
      assert.equal((html.match(/aria-controls="showcase-room-/g) ?? []).length, showcaseRooms.length)
      assert.equal((html.match(/aria-pressed="true"/g) ?? []).length, 1)
      assert(!/Questions|FAQPage|yourproduct\.com|Product Name/.test(html))
      assert.match(html, /Enlarge Weekly executive calendar/)
      assert.equal((html.match(/id="showcase-room-[^"]+"[^>]* hidden=""/g) ?? []).length, showcaseRooms.length - 1)
    }
  }
  for (const project of projects) {
    const path = `/projects/${project.id}`
    const html = render(React.createElement(Routes, null, React.createElement(Route, { path: '/projects/:projectId', element: React.createElement(work.ProjectPage) })), path)
    assert(html.includes(project.title.replaceAll('&', '&amp;')), `Project route did not render ${project.id}`)
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1)
    assert(html.includes(project.status))
  }
  const mail = await server.ssrLoadModule('/src/lib/mail.ts')
  assert(!mail.isCompleteMessage({ firstName: ' ', lastName: 'Reader', email: 'bad', message: ' ' }))
  const message = { firstName: 'A & B', lastName: 'Reader', email: 'reader@example.com', message: 'Support inquiry &subject=changed\nA second line' }
  assert(mail.isCompleteMessage(message))
  const url = new URL(mail.contactMailto(message))
  assert.equal(url.pathname, site.email)
  assert.equal(url.searchParams.get('subject'), site.emailSubject)
  assert.equal(url.searchParams.get('body'), mail.contactText(message))
  assert.equal(url.searchParams.getAll('subject').length, 1)
  const follow = readFileSync(resolve(root, 'public/projects/project-02/follow-up-actions.html'), 'utf8')
  assert.equal((follow.match(/class="tag drafted"/g) ?? []).length, 3, 'Three replies remain drafted')
  const daily = readFileSync(resolve(root, 'public/projects/project-02/daily-summary.html'), 'utf8')
  assert.match(daily, /deadlines have passed/)
  assert.match(daily, /none have been sent/)
  const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((item) => item.isDirectory() ? walk(resolve(dir, item.name)) : [resolve(dir, item.name)])
  for (const file of walk(resolve(root, 'src/content'))) {
    assert(!/PLACEHOLDER|Your Name|Your Brand|\u2014/.test(readFileSync(file, 'utf8')), `Unfinished or unsuitable copy: ${file}`)
  }
  console.log(`Passed: ${pages.length} page renders, continuous Home section/navigation integrity, 5 project route renders, ${assets} asset references, Showcase room integrity, project statuses, sample integrity, and contact validation.`)
  console.log('This check does not replace visual browser or interaction testing.')
} finally { await server.close() }
