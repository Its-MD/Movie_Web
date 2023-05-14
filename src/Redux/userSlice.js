import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    email: null,
    token: null,
    uid: null,
  },
  reducers: {
    addUser: (state, action) => {
      // console.log(action)
      return (state = {
        isAuth: true,
        email: action.payload.email,
        token: action.payload.token,
        uid: action.payload.uid,
      });
    },
    removeUser: (state, _action) => {
      return (state = {
        isAuth: false,
        email: null,
        token: null,
        uid: null,
      });
    },
  },
});
export const userReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
