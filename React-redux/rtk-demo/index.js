const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const fetchusers = require("./features/user/userSlice").fetchusers;

const store = require("./app/store");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");
console.log("initial state", store.getState());

store.dispatch(fetchusers());

// const unsubscribe = store.subscribe(() => {});
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));

unsubscribe();
