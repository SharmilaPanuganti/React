import React, { useEffect, useState } from "react";

export const HookMouse = () => {
  const logMousePos = (e) => {
    {
      setX(e.clientX);
      setY(e.clientY);
    }
  };

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("use erffect called");
    window.addEventListener("mousemove", logMousePos);

    return () => {
      window.removeEventListener("mousemove", logMousePos);
    };
  });

  return (
    <div>
      x:{x} y:{y}
    </div>
  );
};
