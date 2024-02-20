import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>helo{username}</div>;
        }}
      </UserConsumer>

      // <h1>help</h1>
    );
  }
}

export default CompF;
