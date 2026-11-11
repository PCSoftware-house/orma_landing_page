export default function SectionHeading({ eyebrow, title, body, as: Heading = 'h2', className = 'mb-12' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">{eyebrow}</p>
      ) : null}
      <Heading
        className={`text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl ${eyebrow ? 'mt-3' : ''}`}
      >
        {title}
      </Heading>
      {body ? <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{body}</p> : null}
    </div>
  )
}
