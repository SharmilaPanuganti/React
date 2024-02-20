import React, { useEffect, useState } from "react";

export const PostList = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicodesss  .com/posts`)
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => setPost(data))
      .catch((Error) => console.log(Error));
  }, []);
  return (
    <div>
      PostList
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
