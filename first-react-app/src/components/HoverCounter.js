import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        Hovered : {count} {name} times
      </h2>
    );
  }
}

export default withCounter(HoverCounter, 5);
