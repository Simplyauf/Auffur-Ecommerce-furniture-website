import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubCategoryForFilter: null,
  selectedCategory: null,
  priceRange: null,
};

export const filterBySlice = createSlice({
  name: "filterBySlice",
  initialState,
  reducers: {
    setSelectedSubCategoryForFilter: (state, { payload }) => {
      state.selectedSubCategoryForFilter = payload;
    },
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setPriceRange: (state, { payload }) => {
      state.priceRange = payload;
    },
  },
});

export const { setPriceRange, setSelectedCategory, setSelectedSubCategoryForFilter } = filterBySlice.actions;

export default filterBySlice.reducer;

//FILTER CRITERIA =
//  selectedCategory-VALUE OF THE CHECKED MAIN PRODUCT CATEGORY
// priceRange- VALUE OF SELECTED PRICE RANGE
// selectedSubCategoryForFilter- VALUE OF CHECKED SUB CATEGORY
