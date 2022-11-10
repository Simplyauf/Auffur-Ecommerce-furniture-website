import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProductsData: [],
  isLoading: true,
  placeholderOfproductsDataCurrentlyRequested: [],
  productsDataForCurrentPage: [],
  sortedAllProductsData: [],
  searchedProductData: [],
  sortedSearchedProductData: [],
  loadingOrErrorMessage: "Loading",
};

const url = "http://localhost:5000/api/v1/products";

export const getAllProductsData = createAsyncThunk("products/getAllProductsData", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(url);
    return data.products;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
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
    setSortedSearchedProductData: (state, { payload }) => {
      payload = payload ? payload : [];
      state.sortedSearchedProductData = payload;
    },
    setSearchedProductData: (state, { payload }) => {
      payload = payload ? payload : [];
      state.searchedProductData = payload;
    },
    setSortedAllProductsData: (state, { payload }) => {
      payload = payload ? payload : [];
      state.sortedAllProductsData = payload;
    },
    setLoadingOrErrorMessage: (state, { payload }) => {
      payload = payload ? payload : [];
      state.loadingOrErrorMessage = payload;
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
    [getAllProductsData.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.allProductsData = [];
      state.loadingOrErrorMessage = payload;
    },
  },
});

export const {
  setIsLoading,
  setPlaceholderOfproductsDataCurrentlyRequested,
  setProductsDataForCurrentPage,
  setSortedAllProductsData,
  setSearchedProductData,
  setSortedSearchedProductData,
  setLoadingOrErrorMessage,
} = productSlice.actions;

export default productSlice.reducer;

//  placeholderOfproductsDataCurrentlyRequested- REPRESENT THE TYPE OF PRODUCTS DATA CURRENTLY BEING REQUESTED WHICH COULD BE SORTED,SEARCHED OR FILTERED PRODUCTS DATA.
//  allProductsData-ENTIRE PRODUCTS DATA FETCHED FROM THE SERVER
// productsDataForCurrentPage=CURRENT PAGE PRODUCTS DATA OUT OF THE PAGINATED DATA
//sortedAllProductsData & sortedSearchedProductData -THIS IS THE SORTED DATA WHICH THE FILTERING AND PAGINATION FUNCTION TAKES DATA

//HOW THE SEARCH AND SHOP PAGE FNs WORKS
// AT THE START OF THE APP ALL IS FETCH
// IN THE SHOP AND SEARCH PAGE, THE SORTING FUNCTION KICKS OFF FIRSTLY AND SET THE 'sortedAllProductsData & sortedSearchedProductData' WHICH TRIGGERS THE FILTER FUNCTION AND IN THE FILTER FUNCTION  'placeholderOfproductsDataCurrentlyRequested' IS SET WHICH TRIGGERS PAGINATION
