import { Component, type ReactNode, type ErrorInfo } from "react";
import { ServiceUnavailablePage } from "@/pages/service-unavailable/ui/ServiceUnavailablePage";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ServiceUnavailablePage />;
    }
    return this.props.children;
  }
}
