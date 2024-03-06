/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
      user: JSON.parse(localStorage.getItem('user')) || {
        name: '',
        password: '',
        email: '',
        authUser: false
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-zA-a-z]{4,10}$/i.test(userId.name);
      const passwordValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
      state.user = userId;
      if (!passwordValidation || !userValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const SaveState = JSON.stringify(userId);
        localStorage.setItem('user', SaveState)
      }
    },
    logout(state) {
      state.user = {
        name: '',
        password: '',
        email: '',
        authUser: false
      };
      localStorage.clear()
    }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer