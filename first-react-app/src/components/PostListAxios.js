import React, { Component } from "react";
import axios from "axios";

export default class PostListAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errmsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        console.log(Response);
        this.setState({
          post: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errmsg: "--eroor retroving--" });
      });
  }
  render() {
    const { post, errmsg } = this.state;
    return (
      <div>
        <h1>list of items</h1>
        {post.length
          ? post.map((post) => <div key={post.id}> {post.title}</div>)
          : null}
        {errmsg ? errmsg : null}
      </div>
    );
  }
}
