const redux = require("redux");
const produce = require("immer").produce;
const reduxLogger = require("redux-logger");
const createStore = redux.legacy_createStore;
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
  name: "marshmello",
  address: { street: "downtown street,USA", city: "ontario" },
};
const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const StreetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED: {
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    }
    default:
      return state;
  }
};

const store = createStore(StreetReducer, applyMiddleWare(logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated:", store.getState());
});

store.dispatch(updateStreet("bio diverse"));
