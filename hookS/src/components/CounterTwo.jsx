import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
export const CounterTwo = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + 1 };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - 1 };
      case "increment-1":
        return { ...state, secondCounter: state.secondCounter + 1 };
      case "decrement-1":
        return { ...state, secondCounter: state.secondCounter - 1 };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstcounter}</div>
      <button onClick={dispatch({ type: "increment", value: 1 })}>+</button>
      <button onClick={dispatch({ type: "decrement", value: 1 })}>-</button>
      <button onClick={dispatch({ type: "increment-1", value: 5 })}>+</button>
      <button onClick={dispatch({ type: "decrement-1", value: 5 })}>-</button>
      <button onClick={dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
