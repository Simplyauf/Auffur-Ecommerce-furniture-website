import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchResendEmailVerificationLink = createAsyncThunk(
  "users/resendEmailVerificationLink",
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post(serverUrl + "/api/v1/auth/resendEmailVerificationLink", { email });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
    }
  }
);
