/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Email and social links still need your real details.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Separate About-page portrait, kept independent from the round avatar. */
  aboutPortraitSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

const EMAIL = 'renatojuyjr@gmail.com'

export const profile: Profile = {
  name: 'Renato J. Uy Jr.',
  firstName: 'Renato',
  handle: 'Philippines',
  role: 'Virtual & Executive Assistant',
  avatarSrc: '/avatar.png',
  aboutPortraitSrc: '/about-photo.png',
  verifiedLabel: 'Executive Assistant Masterclass, Alison 2026',
  // TODO: set your real email address in EMAIL above before deploying.
  email: EMAIL,
  location: 'Cagayan de Oro, Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '5+ yrs', label: 'Admin support', Icon: Briefcase },
    { value: '150+', label: 'Leads qualified', Icon: SealCheck },
    { value: 'GMT+8', label: 'Flexible for US hours', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Calm inboxes, clear calendars.', line2: 'Work that keeps moving.' },
  hero: {
    body: 'Administrative and executive support that keeps priorities organized, schedules on track, and day-to-day operations moving.',
    portraitSrc: '/avatar.png',
    portraitAlt: 'Portrait of Renato J. Uy Jr.',
  },
socials: [
  {
    label: 'Facebook profile',
    href: 'https://www.facebook.com/ren7930',
    iconPath: '/icons/facebook.svg',
  },
  {
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/renato-uy',
    iconPath: '/icons/linkedin.svg',
  },
  {
    label: 'Email me',
    href: `mailto:${EMAIL}`,
    iconPath: '/icons/email.svg',
  },
],
}
