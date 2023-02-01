import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchIsTokenValid = createAsyncThunk("users/isTokenValid", async (_, thunkAPI) => {
  try {
    const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
    const header = { headers: { authorization: `Bearer ${LoginToken}` } };
    console.log(header);
    const { data } = await axios.get(serverUrl + "/api/v1/auth/isTokenValid", header);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(false);
  }
});
