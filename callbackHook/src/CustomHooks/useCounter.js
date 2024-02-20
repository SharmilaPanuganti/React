import { useState } from "react";

export const useCounter = (initial = 10) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};
