import React, { useState } from "react";
import { useInput } from "../CustomHooks/useInput";

export const UserForm = () => {
  const [firstname, bindfirst, resetfirst] = useInput("");
  const [lastname, bindlast, resetlast] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstname}${lastname}`);
    resetfirst();
    resetlast();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="first">first name</label>
          <input style={{ marginLeft: "1rem" }} type="text" {...bindfirst} />
        </div>

        <div>
          <label htmlFor="last">last name</label>
          <input style={{ marginLeft: "1rem" }} type="text" {...bindlast} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
