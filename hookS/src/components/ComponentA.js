import React from "react";
import { useContext } from "react";
import { counterContext } from "../App";

export const ComponentA = () => {
  const count = useContext(counterContext);
  return (
    <div>
      <div>count is {count.counter}</div>
      <button onClick={() => count.dispatchCount("+")}>+</button>
      <button onClick={() => count.dispatchCount("-")}>-</button>
      <button onClick={() => count.dispatchCount("R")}>R</button>
    </div>
  );
};
