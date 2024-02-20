import React from "react";
import ReactDOM from "react-dom";

export const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>portals demo..</h1>,
    document.getElementById("portal-root")
  );
};
