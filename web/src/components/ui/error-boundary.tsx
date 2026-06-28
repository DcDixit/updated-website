"use client";

import type { ReactNode } from "react";
import { Component } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("UI error boundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            className="surface-card mx-auto my-8 max-w-lg p-6 text-center"
            role="alert"
          >
            <p className="type-h3 text-foreground">Something went wrong</p>
            <p className="type-body mt-2 text-[color:var(--text-secondary)]">
              Please refresh the page or contact us if the problem persists.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
