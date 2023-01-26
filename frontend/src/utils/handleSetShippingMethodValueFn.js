export const handleSetShippingMethodValue = (shippingMethod, setShippingMethodValue) => {
  const methodArr = { standard: 7, express: 10, "free shipping": 0 };

  for (let key in methodArr) {
    console.log(key);
    if (key === shippingMethod) {
      console.log(key);
      setShippingMethodValue(methodArr[key]);
    }
    console.log(methodArr[key]);
  }
};
