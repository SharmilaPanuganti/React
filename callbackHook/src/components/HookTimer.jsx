import React, { useEffect, useRef, useState } from "react";

export const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(
      () => {
        setTimer(timer + 1);
      },

      1000
    );

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        {" "}
        click to +{" "}
      </button>
    </div>
  );
};
