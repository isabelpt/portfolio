// Faint topographic-style contour map, purely decorative.
// Evokes the geospatial/flood-risk mapping work without being literal about it.
// Built programmatically as elevation "hills" (nested wobbly rings) rather
// than hand-drawn, so it reads as an actual map rather than a generic squiggle.

type Point = [number, number]

function ring(cx: number, cy: number, r: number, wobble: number[]): Point[] {
  const n = wobble.length
  return wobble.map((mult, i) => {
    const angle = (i / n) * Math.PI * 2
    const rad = r * mult
    return [cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad]
  })
}

// Catmull-Rom to smooth closed bezier path.
function smoothClosedPath(points: Point[]): string {
  const n = points.length
  const parts: string[] = [`M${points[0][0]},${points[0][1]}`]
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n]
    const p1 = points[i]
    const p2 = points[(i + 1) % n]
    const p3 = points[(i + 2) % n]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    parts.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`)
  }
  parts.push('Z')
  return parts.join(' ')
}

interface Hill {
  cx: number
  cy: number
  baseR: number
  spacing: number
  rings: number
  wobble: number[]
  opacity: number
}

const hills: Hill[] = [
  {
    cx: 900,
    cy: 120,
    baseR: 70,
    spacing: 30,
    rings: 6,
    wobble: [1, 1.12, 0.88, 1.06, 0.8, 1.18, 0.92, 1.1, 0.86, 1.04],
    opacity: 0.09,
  },
  {
    cx: 130,
    cy: 700,
    baseR: 95,
    spacing: 28,
    rings: 6,
    wobble: [1, 0.9, 1.15, 0.85, 1.08, 0.95, 1.2, 0.88, 1.02, 0.92],
    opacity: 0.08,
  },
  {
    cx: 950,
    cy: 640,
    baseR: 60,
    spacing: 26,
    rings: 5,
    wobble: [1, 1.2, 0.9, 1.1, 0.82, 1.15, 0.94, 1.06],
    opacity: 0.08,
  },
  {
    cx: 40,
    cy: 30,
    baseR: 45,
    spacing: 22,
    rings: 4,
    wobble: [1, 0.85, 1.15, 0.9, 1.1, 0.95],
    opacity: 0.07,
  },
]

export default function ContourLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-navy-deep)">
        {hills.map((hill, hi) =>
          Array.from({ length: hill.rings }).map((_, ri) => {
            const r = hill.baseR + ri * hill.spacing
            const pts = ring(hill.cx, hill.cy, r, hill.wobble)
            const isIndexLine = ri % 3 === 0
            return (
              <path
                key={`hill-${hi}-${ri}`}
                d={smoothClosedPath(pts)}
                strokeWidth={isIndexLine ? 1.1 : 0.6}
                opacity={hill.opacity * (isIndexLine ? 1.15 : 0.85)}
              />
            )
          }),
        )}
      </g>
    </svg>
  )
}
