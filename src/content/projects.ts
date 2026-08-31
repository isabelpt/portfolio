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
      'Pinpointed 1992 as the changepoint when Northeast extreme rainfall started climbing.',
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
    techStack: ['Python', 'Regression', 'Spatial Models'],
    thumbnail: {
      src: '/thumbnails/gotham-etihad.webp',
      alt: 'Unit chart of Etihad Park seating, each dot one block of fans, filled to show projected attendance against the stadium’s 25,000 capacity.',
    },
    description:
      "Built transit isochrones to project Gotham FC's move filling 60–91% of Etihad Park.",
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
      'Topic-modeled 8,328 headlines to show NWSL media coverage has nearly tripled since 2018.',
    links: [
      //{ label: 'Write-up', url: '' },
      {label: 'Website', url: 'https://nwsl-growth.vercel.app/'},
      { label: 'GitHub', url: 'https://github.com/isabelpt/nwsl-growth-analysis'},
    ],
  },
  
]
