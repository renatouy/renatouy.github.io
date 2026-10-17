import { socials } from '@/content/site'
import { SocialIcon } from './SocialIcon'
import './social-links.css'

/** The row of social keys (sidebar header, Contact). One look everywhere; `className` places the row. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`social-keys ${className ?? ''}`} aria-label="Find me on">
      {socials.map((social) => (
        <li key={social.icon}>
          <a className="social-key" data-icon={social.icon} href={social.href} target={social.external ? '_blank' : undefined} rel={social.external ? 'noreferrer' : undefined} aria-label={`${social.label}${social.external ? ' (opens in a new tab)' : ''}`} title={social.label}>
            <SocialIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
