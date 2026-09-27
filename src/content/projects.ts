import type { Project } from '../types'

// Edit this file to add, remove, or update project cards.
// Leave `links` empty array items out entirely if a link doesn't exist yet.
export const projects: Project[] = [
  {
    id: 'heavy-rain-high-water',
    title: 'Heavy Rain & High Water',
    tagline: '2026 CAUSE Data Scrollytelling Contest Winner',
    featured: true,
    award: true,
    techStack: ['R', 'JavaScript (D3.js)', 'HTML/CSS'],
    thumbnail: {
      src: '/thumbnails/heavy-rain.webp',
      alt: 'Line chart of spatially averaged extreme precipitation in the Northeast, 1901 to 2024, with the 30-year mean turning from grey to red after the 1992 changepoint.',
    },
    description:
      'Pinpointed 1992 as the year Northeast extreme rainfall started climbing, and turned the finding into an interactive story for non-technical readers.',
    links: [
      { label: 'Live scrollytelling', url: 'https://isabelpt.github.io/MassClimate/' },
      { label: 'GitHub', url: 'https://github.com/isabelpt/MassClimate' },
      {
        label: 'Dartmouth News',
        url: 'https://qss.dartmouth.edu/news/2026/08/isabel-prado-tucker-wins-cause-data-scrollytelling-contest',
      },
    ],
  },
  {
    id: 'nwsl-mls-demand',
    title: 'Transit Accessibility & Attendance in the NWSL',
    tagline: 'NWSL Market Study pt. 2',
    techStack: ['Python', 'CatBoost', 'SHAP', 'Spatial Models'],
    thumbnail: {
      src: '/thumbnails/gotham-etihad.webp',
      alt: 'Unit chart of Etihad Park seating, each dot one block of fans, filled to show projected attendance against the stadium’s 25,000 capacity.',
    },
    description:
      "Projected Gotham FC's move to Queens will draw 15,000–22,800 fans, up from ~10,900 if they stayed, by modeling how tripling transit reach changes demand.",
    links: [
      //{ label: 'Write-up', url: '' },
      {label: 'Website', url: 'https://gotham-at-etihad.vercel.app/'},
      { label: 'GitHub', url: 'https://github.com/isabelpt/nwsl-gotham-relocation' },
    ],
  },
  {
    id: 'nwsl-growth',
    title: 'Breaking Down NWSL Growth',
    tagline: 'NWSL Market Study pt. 1',
    techStack: ['Python', 'NLP', 'Regression'],
    thumbnail: {
      src: '/thumbnails/nwsl-growth.webp',
      alt: 'Stacked bar chart of NWSL headline topic mix from 2012 to 2024, showing coverage volume nearly tripling since 2018 across team/league, coaching, schedule, and how-to-watch topics.',
    },
    description:
      "Found rivalries lift NWSL attendance ~57%, while market size and winning barely matter, suggesting the league's growth is durable and shaped by front offices.",
    links: [
      //{ label: 'Write-up', url: '' },
      {label: 'Website', url: 'https://nwsl-growth.vercel.app/'},
      { label: 'GitHub', url: 'https://github.com/isabelpt/nwsl-growth-analysis'},
    ],
  },
  {
    id: 'nwsl-trmnl',
    title: 'NWSL Analytics for TRMNL',
    tagline: 'Published on the TRMNL marketplace',
    techStack: ['JavaScript (Cloudflare Workers)', 'Liquid', 'REST API'],
    thumbnail: {
      src: '/thumbnails/nwsl-trmnl.webp',
      alt: 'E-ink display showing the NWSL table with form and a playoff cutoff line after 8th, beside recent results, xG over- and under-performers, and Goals Added leaders.',
    },
    description:
      'Shipped a live NWSL standings and xG dashboard as a public plugin on the TRMNL marketplace, so fans get the league at a glance.',
    links: [
      { label: 'TRMNL plugin', url: 'https://trmnl.com/recipes/466603' },
      { label: 'GitHub', url: 'https://github.com/isabelpt/nwsl-analytics-trmnl' },
    ],
  },

]
