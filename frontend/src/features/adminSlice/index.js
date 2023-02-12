import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewAdmin } from "./createNewAdmin";
import { fetchIsUserAnAdmin } from "./checkIfUserIsAnAdmin";
import { removeAdmin } from "./removeAdmin";
import { fetchAdminDatas } from "./fetchAdminData";

const initialState = {
  isLoading: false,
  checkingAdminStatusLoader: false,
  adminDatas: [],
};
console.log(initialState);

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    getAdminDatas: (state, { payload }) => {
      state.adminDatas = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: {
    //createNewAdmin
    [createNewAdmin.pending]: (state) => {
      state.isLoading = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    [createNewAdmin.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.errorMessage = "";
      state.successMessage = "";

      toast(payload, {
        type: "success",
        autoClose: 2000,
        position: "top-center",
      });
    },
    [createNewAdmin.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.errorMessage = "";
      state.successMessage = "";

      toast(payload, {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
    },

    // delete admin
    [removeAdmin.pending]: (state) => {
      state.isLoading = true;
    },
    [removeAdmin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      toast(payload, {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
    },
    [removeAdmin.rejected]: (state, { payload }) => {
      state.isLoading = false;

      toast(payload, {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    },

    // fetch admin data
    [fetchAdminDatas.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAdminDatas.fulfilled]: (state, { payload }) => {
      state.adminDatas = payload;

      state.userData = payload;
      toast(payload, {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
    },
    [fetchAdminDatas.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;

      toast(payload, {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    },

    // check if  user is an admin
    [fetchIsUserAnAdmin.pending]: (state) => {
      state.checkingAdminStatusLoader = true;
    },
    [fetchIsUserAnAdmin.fulfilled]: (state) => {
      state.checkingAdminStatusLoader = false;
    },
    [fetchIsUserAnAdmin.rejected]: (state) => {
      state.checkingAdminStatusLoader = false;
      toast("Only logged in administrator is allowed to page", {
        type: "error",
        autoClose: 2000,
        position: "top-center",
      });
    },
  },
});

export const { setIsLoading, getAdminDatas } = adminSlice.actions;

export default adminSlice.reducer;
