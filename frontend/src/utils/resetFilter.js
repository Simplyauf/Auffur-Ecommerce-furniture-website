import { store } from "../store";
import { setPlaceholderOfproductsDataCurrentlyRequested } from "../features/productSlice";
import { setSelectedCategory, setSelectedSubCategoryForFilter, setPriceRange } from "../features/filterBySlice";
import { toast } from "react-toastify";

export const resetFilter = (checkedCategory, checkedPriceRange, location, dispatch, doesTheFnCallNotNeedToast) => {
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

  !doesTheFnCallNotNeedToast &&
    toast("filter criterias has been reset", {
      type: "success",
      autoClose: 3000,
    });
};

// if the function is called from useEffect ,toasts message dont show up
