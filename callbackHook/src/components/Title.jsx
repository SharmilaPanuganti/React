import React from "react";

const Title = (props) => {
  console.log("rendering title");
  return (
    <div>
      <h2>use callback hook</h2>
    </div>
  );
};

export default React.memo(Title);
