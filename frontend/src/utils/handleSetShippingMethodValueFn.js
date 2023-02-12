export const handleSetShippingMethodValue = (shippingMethod, setShippingMethodValue) => {
  const methodArr = { standard: 7, express: 10, "free shipping": 0 };

  for (let key in methodArr) {
    if (key === shippingMethod) {
      setShippingMethodValue(methodArr[key]);
    }
  }
};
