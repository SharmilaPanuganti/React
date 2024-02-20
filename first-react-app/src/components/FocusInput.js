import React, { Component } from "react";
class FocusInput extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.inputRef = React.createRef();
    //1.
    this.cbRef = null;
    //2.
    this.setCbRef = (element) => (this.cbRef = element);
  }

  componentDidMount() {
    this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />;
      </>
    );
  }
}
export default FocusInput;
