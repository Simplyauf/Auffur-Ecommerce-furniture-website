import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const enterNewPasswordAsync = createAsyncThunk(
  "users/enterNewPasswordAsync",
  async ({ password, token }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        serverUrl + "/api/v1/auth/changePassword",
        { password },
        { headers: { token: token } }
      );

      console.log(data);
      return { data, success: true };
    } catch (error) {
      return { errorMsg: error?.response.data.message || error.message, success: false };
    }
  }
);
