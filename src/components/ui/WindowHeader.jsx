const DOTS = ['#ff5f57', '#febc2e', '#28c840']

export default function WindowHeader({ title, center, trailing, dense = false }) {
  return (
    <div
      className={`relative flex items-center gap-3 border-b border-line px-3 ${
        dense ? 'h-9' : 'h-11'
      }`}
    >
      <div className="flex items-center gap-[6px]" aria-hidden="true">
        {DOTS.map((color) => (
          <span
            key={color}
            className="h-[10px] w-[10px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {title ? (
        <span className="text-[12px] font-medium tracking-wide text-muted">{title}</span>
      ) : null}

      {center ? (
        <div className="absolute left-1/2 top-1/2 w-[min(420px,54%)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(420px,46%)]">
          {center}
        </div>
      ) : null}

      {trailing ? (
        <div className="ml-auto flex items-center gap-2">{trailing}</div>
      ) : (
        <span className="ml-auto" />
      )}
    </div>
  )
}
