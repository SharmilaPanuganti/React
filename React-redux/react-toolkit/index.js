const redux = require("redux");

const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";

const OrderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const OrderIceCream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
};

const cakeRestocked = (qty) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};
const iceCreamRestocked = (qty) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIcecreams: 10,
};

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED: {
      return { ...state, noOfCakes: state.noOfCakes - 1 };
    }

    case CAKE_RESTOCKED: {
      return { ...state, noOfCakes: state.noOfCakes + action.payload };
    }

    default:
      return state;
  }
};
const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED: {
      return { ...state, noOfIcecreams: state.noOfIcecreams - 1 };
    }

    case ICECREAM_RESTOCKED: {
      return { ...state, noOfIcecreams: state.noOfIcecreams + action.payload };
    }
    case CAKE_ORDERED: {
      return { ...state, noOfIcecreams: state.noOfIcecreams - 1 };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({ CakeReducer, IceCreamReducer });
const store = createStore(reducer);

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// store.dispatch(OrderCake());
// store.dispatch(OrderCake());
// store.dispatch(cakeRestocked(2));

const actions = bindActionCreators(
  { OrderCake, cakeRestocked, OrderIceCream, iceCreamRestocked },
  store.dispatch
);
actions.OrderCake();
actions.OrderCake();
actions.OrderCake();
actions.cakeRestocked(3);

actions.OrderIceCream();
actions.OrderIceCream();
actions.OrderIceCream();
actions.iceCreamRestocked(3);

unsubscribe();
