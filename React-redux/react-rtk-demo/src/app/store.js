// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

// const logger = reduxLogger.createLogger;

// const icecreamActions =
//   require("../features/icecream/iceCreamSlice").icecreamActions;

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: iceCreamReducer, user: userReducer },
  //   middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware().concat(logger);
  //   },
});
export default store;
