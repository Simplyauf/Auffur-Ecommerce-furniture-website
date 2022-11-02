import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import filterBySlice from "./features/filterBySlice";

export const store = configureStore({
  reducer: {
    productsData: productSlice,
    filterByCategoryAndPrice: filterBySlice,
  },
});
