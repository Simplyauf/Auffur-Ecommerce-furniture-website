import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser } from "./register";
import { loginUser } from "./login";
import { fetchForgotPasswordClick } from "./fetchForgotPasswordClick";
import { fetchIsTokenValid } from "./fetchIsTokenValid";
import { fetchResendEmailVerificationLink } from "./resendEmailVerification";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isTokenValidLoader: false,
  userData: "",
  shippingMethod: "standard",
};
console.log(initialState);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setShippingMethod: (state, { payload }) => {
      state.shippingMethod = payload;
    },
    getUserData: (state, { payload }) => {
      state.userData = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
  extraReducers: {
    //register reducers
    [RegisterUser.pending]: (state) => {
      state.isLoading = true;
      state.errorMessageInRegisterPage = "";
      state.successMessageInRegisterPage = "";
    },
    [RegisterUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;

      toast(payload, {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
    },
    [RegisterUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;

      toast(payload, {
        type: "error",
        autoClose: 4000,
        position: "top-center",
      });
    },

    // login reducers
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.isLoggedIn = true;
      console.log(payload);
      localStorage.setItem("UserData", JSON.stringify(payload.userData));
      state.userData = payload.userData;
      toast(payload.message, {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;

      toast(payload, {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    },
    // fetch forgotpasssword click controller from server
    [fetchForgotPasswordClick.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchForgotPasswordClick.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload, {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
    },
    [fetchForgotPasswordClick.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload, {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    },
    //resend email verification
    [fetchResendEmailVerificationLink.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchResendEmailVerificationLink.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload, {
        type: "success",
        autoClose: 4000,
        position: "top-center",
      });
    },
    [fetchResendEmailVerificationLink.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload, {
        type: "error",
        autoClose: 4000,
        position: "top-center",
      });
    },
    // fetch isTokenValid controller from servers
    [fetchIsTokenValid.pending]: (state) => {
      state.isTokenValidLoader = true;
    },
    [fetchIsTokenValid.fulfilled]: (state, { payload }) => {
      state.isTokenValidLoader = false;
      state.isLoggedIn = true;
    },
    [fetchIsTokenValid.rejected]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.userData = "";
      state.isTokenValidLoader = false;
    },
  },
});

export const { setIsLoading, setIsLoggedIn, getUserData, setShippingMethod } = authSlice.actions;

export default authSlice.reducer;
