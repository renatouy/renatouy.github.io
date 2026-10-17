export type Image = { src: string; alt: string; width: number; height: number; srcSet?: string }
export type Faq = { question: string; answer: string }
export type SocialLink = { label: string; href: string; external?: boolean; icon: 'facebook' | 'linkedin' | 'email'; partner?: true }
export type ToolMark = { name: string; logo: string; wordmark?: boolean }
export type Credential = { title: string; detail: string; issuer?: string; image?: Image; href?: string }
export type Service = { id: string; title: string; summary: string; outcome: string; bullets: string[]; tools: ToolMark[]; project?: string }
export type ProjectStatus = 'Complete' | 'In progress' | 'Planned'
export type Deliverable = { id: string; label: string; description: string; src: string; type: 'image' | 'document' }
export type Project = {
  id: string; number: string; title: string; shortTitle: string; category: string;
  status: ProjectStatus; summary: string; challenge: string; actions: string[];
  outcome: string; tools: string[]; skills: string[]; cover: string;
  deliverables: Deliverable[]; plannedDeliverables?: string[]; note?: string;
}
