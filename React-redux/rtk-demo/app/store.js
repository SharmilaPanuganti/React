const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const reduxLogger = require("redux-logger");
const userReducer = require("../features/user/userSlice");
const logger = reduxLogger.createLogger;

const icecreamActions =
  require("../features/icecream/iceCreamSlice").icecreamActions;

const configureStore = require("@reduxjs/toolkit").configureStore;

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: iceCreamReducer, user: userReducer },
  //   middleware: (getDefaultMiddleware) => {
  //     getDefaultMiddleware().concat(logger);
  //   },
});
module.exports = store;
