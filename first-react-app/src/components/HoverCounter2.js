import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, increment } = this.state;
    return <h2 onMouseOver={increment}>clicked {count} times</h2>;
  }
}

export default HoverCounter2;
