import { Component } from "react";
import ClickHandler from "./ClickHandler";

export default class extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
