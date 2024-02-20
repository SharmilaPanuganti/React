import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>clicked {count} times</button>;
  }
}

export default ClickCounterTwo;
