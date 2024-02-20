import { useState } from "react";

export const Message = () => {
  const [message, setMessage] = useState("welcomr to visitor");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("thanq all")}>scribe</button>
    </div>
  );
};
