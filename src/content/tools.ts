import type { ToolMark } from './schema'

/** V1 tool list using sourced brand artwork. See TOOL-LOGO-SOURCES.md. */
export const tools = {
  workspace: { name: 'Google Workspace', logo: '/icons/verified/google-workspace.png', wordmark: true },
  office: { name: 'Microsoft Office 365', logo: '/icons/verified/microsoft-office.svg' },
  notion: { name: 'Notion', logo: '/icons/verified/notion.svg' },
  slack: { name: 'Slack', logo: '/icons/verified/slack.svg' },
  asana: { name: 'Asana', logo: '/icons/verified/asana.svg' },
  trello: { name: 'Trello', logo: '/icons/verified/trello.svg' },
  clickup: { name: 'ClickUp', logo: '/icons/verified/clickup.svg' },
  salesforce: { name: 'Salesforce', logo: '/icons/verified/salesforce.svg' },
  hubspot: { name: 'HubSpot', logo: '/icons/verified/hubspot.svg' },
  claude: { name: 'Claude', logo: '/icons/verified/claude.png' },
  chatgpt: { name: 'ChatGPT', logo: '/icons/verified/chatgpt.svg' },
  zapier: { name: 'Zapier', logo: '/icons/verified/zapier.svg' },
  make: { name: 'Make', logo: '/icons/verified/make.svg' },
  canva: { name: 'Canva', logo: '/icons/verified/canva.svg' },
  photoshop: { name: 'Photoshop', logo: '/icons/verified/photoshop.svg' },
  adobe: { name: 'Adobe Creative Suite', logo: '/icons/verified/adobe.svg' },
  capcut: { name: 'CapCut', logo: '/icons/verified/capcut.svg' },
  hootsuite: { name: 'Hootsuite', logo: '/icons/verified/hootsuite.svg' },
  mailchimp: { name: 'Mailchimp', logo: '/icons/verified/mailchimp.svg' },
  wordpress: { name: 'WordPress', logo: '/icons/verified/wordpress.svg' },
  wix: { name: 'Wix', logo: '/icons/verified/wix.svg' },
} satisfies Record<string, ToolMark>

export const allTools: ToolMark[] = Object.values(tools)
