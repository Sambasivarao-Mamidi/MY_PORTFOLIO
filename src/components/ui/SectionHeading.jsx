export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">{description}</p>}
    </div>
  )
}