import React, { useEffect, useState } from "react";

export const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `clikd ${count} times`;
    console.log("use effect in action");
  }, [count]);

  //   document.title = `clikd ${count} times no useeffect`;

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        clicked {count} times{" "}
      </button>
    </div>
  );
};
