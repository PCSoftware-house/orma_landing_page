function trackPointer(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export default function GlassCard({
  as: Tag = 'div',
  className = '',
  interactive = false,
  blur = false,
  children,
  ...rest
}) {
  return (
    <Tag
      onPointerMove={interactive ? trackPointer : undefined}
      className={`relative overflow-hidden rounded-xl border border-line bg-surface/80 shadow-glass transition duration-300 hover:-translate-y-px hover:border-white/[0.16] ${
        blur ? 'backdrop-blur-xl' : ''
      } ${interactive ? 'glass-spot' : ''} ${className}`}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      {children}
    </Tag>
  )
}
