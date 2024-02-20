import React, { useMemo, useState } from "react";

export const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const iseven = useMemo(() => {
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <h1>
        {counter1}
        <span>{iseven ? "even" : "odd"}</span>
      </h1>
      <h1>{counter2}</h1>
      <div>
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          increment 1st{" "}
        </button>
      </div>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        increment 1st{" "}
      </button>
    </div>
  );
};
