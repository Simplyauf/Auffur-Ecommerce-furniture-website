import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProductsData: [],
  isLoading: true,
  placeholderOfproductsDataCurrentlyRequested: [],
  productsDataForCurrentPage: [],
  sortedAllProductsData: [],
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
    setPlaceholderOfproductsDataCurrentlyRequested: (state, { payload }) => {
      payload = payload ? payload : [];

      state.placeholderOfproductsDataCurrentlyRequested = payload;
    },
    setProductsDataForCurrentPage: (state, { payload }) => {
      payload = payload ? payload : [];

      state.productsDataForCurrentPage = payload;
    },
    setSortedAllProductsData: (state, { payload }) => {
      payload = payload ? payload : [];
      state.sortedAllProductsData = payload;
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

export const {
  setIsLoading,
  setPlaceholderOfproductsDataCurrentlyRequested,
  setProductsDataForCurrentPage,
  setSortedAllProductsData,
} = productSlice.actions;

export default productSlice.reducer;

//  placeholderOfproductsDataCurrentlyRequested- REPRESENT THE TYPE OF PRODUCTS DATA CURRENTLY BEING REQUESTED WHICH COULD BE SORTED,SEARCHED OR FILTERED PRODUCTS DATA.
//  allProductsData-ENTIRE PRODUCTS DATA FETCHED FROM THE SERVER
//   productsDataForCurrentPage=CURRENT PAGE PRODUCTS DATA OUT OF THE PAGINATED DATA
