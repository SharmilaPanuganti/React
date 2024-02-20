import { Component } from "react";

const withCounter = (WrappedComponent, incrementNum) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + incrementNum }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};
export default withCounter;
