import { store } from "../store";
import { setCart } from "../features/wishlistAndCartSlice";
import { toast } from "react-toastify";

export const handleCartModification = (_id, dispatch, ProductQuantityForCart = 1) => {
  const { allProductsData } = store.getState().productsData;
  const { cart } = store.getState().wishlistAndCartSection;

  let newCart;
  if (cart.find((cartProduct) => cartProduct._id === _id)) {
    const filteredCart = cart.filter((productsData) => productsData._id !== _id);
    newCart = [...filteredCart];
    toast("Product has been removed from cart", {
      type: "success",
      autoClose: 3000,
    });
  } else {
    let currentCartedProduct = allProductsData.find((productsData) => productsData._id === _id);
    currentCartedProduct = {
      ...currentCartedProduct,
      quantity: ProductQuantityForCart,
    };
    newCart = [...cart, currentCartedProduct];
    toast("Product has been added to cart", {
      type: "success",
      autoClose: 3000,
    });
  }
  dispatch(setCart(newCart));
};
