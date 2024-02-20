import React from "react";

export const useDocTitle = (count) => {
  useEffect(() => {
    document.title = count;
  }, [count]);
};
