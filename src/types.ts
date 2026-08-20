export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  status?: string
  featured?: boolean
  techStack: string[]
  description: string
  links: ProjectLink[]
}

export interface ExperienceItem {
  org: string
  role: string
  location: string
  dates: string
  bullets: string[]
}

export interface SubstackPost {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
}
