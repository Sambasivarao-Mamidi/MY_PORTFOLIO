import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch() {}

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          aria-live="polite"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg)',
            color: 'var(--text)',
            fontFamily: 'system-ui',
            padding: 20,
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Something went wrong</div>
            <div style={{ opacity: 0.7, marginBottom: 16 }}>
              {String(this.state.error?.message || this.state.error || 'An error occurred')}
            </div>
            <button
              onClick={this.reset}
              style={{
                padding: '8px 14px',
                background: 'var(--primary)',
                color: '#07060a',
                border: 'none',
                borderRadius: 6,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
