import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export const IceCreamView = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  const numOfIceCreams = useAppSelector(
    (state) => state.icecream.noOfIceCreams
  );
  return (
    <div>
      <h2>no of icecream {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}> order icecream</button>
      <input
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        {" "}
        restock icecream
      </button>
    </div>
  );
};
