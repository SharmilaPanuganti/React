import React, { useState } from "react";
import { HookMouse } from "./HookMouse";

export const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}> click me </button>
      {display && <HookMouse />}
    </div>
  );
};
