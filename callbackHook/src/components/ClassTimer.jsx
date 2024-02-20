import React, { Component } from "react";

export default class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevstate) => ({
        count: prevstate.count + 1,
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        {this.state.count}
        <div>
          <button
            onClick={() => {
              clearInterval(this.interval);
            }}
          >
            {" "}
            clear.
          </button>
        </div>
      </div>
    );
  }
}
