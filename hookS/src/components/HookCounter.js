import React from "react";
import { useState } from "react";

export const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
};
