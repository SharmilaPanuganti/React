import logo from "./logo.svg";
import "./App.css";

import React, { useReducer } from "react";

import { CounterTwo } from "./components/CounterTwo";
import { CounterThree } from "./components/CounterThree";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { ComponentC } from "./components/ComponentC";
import { DataFetching2 } from "./components/DataFetching2";
import { ParentComponent } from "../../callbackHook/src/components/ParentComponent";

export const userContext = React.createContext();
export const compContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "R":
      return initialState;
    default:
      return state;
  }
};

export const counterContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <div>count is {count}</div>
      <counterContext.Provider
        value={{ counter: count, dispatchCount: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </counterContext.Provider> */}
      <DataFetching2 />
    </div>
  );
}

export default App;
