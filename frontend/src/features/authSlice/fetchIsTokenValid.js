import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/api/v1/auth/isTokenValid";

export const fetchIsTokenValid = createAsyncThunk("users/isTokenValid", async (_, thunkAPI) => {
  try {
    const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
    const header = { headers: { authorization: `Bearer ${LoginToken}` } };
    console.log(header);
    const { data } = await axios.get(url, header);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(false);
  }
});
