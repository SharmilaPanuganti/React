import React, { useState } from "react";

export const PostForm = () => {
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify({
        userid: userid,
        title: title,
      }),
      Headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((Response) => Response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="Enter user id  here ..."
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter title   here ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">submit yo</button>
      </div>
    </form>
  );
};
