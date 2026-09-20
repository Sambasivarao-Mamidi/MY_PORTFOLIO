export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} SambaSivaRao Mamidi
        </p>
      </div>
    </footer>
  )
}