import React, { Component } from "react";

export default class User extends Component {
  render() {
    return <div>User : {this.props.render(false)}</div>;
  }
}
