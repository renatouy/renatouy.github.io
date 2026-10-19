export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  avatar?: string
}

export const testimonials: {
  preview: boolean
  autoplay: boolean
  items: Testimonial[]
} = {
  preview: false,
  autoplay: true,
  items: [
    {
      id: 'testimonial-01',
      quote: 'Add an approved quote about a task, how Renato handled it, and what changed as a result.',
      name: 'Name pending',
      role: 'Role or working relationship',
    },
    {
      id: 'testimonial-02',
      quote: 'A second approved quote can describe communication, reliability, or support with a recurring responsibility.',
      name: 'Name pending',
      role: 'Role or working relationship',
    },
    {
      id: 'testimonial-03',
      quote: 'Use this space for a specific example of working together. A clear detail will say more than a general compliment.',
      name: 'Name pending',
      role: 'Role or working relationship',
    },
  ],
}