export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '8px',
        background: 'var(--bg)',
        color: 'var(--text)'
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>SambaSivaRao Mamidi</h1>
      <p style={{ color: 'var(--muted)' }}>
        Frontend Developer — building with React, JavaScript, and modern tools.
      </p>
    </main>
  )
}