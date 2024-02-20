import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataFetching = () => {
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(<res className="data"></res>);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button
        onClick={() => {
          setIdFromButton(id);
        }}
      >
        clikc
      </button>
      <ul>
        {/* {post.map((po) => (
          <li key={po.id}>{po.title}</li>
        ))} */}
        {post.title}
      </ul>
    </div>
  );
};
