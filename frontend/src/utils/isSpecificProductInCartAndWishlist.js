export const isProductInCartFn = (_id, setIsProductInCart, cart) => {
  setIsProductInCart(() => {
    if (cart.find((cartProduct) => cartProduct._id === _id)) {
      return true;
    } else {
      return false;
    }
  });
};

export const isProductInWishlistFn = (_id, setIsWishlisted, wishlist) => {
  setIsWishlisted(() => {
    if (wishlist.find((wishlistProduct) => wishlistProduct._id === _id)) {
      return true;
    } else {
      return false;
    }
  });
};
