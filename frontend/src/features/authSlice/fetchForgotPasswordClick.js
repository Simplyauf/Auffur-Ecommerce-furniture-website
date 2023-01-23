import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/forgotPasswordClick";

export const fetchForgotPasswordClick = createAsyncThunk("users/forgotPasswordClick", async (email, thunkAPI) => {
  try {
    const { data } = await axios.post(url, { email });

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.message || error.message);
  }
});
