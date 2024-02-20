import React, { Component } from "react";
import CompF from "./CompF";
import UserContext from "./userContext";

class CompE extends Component {
  // static contextType = UserContext;
  render() {
    return (
      <div>
        {/* component e {this.context} */}
        <CompF />
      </div>
    );
  }
}

export default CompE;
