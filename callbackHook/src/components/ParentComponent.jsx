import React, { useCallback } from "react";
import { useState } from "react";
// import {Title} from ./Title;
import { Count } from "./Count";
import { Button } from "./Button";
import { Title } from "./Title";

export const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setAge(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleclick={incrementAge}> increment age</Button>

      <Count text="salary" count={salary} />
      <Button handleclick={incrementSalary}> increment salary</Button>
    </div>
  );
};
