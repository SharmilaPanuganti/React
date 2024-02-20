import React from "react";
import { useState } from "react";
export const HookCounterr = () => {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const inc5 = () => {
    for (let index = 1; index < 6; index++) {
      setCount((Prevcount) => Prevcount + 1);
    }
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(initial)}>reset</button>
      <button onClick={() => setCount((Prevcount) => Prevcount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((Prevcount) => Prevcount - 1)}>
        decrement
      </button>
      <button onClick={() => inc5()}>inc 5</button>
    </div>
  );
};
