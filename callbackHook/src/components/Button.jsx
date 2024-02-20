import React from "react";

export const Button = ({ handleclick, children }) => {
  console.log(`rendering button and ${children} `);
  return (
    <div>
      <button onClick={handleclick}> {children}</button>
    </div>
  );
};

export default React.memo(Button);
