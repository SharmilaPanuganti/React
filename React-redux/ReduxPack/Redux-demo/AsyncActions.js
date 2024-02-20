const axios = require("axios");
const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").default;
const createStore = redux.legacy_createStore;
// const applyMiddleWare = redux.applyMiddleware;

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
////////////////////////////////////////
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
//////////////////////////////////////////
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer, redux.applyMiddleware(thunkMiddleWare));

store.subscribe(() => {
  console.log(store.getState());
});

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        //err.msg is eror discription
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

store.dispatch(fetchUsers());
