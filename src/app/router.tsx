import { createHashRouter, Navigate, type RouteObject } from 'react-router'
import { ContactPage } from '@/features/contact/ContactPage'
import { HomePage } from '@/features/portfolio/HomePage'
import { ShowcasePage } from '@/features/showcase/ShowcasePage'
import { ProjectsPage, ProjectPage } from '@/features/portfolio/ProjectsPage'
import { AboutPage, ExperiencePage, ServicesPage, NotFoundPage } from '@/features/portfolio/Pages'
import { AppShell } from './AppShell'
import { pages } from './routes'

const components = { home: HomePage, projects: ProjectsPage, showcase: ShowcasePage, services: ServicesPage, about: AboutPage, experience: ExperiencePage, contact: ContactPage }

/** Hash routes refresh directly on GitHub Pages without a server rewrite. */
export function createRoutes(): RouteObject[] {
  return [{ element: <AppShell />, children: [
    ...pages.map((page) => { const Page = components[page.id as keyof typeof components]; return { path: page.path, element: <Page page={page} /> } }),
    { path: '/projects/:projectId', element: <ProjectPage /> },
    { path: '/work', element: <Navigate to="/projects" replace /> },
    { path: '/work/:projectId', element: <Navigate to="/projects" replace /> },
    { path: '/proof', element: <Navigate to="/experience" replace /> },
    { path: '*', element: <NotFoundPage /> },
  ] }]
}
export const router = createHashRouter(createRoutes())
