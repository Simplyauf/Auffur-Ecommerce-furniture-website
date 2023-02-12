import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const fetchIsUserAnAdmin = createAsyncThunk("admin/isUserAnAdmin", async (_, thunkAPI) => {
  try {
    const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
    const header = { headers: { authorization: `Bearer ${LoginToken}` } };

    const { data } = await axios.get(serverUrl + "/api/v1/admin/checkIfUserIsAdmin", header);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
