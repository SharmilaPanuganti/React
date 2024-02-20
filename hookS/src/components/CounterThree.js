import React, { useReducer } from "react";
const initialState = 0;
export const CounterThree = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return state - state;
    }
  };
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>
        first: {countOne} second :{countTwo}
      </h1>
      <button
        onClick={() => {
          dispatchOne("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatchOne("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatchOne("reset");
        }}
      >
        reset
      </button>

      <button
        onClick={() => {
          dispatchTwo("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatchTwo("decrement");
        }}
      >
        -
      </button>
    </div>
  );
};
