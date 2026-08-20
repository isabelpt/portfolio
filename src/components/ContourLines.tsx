// Faint topographic-style contour lines, purely decorative.
// Evokes the geospatial/flood-risk mapping work without being literal about it.
export default function ContourLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--color-navy-deep)" strokeWidth="1">
        <path
          d="M-50,120 C 150,60 300,160 480,110 S 780,60 1050,130"
          opacity="0.07"
        />
        <path
          d="M-50,200 C 180,150 320,240 520,190 S 800,150 1050,220"
          opacity="0.09"
        />
        <path
          d="M-50,290 C 160,230 340,320 540,270 S 820,230 1050,300"
          opacity="0.11"
        />
        <path
          d="M-50,600 C 200,540 360,640 560,590 S 840,540 1050,610"
          opacity="0.07"
        />
        <path
          d="M-50,680 C 190,630 350,710 550,670 S 830,630 1050,690"
          opacity="0.09"
        />
        <path
          d="M-50,760 C 210,710 370,790 570,750 S 850,710 1050,770"
          opacity="0.06"
        />
      </g>
    </svg>
  )
}
