import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/changePassword";

export const enterNewPasswordAsync = createAsyncThunk(
  "users/enterNewPasswordAsync",
  async ({ password, token }, thunkAPI) => {
    try {
      const { data } = await axios.post(url, { password }, { headers: { token: token } });

      console.log(data);
      return { data, success: true };
    } catch (error) {
      return { errorMsg: error?.response.data.message || error.message, success: false };
    }
  }
);
