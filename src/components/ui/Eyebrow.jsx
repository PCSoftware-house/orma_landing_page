export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-[12px] font-medium text-muted">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px] shadow-neon/60" />
      {children}
    </span>
  )
}
