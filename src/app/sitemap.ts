import { routeUrl } from '@/lib/seo'
import { site } from '@/content/site'
import { projects } from '@/content/projects'
import { pages } from './routes'
export const sitemapPaths = () => ['/']
export function llmsTxt() {
  return [`# ${site.name}`, '', site.role, '', `Contact: ${site.email}`, '', ...pages.map((page) => `- [${page.label}](${routeUrl(page.path)}): ${page.description}`), '', '## Practice projects', '', ...projects.map((project) => `- [${project.title}](${routeUrl(`/projects/${project.id}`)}): ${project.status}. ${project.summary}`), ''].join('\n')
}
