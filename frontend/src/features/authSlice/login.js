import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const loginUser = createAsyncThunk("users/login", async (userParameter, thunkAPI) => {
  try {
    const { email, password } = userParameter;
    const { data } = await axios.post(serverUrl + "/api/v1/auth/login", { email, password });
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data?.message || error.message);
  }
});
