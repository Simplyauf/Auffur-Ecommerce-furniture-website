import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/login";

export const loginUser = createAsyncThunk("users/login", async (userParameter, thunkAPI) => {
  try {
    const { email, password } = userParameter;
    const { data } = await axios.post(url, { email, password });
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
  }
});
