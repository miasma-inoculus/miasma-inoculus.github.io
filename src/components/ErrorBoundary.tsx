import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 flex items-center justify-center p-4">
          <div className="max-w-md text-center border border-red-900 p-8 bg-zinc-950">
            <h2 className="text-2xl font-serif mb-4">Archive Corruption</h2>
            <p className="font-mono text-sm opacity-70">
              The Miasma Inoculus archive encountered an unexpected error. 
              Please refresh your connection.
            </p>
          </div>
        </div>
      );
    }

    return this.children;
  }
}

export default ErrorBoundary;
