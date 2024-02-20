import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => navigate("orderconfirmation", { replace: true })}>
        PLACE-ORDER
      </button>
    </div>
  );
};
