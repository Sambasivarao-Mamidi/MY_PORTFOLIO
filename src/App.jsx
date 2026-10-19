import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import Home from '@/pages/Home'

export default function App() {
  return (
    <ErrorBoundary>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Home />
    </ErrorBoundary>
  )
}