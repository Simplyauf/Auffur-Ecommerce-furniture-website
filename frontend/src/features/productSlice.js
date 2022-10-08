import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProductsData: [],
  isLoading: true,
  typeOfproductsDataCurrentlyRequested: [],
  productsDataForCurrentPage: [],
};

const url = "http://localhost:5000/api/v1/products";

export const getAllProductsData = createAsyncThunk("products/getAllProductsData", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(url);
    return data.products;
  } catch (error) {
    console.log(error);
  }
});

export const productSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setTypeOfproductsDataCurrentlyRequested: (state, { payload }) => {
      payload = payload ? payload : [];

      state.typeOfproductsDataCurrentlyRequested = payload;
    },
    setProductsDataForCurrentPage: (state, { payload }) => {
      payload = payload ? payload : [];

      state.productsDataForCurrentPage = payload;
    },
  },
  extraReducers: {
    [getAllProductsData.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProductsData.fulfilled]: (state, { payload }) => {
      // setting the objects to empty array before fetched data is received,instead of undefined, to prevent error in Array methods in the frontend
      payload = payload ? payload : [];
      state.isLoading = false;
      state.allProductsData = payload;
    },
    [getAllProductsData.rejected]: (state, action) => {
      state.isLoading = true;
      state.allProductsData = [];
    },
  },
});

export const { setIsLoading, setTypeOfproductsDataCurrentlyRequested, setProductsDataForCurrentPage } =
  productSlice.actions;

export default productSlice.reducer;
