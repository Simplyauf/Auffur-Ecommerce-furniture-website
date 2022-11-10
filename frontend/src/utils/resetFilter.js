import { store } from "../store";
import { setPlaceholderOfproductsDataCurrentlyRequested } from "../features/productSlice";
import { setSelectedCategory, setSelectedSubCategoryForFilter, setPriceRange } from "../features/filterBySlice";

export const resetFilter = (checkedCategory, checkedPriceRange, location, dispatch) => {
  const { sortedAllProductsData, sortedSearchedProductData } = store.getState().productsData;

  dispatch(setSelectedCategory(null));
  dispatch(setSelectedSubCategoryForFilter(null));
  dispatch(setPriceRange(null));
  location.pathname === "/shop" && dispatch(setPlaceholderOfproductsDataCurrentlyRequested(sortedAllProductsData));
  location.pathname === "/search" &&
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(sortedSearchedProductData));
  if (checkedCategory) {
    checkedCategory.checked = false;
  }
  if (checkedPriceRange) {
    checkedPriceRange.checked = false;
  }
};
