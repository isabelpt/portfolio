import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    org: 'Applied Hydroclimatology Lab, Dartmouth College',
    role: 'Research Assistant',
    location: 'Hanover, NH',
    dates: '01/25 – Present',
    bullets: [
      'Build and maintain data pipelines in R to ingest, clean, and validate large, sophisticated datasets, applying statistical analysis and predictive modeling to identify significant trends across noisy real-world data.',
      'Second author for the 2026 Massachusetts Climate Assessment; collaborated with stakeholders across functions and distilled findings into 20+ publication-ready figures and reports.',
    ],
  },
  {
    org: 'Snyder Lab, Stanford University School of Medicine',
    role: 'Student Researcher, Doris Duke Scholar',
    location: 'Stanford, CA',
    dates: '06/23 – 06/24',
    bullets: [
      'Managed and cleaned high-dimensional environmental datasets in Python and R, applying machine learning and statistical methods (PCA, ANOVA, sPLS-DA) to extract insights across 116 chemical compound features.',
      'Co-authored an original regional environmental toxin study, structuring raw sample data into a clean schema and communicating technical findings.',
    ],
  },
  {
    org: 'Kode with Klossy',
    role: 'Instructor Assistant, Data Science & Mobile App Development',
    location: 'New York, NY',
    dates: '03/23 – 07/25',
    bullets: [
      'Taught foundational Python, SQL, and Swift concepts through technical workshops, remediation sessions, and hands-on activities.',
      'Developed clear communication strategies to translate technical concepts for non-technical audiences.',
    ],
  },
]
