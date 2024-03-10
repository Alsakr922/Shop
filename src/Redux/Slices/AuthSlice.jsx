/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {
      name: "",
      password: "",
      email: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = userId.name;
      const emailValidation = userId.email;
      const passwordValidation = userId.password;
      state.user = userId;
      if (passwordValidation && userValidation && emailValidation) {
        state.user.authUser = true;
        const SaveState = JSON.stringify(userId);
        Swal.fire({
          title: "Welcome!",
          text: "Your One Of Us Now.",
          icon: "success",
        });
        localStorage.setItem("user", SaveState);
        setTimeout(() => (location.href = "/"), 2000);
      } else {
        state.user.authUser = false;
        Swal.fire({
          title: "No",
          text: "Complete data First",
          icon: "error",
        });
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        email: "",
        gender: "",
        authUser: false,
      };
      Swal.fire({
        title: "Good Bye",
        text: "Your Leave Us Now But We Have To See You Soon.",
        icon: "error",
      });
      localStorage.clear();
      setTimeout(() => (location.href = "/login"), 2000);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
