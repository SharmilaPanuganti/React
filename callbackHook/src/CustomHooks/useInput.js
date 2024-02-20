import React, { useState } from "react";

export const useInput = (initial) => {
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  const [value, setValue] = useState(initial);

  const reset = () => {
    setValue(initial);
  };

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind, reset];
};
