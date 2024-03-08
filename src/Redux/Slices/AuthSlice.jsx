/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
      user: JSON.parse(localStorage.getItem('user')) || {
        name: '',
        email: '',
        authUser: false
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-zA-a-z]{4,10}$/i.test(userId.name);
      state.user = userId;
      if (!userValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const SaveState = JSON.stringify(userId);
        Swal.fire({
      title: "Welcome!",
      text: "Your One Of Us Now.",
      icon: "success"
    });
        localStorage.setItem('user', SaveState)
      }
    },
    logout(state) {
      state.user = {
        name: '',
        email: '',
        authUser: false
      };
              Swal.fire({
      title: "Good Bye",
      text: "Your Leave Us Now But We Have To See You Soon.",
      icon: "error"
    });
      localStorage.clear()
    }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer