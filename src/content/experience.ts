import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    org: 'TSG Consumer Partners',
    role: 'Incoming Winter Consumer Insights Intern',
    location: 'New York, NY',
    dates: '01/27 – 03/27',
    bullets: [
      "Will support TSG's in-house insights team on consumer research for deal diligence and portfolio company strategy, including brand health tracking, survey and alternative data analysis, and AI-enabled reporting tools.",
    ],
  },
  {
    org: 'Applied Hydroclimatology Lab, Dartmouth College',
    role: 'Research Assistant, Neukom Scholar',
    location: 'Hanover, NH',
    dates: '01/25 – Present',
    bullets: [
      'Second author for the 2026 Massachusetts Climate Assessment (Precipitation & Storms chapter); analyzed data from multiple sources and distilled findings into 20+ publication-ready figures and written reports, presenting results and policy-relevant recommendations to regulatory and technical stakeholders.',
      'Build and maintain data pipelines in R to ingest, clean, and validate large, stochastic climate datasets, applying statistical analysis to identify significant trends across noisy real-world data; increased processing efficiency 50% by leveraging AI tools to streamline data pipelines.',
    ],
  },
  {
    org: 'Snyder Lab, Stanford University School of Medicine',
    role: 'Student Researcher, Doris Duke Scholar',
    location: 'Stanford, CA',
    dates: '06/23 – 06/24',
    bullets: [
      'Managed and cleaned high-dimensional health datasets in Python and R, applying machine learning and statistical methods (PCA, ANOVA, and sPLS-DA) to extract insights about Ulcerative Colitis biomarkers across 116 chemical features.',
      'Co-authored an original regional environmental toxin study, structuring raw sample data inputs into a clean schema and communicating technical findings.',
    ],
    links: [
      {
        label: 'PFOS in the Bay Area exposome (paper)',
        url: 'https://www.linkedin.com/in/isabelpradotucker/overlay/Position/2885137786/treasury/?profileId=ACoAAC-N4LIBOH47eb1p-XCWlN7_xZA6cOPUeR8',
      },
      {
        label: 'Ulcerative colitis metabolic profiling (poster)',
        url: 'https://github.com/isabelpt/UC-Metabolomic-Profiling/blob/main/Prado-Tucker_Isabel_Poster.pdf',
      },
    ],
  },
  {
    org: 'Kode with Klossy',
    role: 'Instructor Assistant, Data Science & Mobile App Development',
    location: 'New York, NY',
    dates: '03/23 – 07/25',
    bullets: [
      'Taught foundational Python, SQL, and Swift concepts through technical workshops, remediation sessions, and engaging activities to strengthen students’ data manipulation and problem-solving skills.',
      'Developed clear communication strategies to translate technical concepts for non-technical audiences.',
    ],
  },
]
