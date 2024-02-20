import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./components/MemoComp";

export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
      surname: "Doe",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "hello" });
    }, 2000);
  }

  render() {
    console.log("------------parent-comp---------");
    return (
      <>
        <div>ParentComp</div>
        {/* <PureComp name={this.state.name} />
        <RegComp name={this.state.name} /> */}
        <MemoComp />
      </>
    );
  }
}
