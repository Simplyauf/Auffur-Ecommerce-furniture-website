import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/register";

export const RegisterUser = createAsyncThunk("users/register", async (userParameter, thunkAPI) => {
  try {
    const { email, password, username } = userParameter;
    const { data } = await axios.post(url, { email, username, password });
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
  }
});
