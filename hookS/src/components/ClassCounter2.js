import React, { Component } from "react";

export default class ClassCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}> count {this.state.count} </button>
      </div>
    );
  }
}
