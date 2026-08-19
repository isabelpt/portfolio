import type { Project } from '../types'

// Edit this file to add, remove, or update project cards.
// Leave `links` empty array items out entirely if a link doesn't exist yet.
export const projects: Project[] = [
  {
    id: 'nwsl-mls-demand',
    title: 'Consumer Demand Analytics Platform',
    tagline: 'NWSL & MLS Market Study',
    // status: 'In progress',
    techStack: ['Python', 'NLP', 'Regression'],
    description:
      'Working with large, diverse datasets (transit, demographic, media, and venue data) to build predictive models of fan attendance and consumer demand for a professional sports league. Applies statistical and spatial modeling to translate raw data into decision-ready insights on market and venue strategy.',
    links: [
      // { label: 'Write-up', url: '' },
      // { label: 'GitHub', url: '' },
    ],
  },
  {
    id: 'heavy-rain-high-water',
    title: 'Heavy Rain & High Water',
    tagline: '2026 CAUSE Data Scrollytelling Contest Winner',
    techStack: ['R', 'JavaScript (D3.js)', 'HTML/CSS'],
    description:
      'Synthesized and cleaned multi-source data to identify inflection points in flood risk, building interactive JavaScript visualizations that communicate complex findings to non-technical audiences.',
    links: [
      // { label: 'Live scrollytelling', url: '' },
      // { label: 'GitHub', url: '' },
    ],
  },
  {
    id: 'mass-climate-assessment',
    title: '2026 Massachusetts Climate Assessment',
    tagline: 'Applied Hydroclimatology Lab, Dartmouth College',
    techStack: ['R', 'Data Pipelines', 'Statistical Modeling'],
    description:
      'Second author on the statewide climate assessment. Built and maintained R data pipelines to ingest, clean, and validate large, noisy real-world datasets, and distilled findings into 20+ publication-ready figures and reports for technical and non-technical stakeholders.',
    links: [
      // { label: 'Read the report', url: '' },
    ],
  },
]
