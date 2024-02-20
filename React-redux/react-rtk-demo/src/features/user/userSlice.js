// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
// const axios = require("axios");
import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchusers = createAsyncThunk("user/fetchusers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//promise generates pending ,fullfilled,rejected  action types
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchusers.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchusers.fulfilled, (state, action) => {
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
export default userSlice.reducer;
