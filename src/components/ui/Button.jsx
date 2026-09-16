import { cn } from '@/lib/utils'

export function Button({ variant = 'primary', href, className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer select-none',
    variant === 'primary' &&
      'bg-[var(--secondary)] text-[#0c0a0d] hover:bg-[#fb923c] shadow-[0_8px_24px_-8px_rgba(249,115,22,0.5)]',
    variant === 'secondary' &&
      'border border-[var(--border)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[rgba(167,139,250,0.08)]',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}