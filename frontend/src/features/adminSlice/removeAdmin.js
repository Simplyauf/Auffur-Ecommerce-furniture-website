import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const removeAdmin = createAsyncThunk("admin/removeAdmin", async (email, thunkAPI) => {
  try {
    const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
    const header = { headers: { authorization: `Bearer ${LoginToken}` } };

    const { data } = await axios.get(serverUrl + "/api/v1/admin/removeAdmin", { email }, header);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
