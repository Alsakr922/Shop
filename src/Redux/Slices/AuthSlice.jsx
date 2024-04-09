/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: {
      name: "",
      password: "",
      email: "",
      gender: "male",
    },
    authUser: "",
  },
  reducers: {
    createAcount(state, action) {
      const userId = action.payload;
      const userValidation = userId.userName.length > 3;
      const emailValidation =
        userId.email.includes("@") && userId.email.includes(".");
      const passwordValidation = userId.password.length > 7;
      const genderValidation = userId.gender || 'male';
      const usersId = state.users;
      state.user = userId;
      if (!userValidation) {
        state.user.authUser = false;
        Swal.fire({
          title: "No",
          text: "User Name Must Be at least 4 characters",
          icon: "error",
        });
      } else if (!emailValidation) {
        state.user.authUser = false;
        Swal.fire({
          title: "No",
          text: "email must be include a (@) and (.*) character",
          icon: "error",
        });
      } else if (!passwordValidation) {
        state.user.authUser = false;
        Swal.fire({
          title: "No",
          text: "password must be at least 8 characters",
          icon: "error",
        });
      } else {
        {
          Swal.fire({
            title: "Welcome!",
            text: "Your One Of Us Now.",
            icon: "success",
          });
          state.authUser = true;
          localStorage.setItem("authUser", true);
          localStorage.setItem("user", JSON.stringify(userId));
          localStorage.setItem("gender", genderValidation);
          usersId.push(userId);
          localStorage.setItem("users", JSON.stringify(usersId));
          setTimeout(() => (location.href = "/"), 2000);
        }
      }
    },
    login(state, action) {
      const user = action.payload;
      const users = state.users;
      for (let i = 0; i < users.length; i++) {
        if (
          user.name === users[i].name &&
          user.password === users[i].password
        ) {
          state.authUser = true;
          localStorage.setItem("authUser", true);
          localStorage.setItem("gender", users[i].gender);
          localStorage.setItem("user", JSON.stringify(users[i]));
          Swal.fire({
            title: "Welcome!",
            text: "Welcome Back Boy.",
            icon: "success",
          });

          setTimeout(() => (location.href = "/"), 500);
        } else {
          state.authUser = false;
          Swal.fire({
            title: "No!",
            text: "Information Error.",
            icon: "error",
          });
        }
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        email: "",
        gender: "",
      };
      state.authUser = false;
      Swal.fire({
        title: "Good Bye",
        text: "Your Leave Us Now But We Have To See You Soon.",
        icon: "error",
      });
      localStorage.removeItem("user");
      localStorage.removeItem("gender");
      localStorage.removeItem("authUser");
      state.authUser = false;
      setTimeout(() => (location.href = "/auth"), 1000);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { createAcount, login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
