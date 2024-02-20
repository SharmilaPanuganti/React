import React from "react";
import { counterContext, userContext } from "../App";

const count = userContext(counterContext);

export const ComponentF = () => {
  return (
    <div>
      <div>count is {count.counter}</div>
      <button onClick={() => count.dispatchCount("+")}>+</button>
      <button onClick={() => count.dispatchCount("-")}>-</button>
      <button onClick={() => count.dispatchCount("R")}>R</button>
      {/* <userContext.Consumer>
        {(user) => {
          return (
            <compContext.Consumer>
              {(company) => {
                return (
                  <div>
                    user context {user}company context--- {company}
                  </div>
                );
              }}
            </compContext.Consumer>
          );
        }}
      </userContext.Consumer> */}
    </div>
  );
};
