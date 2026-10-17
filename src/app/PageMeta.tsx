import { absoluteUrl } from '@/lib/seo'
import type { PageRoute } from './routes'

type Meta = { title: string; description: string; path: string }

/** Unique <title>, description and canonical URL. React 19 hoists these into <head>. */
export function HeadMeta({ title, description }: Meta) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absoluteUrl('/')} />
    </>
  )
}

export function PageMeta({ page }: { page: PageRoute }) {
  return <HeadMeta title={page.title} description={page.description} path={page.path} />
}
