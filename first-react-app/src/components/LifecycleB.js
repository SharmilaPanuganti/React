import React, { Component } from "react";

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "CGG",
    };
    console.log("life cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycle B getderived from props");
    return null;
    //return null or state
  }

  componentDidMount() {
    console.log("lifecycle B componenet did mount");
  }

  render() {
    console.log("render B");
    return <div>LifecycleB</div>;
  }
}
