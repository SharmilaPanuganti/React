import React, { Component } from "react";

export default class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePos);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePos);
  }
  logMousePos = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    return (
      <div>
        x:{this.state.x} y:{this.state.y}
      </div>
    );
  }
}
