import React from "react";

export const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummycloss" },
    null,
    React.createElement("h1", null, "hello participants")
  );
};
