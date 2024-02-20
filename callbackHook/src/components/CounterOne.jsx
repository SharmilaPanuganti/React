import React from "react";
import { useCounter } from "../CustomHooks/useCounter";

export const CounterOne = () => {
  ////////////////////
  const [count, increment, decrement, reset] = useCounter(100);
  ///////////////////////////

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
