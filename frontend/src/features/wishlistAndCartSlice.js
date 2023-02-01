import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  cart: [],
};
console.log(initialState);
export const wishlistAndCartSlice = createSlice({
  name: "wishlistAndCartSlice",
  initialState,
  reducers: {
    setWishlist: (state, { payload }) => {
      payload = payload ? payload : [];
      state.wishlist = payload;
    },
    setCart: (state, { payload }) => {
      console.log(payload);
      state.cart = payload;
    },
  },
});

export const { setWishlist, setCart } = wishlistAndCartSlice.actions;

export default wishlistAndCartSlice.reducer;
