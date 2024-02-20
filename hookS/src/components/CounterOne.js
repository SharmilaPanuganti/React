import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return state - state;

    default:
      return state;
  }
};
export const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
    </div>
  );
};
