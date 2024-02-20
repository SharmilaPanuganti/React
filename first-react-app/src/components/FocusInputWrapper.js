import React, { Component } from "react";
import ClickHandler from "./ClickHandler";

export class FocusInputWrapper extends Component {
  constructor() {
    super();
    this.componentRef = React.createRef;
  }
  clickHandler() {
    this.componentRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />

        <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    );
  }
}
