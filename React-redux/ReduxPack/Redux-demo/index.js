// console.log("this is the index js");

const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.legacy_createStore;

const Logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIcecreams: 10,
};

const Cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
const iceCreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: Cakereducer,
  iceCream: iceCreamreducer,
});

const store = createStore(rootReducer, applyMiddleware(Logger));

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
