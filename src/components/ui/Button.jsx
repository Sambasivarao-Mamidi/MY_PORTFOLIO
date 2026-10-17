import { cn } from '@/lib/utils'

export function Button({ variant = 'primary', href, className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer select-none',
    variant === 'primary' &&
      'bg-[linear-gradient(135deg,#B19CFF_0%,#8B5CF6_100%)] text-[#0A0812] shadow-[0_0_28px_-6px_rgba(177,156,255,0.55)] hover:shadow-[0_0_34px_-4px_rgba(177,156,255,0.7)] hover:brightness-110',
    variant === 'secondary' &&
      'border border-[var(--border)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[rgba(177,156,255,0.08)]',
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