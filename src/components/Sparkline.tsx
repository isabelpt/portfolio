// Small decorative sparkline — a data-shaped flourish, not a real chart.
export default function Sparkline() {
  return (
    <svg
      width="34"
      height="14"
      viewBox="0 0 34 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <polyline
        points="0,10 5,6 9,8 14,3 18,7 23,2 27,5 34,1"
        stroke="var(--color-lilac)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
