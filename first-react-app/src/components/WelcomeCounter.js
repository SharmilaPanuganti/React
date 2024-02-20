import { Component } from "react";

class WelcomeCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // this.setState(
    //   { count: this.state.count + 1 },
    //   console.log(this.state.count)
    // );
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    }, console.log(this.state.count));
  };

  render() {
    const count = this.state.count;
    return (
      <div>
        <h1>counter {count}</h1>
        <button onClick={this.incrementFive}>click to increment</button>
      </div>
    );
  }

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };
}

export default WelcomeCounter;
