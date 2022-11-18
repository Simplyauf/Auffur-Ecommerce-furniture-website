import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  cart: [],
};

export const wishlistAndCartSlice = createSlice({
  name: "wishlistAndCartSlice",
  initialState,
  reducers: {
    setWishlist: (state, { payload }) => {
      payload = payload ? payload : [];
      state.wishlist = payload;
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
});

export const { setWishlist, setCart } = wishlistAndCartSlice.actions;

export default wishlistAndCartSlice.reducer;
