export default function RiseMark({
  size = 44,
  arch = 'var(--gold)',
  sun = 'var(--gold)',
}: {
  size?: number
  arch?: string
  sun?: string
}) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 100 78"
      fill="none"
      strokeLinecap="round"
      strokeWidth={4}
      aria-hidden="true"
    >
      <path d="M16 66 A34 34 0 0 1 84 66" stroke={arch} />
      <line x1="20" y1="66" x2="80" y2="66" stroke={arch} />
      <path d="M37 66 A13 13 0 0 1 63 66" stroke={sun} />
      <line x1="50" y1="49" x2="50" y2="41" stroke={sun} />
      <line x1="39" y1="52" x2="34.5" y2="46.5" stroke={sun} />
      <line x1="61" y1="52" x2="65.5" y2="46.5" stroke={sun} />
    </svg>
  )
}

export function Wordmark() {
  return (
    <span className="wm">
      Dance<span className="wm-gold">Soul</span>Therapy
    </span>
  )
}
