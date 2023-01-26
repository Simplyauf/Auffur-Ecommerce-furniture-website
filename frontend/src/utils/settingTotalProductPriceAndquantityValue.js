import { store } from "../store";

export const settingTotalProductPriceAndTotalQuantityValue = (setProductTotalQuantity, setTotalProductPrice) => {
  const { cart } = store.getState().wishlistAndCartSection;
  let totalProductValue = 0;
  let totalProductQuantityValue = 0;
  for (let key of cart) {
    let price;
    if (key.discountPercentValue > 0) {
      price = key.price - (key.price * key.discountPercentValue) / 100;
    } else {
      price = key.price;
    }
    totalProductValue += price * key.quantity;
    totalProductQuantityValue += key.quantity;
  }
  setTotalProductPrice(totalProductValue);
  setProductTotalQuantity(totalProductQuantityValue);
};
