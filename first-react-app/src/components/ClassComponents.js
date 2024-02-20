import { Component } from "react";

class ClassComponents extends Component {
  render() {
    const { name, alis } = this.props;
    //////////for renddering ui
    return <h1>helloo {this.props.name}</h1>;
  }
}

export default ClassComponents;
