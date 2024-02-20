import React, { Component } from "react";
import axios from "axios";

export default class PostFormAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((Response) => console.log(Response))
      .catch((err) => console.log(err));
  };

  render() {
    const { userid, title } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="text"
            placeholder="name.."
            name="userid"
            value={userid}
            onChange={this.changeHandler}
          />

          <input
            type="text"
            placeholder="title.."
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
          <button type="submit">sobmit</button>
        </div>
      </form>
    );
  }
}
