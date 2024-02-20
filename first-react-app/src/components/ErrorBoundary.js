import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(Error, info) {
    console.log(Error);
    console.log(info);
  }
  render() {
    {
      if (this.state.hasError) {
        return <h1>some thing went wornggg.. .. .. </h1>;
      }

      return this.props.children;
    }
  }
}
