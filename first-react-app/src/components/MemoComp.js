import React from "react";

const MemoComp = ({ name }) => {
  console.log("rendering memo componenets");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
