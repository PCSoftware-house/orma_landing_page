import { Link } from 'react-router'

export function LogoMark({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="2.25"
        y="2.25"
        width="19.5"
        height="19.5"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="text-ink"
      />
      <path
        d="M8 15.5V8.5h5.2"
        fill="none"
        stroke="#5e6ad2"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.2" cy="15.2" r="1.35" fill="#3ee0a2" />
    </svg>
  )
}

export default function Logo({ className = '', wordmark = 'Orma' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className="text-[14px] font-medium tracking-tight text-ink">{wordmark}</span>
    </Link>
  )
}
