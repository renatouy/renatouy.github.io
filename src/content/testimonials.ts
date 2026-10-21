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
      quote: "Ren was my first VA, and he was great to work with. He asks the right questions, makes sure he understands the task, and gets things done right. I'd recommend him again and again.",
      name: 'Avinash J.',
      role: '',
    },
    {
      id: 'testimonial-02',
      quote: "Ren does great work and always delivers on time. His reports are clear, and he's really easy to work with.",
      name: 'Joseph C.',
      role: '',
    },
    {
      id: 'testimonial-03',
      quote: "I had the chance to work with Ren as his QM. He pays close attention to detail and has been a great help to the team.",
      name: 'Avelino M.',
      role: '',
    },
  ],
}