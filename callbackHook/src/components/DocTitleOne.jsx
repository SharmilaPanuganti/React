import React, { useEffect, useState } from "react";
import { useDocTitle } from "../CustomHooks/useDocTitle";

export const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  useDocTitle(count);

  return (
    <div>
      <button onClick={changeCount}>{count}</button>
    </div>
  );
};
