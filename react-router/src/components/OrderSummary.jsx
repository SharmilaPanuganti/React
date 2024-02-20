import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navBack = useNavigate();
  return (
    <div>
      Order-confirmed!!
      <button onClick={() => navBack(-1)}>GO-BACK -TO -HOME</button>
    </div>
  );
};
