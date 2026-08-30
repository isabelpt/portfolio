export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectThumbnail {
  /** Path under /public. */
  src: string
  /** Describe what the graphic shows, not that it is a screenshot. */
  alt: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  status?: string
  featured?: boolean
  award?: boolean
  techStack: string[]
  description: string
  thumbnail?: ProjectThumbnail
  links: ProjectLink[]
}

export interface ExperienceItem {
  org: string
  role: string
  location: string
  dates: string
  bullets: string[]
  /** Outputs from this role — papers, posters, reports. */
  links?: ProjectLink[]
}

export interface SubstackPost {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
}
