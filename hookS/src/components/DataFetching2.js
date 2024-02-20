import React, { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  post: {},
  error: "",
};
export const DataFetching2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FECTH-SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };

      case "FETCH-FAIL":
        return {
          loading: false,
          post: {},
          error: "failed to fetch",
        };

      case "reset":
        return state;
    }
  };
  const [newState, dispatch] = useReducer(reducer, initialSdtate);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch({ type: "FECTH-SUCCES", payload: res.data }))
      .catch((err) => dispatch({ type: "FECTH-FAIL" }));
  }, []);

  return (
    <div>
      {state.loading ? "loading......." : state.post.title}

      {state.error ? state.error : null}
    </div>
  );
};
