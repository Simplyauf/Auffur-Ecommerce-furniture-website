import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/resendEmailVerificationLink";

export const fetchResendEmailVerificationLink = createAsyncThunk(
  "users/resendEmailVerificationLink",
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post(url, { email });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
    }
  }
);
