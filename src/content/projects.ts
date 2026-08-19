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
      { label: 'Live scrollytelling', url: 'https://isabelpt.github.io/MassClimate/' },
      { label: 'GitHub', url: 'https://github.com/isabelpt/MassClimate' },
    ],
  },
  {
    id: 'mass-climate-assessment',
    title: '2026 Massachusetts Climate Assessment',
    tagline: 'Applied Hydroclimatology Lab, Dartmouth College',
    techStack: ['R', 'Data Pipelines', 'Statistical Modeling'],
    description:
      'Second author on the statewide climate assessment. Built and maintained R data pipelines to ingest, clean, and validate large, noisy real-world datasets, and distilled findings into 20+ publication-ready figures and reports for technical and non-technical stakeholders. \n Report coming soon.',
    links: [
      // { label: 'Read the report', url: '' },
    ],
  },
  {
    id: 'exposome',
    title: 'Prevalence of PFOS in the Bay Area Exposome',
    tagline: 'Snyder Lab, Stanford University',
    techStack: ['R', 'Python'],
    description: 'Co-authored original study on the prevalence of PFOS in the Bay Area exposome. Collected longitudinal environmental sample data, processed the samplesthrough LC-MS and analyzed results to identify potential exposure pathways and health risks.',
    links: [
      { label: 'Read the paper', url: 'https://www.linkedin.com/in/isabelpradotucker/overlay/Position/2885137786/treasury/?profileId=ACoAAC-N4LIBOH47eb1p-XCWlN7_xZA6cOPUeR8' },
    ],
  },
  {
    id: 'biomarker-discovery',
    title: 'Ulcerative Colitis Metabolic Profiling',
    tagline: 'Snyder Lab, Stanford University',
    techStack: ['R (metaboAnalyst)', 'Statistical Modeling (PCA, sPLS-DS, logistic regression)'],
    description:
      'Investigated metabolic pathways associated with ulcerative colitis using raw LC-MS data and machine learning techniques.',
    links: [
      { label: 'Read the paper', url: 'https://github.com/isabelpt/UC-Metabolomic-Profiling/blob/main/Prado-Tucker_Isabel_Poster.pdf' },
    ],
  },
]
