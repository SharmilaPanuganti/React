import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "CGG",
    };
    console.log("life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycle a getderived from props");
    return null;
    //return null or state
  }

  componentDidMount() {
    console.log("lifecycle A componenet did mount");
  }

  shouldComponentUpdate() {
    console.log("lifecycle a should conmponinent update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycle a get snapshot before update");
    return null;
  }
  componentDidUpdate() {
    console.log("life cycle a componenet did update");
  }

  changeState = () => {
    this.setState({
      name: "welcommeeee",
    });
  };

  render() {
    console.log("render A");
    return (
      <>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </>
    );
  }
}
