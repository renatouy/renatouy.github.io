import type { Credential, SocialLink } from './schema'

/** Identity, links and portraits migrated from V1. */
export const site = {
  name: 'Renato J. Uy Jr.',
  brand: 'Renato Uy',
  logo: { light: '/brand/ru.png', dark: '/brand/ru.png', headerLight: '/brand/ru.png', headerDark: '/brand/ru.png' },
  url: 'https://renatouy.github.io',
  role: 'Administrative & Executive Assistant',
  email: 'renatojuyjr@gmail.com',
  emailSubject: 'Administrative & executive support inquiry',
  replyPromise: 'Tell me where you need support.',
  location: 'Cagayan de Oro, Philippines',
  countryCode: 'PH',
  avatar: { src: '/avatar.png', alt: 'Renato J. Uy Jr.', width: 883, height: 1178 },
  avatarSmall: '/avatar.png',
  aboutPortrait: { src: '/about-photo.png', alt: 'Renato wearing a formal suit', width: 1122, height: 1402 },
} as const

export const certification: Credential = { title: 'Executive Assistant Masterclass', detail: 'Alison · 2026', issuer: 'Alison' }
export const credentials: Credential[] = [certification, { title: 'Fundamentals of Digital Marketing', detail: 'Google · 2026', issuer: 'Google' }]

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/renato-uy', external: true, icon: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/ren7930', external: true, icon: 'facebook' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'email' },
]

export const mailtoHref = () => `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
