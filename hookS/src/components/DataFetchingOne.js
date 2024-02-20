import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataFetchingOne = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1o")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setErr("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setErr("something went worng 404");
      });
  });

  return (
    <div>
      {loading ? "loading" : post.title}
      {err ? "error" : ""}
    </div>
  );
};
