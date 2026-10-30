export default function GlassCard({ className = '', children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-surface/80 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-px hover:border-white/[0.16] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      {children}
    </div>
  )
}
