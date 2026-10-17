import type { Icon } from '@phosphor-icons/react'
import { Briefcase, Envelope, House, Stack, User, Suitcase, SquaresFour } from '@phosphor-icons/react'
import { projects } from '@/content/projects'
import { site } from '@/content/site'

export type NavGroupId = 'menu' | 'discover' | 'general'
export const NAV_GROUPS: { id: NavGroupId; label: string }[] = [{ id: 'menu', label: 'Explore' }, { id: 'discover', label: 'Background' }, { id: 'general', label: 'Connect' }]
export type PageRoute = { kind: 'page'; id: string; path: string; label: string; title: string; description: string; icon: Icon; group?: NavGroupId; badge?: number; section?: string }
export type ExternalRoute = { kind: 'external'; id: string; href: string; label: string; description: string; icon: Icon; group: NavGroupId }
export type NavEntry = PageRoute | ExternalRoute

export const pages: PageRoute[] = [
  { kind: 'page', id: 'home', section: 'top', path: '/', label: 'Home', title: `${site.name} | Administrative & Executive Assistant`, description: 'Administrative and executive support for organized schedules, clear priorities, accurate records, and dependable follow-through.', icon: House, group: 'menu' },
  { kind: 'page', id: 'projects', section: 'projects', path: '/projects', label: 'Projects', title: `Projects | ${site.name}`, description: 'Explore calendar coordination, inbox management, CRM cleanup, and planned admin work samples.', icon: Briefcase, group: 'menu', badge: projects.length },
  { kind: 'page', id: 'showcase', section: 'showcase', path: '/showcase', label: 'Showcase', title: `Showcase | ${site.name}`, description: 'Browse visual work samples for calendar management, project coordination, inboxes, travel, data entry, graphic design, and video editing.', icon: SquaresFour, group: 'menu' },
  { kind: 'page', id: 'services', section: 'services', path: '/services', label: 'Services', title: `Services | ${site.name}`, description: 'Inbox and calendar management, lead research, CRM data support, documentation, and content support.', icon: Stack, group: 'menu' },
  { kind: 'page', id: 'about', section: 'about', path: '/about', label: 'About', title: `About | ${site.name}`, description: 'Meet Renato, an administrative and executive assistant based in Cagayan de Oro, Philippines.', icon: User, group: 'discover' },
  { kind: 'page', id: 'experience', section: 'experience', path: '/experience', label: 'Experience', title: `Experience | ${site.name}`, description: 'Five roles across administrative support, Salesforce data, lead research, operations, and quality assurance.', icon: Suitcase, group: 'discover' },
  { kind: 'page', id: 'contact', section: 'contact', path: '/contact', label: 'Contact', title: `Contact | ${site.name}`, description: 'Talk about the role, responsibilities, schedule, and support you need.', icon: Envelope, group: 'general' },
]
export const externals: ExternalRoute[] = []
export const navEntries = (group: NavGroupId): NavEntry[] => pages.filter((page) => page.group === group)
export const navTarget = (page: PageRoute) => page.section ? `/#${page.section}` : page.path
export const notFoundTitle = `Page not found | ${site.name}`
