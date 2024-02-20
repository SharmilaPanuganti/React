const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;

const fetchusers = createAsyncThunk("user/fetchusers", () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((item) => item.id))
);

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//promise generates pending ,fullfilled,rejected  action types
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchusers.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchusers.fullfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builders.addCase(fetchusers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.users = [];
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchusers = fetchusers;
