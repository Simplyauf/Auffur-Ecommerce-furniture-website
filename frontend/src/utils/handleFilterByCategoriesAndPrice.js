import { store } from "../store";
import { setPlaceholderOfproductsDataCurrentlyRequested } from "../features/productSlice";
import { toast } from "react-toastify";

// FUNCTIONALITY FOR FILTERING BY PRICE
export const priceRangeFn = (productsDataParams, priceRange) => {
  const priceRangeArr = priceRange.split("-");

  if (priceRangeArr[1] === "") {
    let filteredProductsPrice = productsDataParams.filter(
      (productsData) => productsData.price >= Number(priceRangeArr[0])
    );
    return filteredProductsPrice;
  } else {
    let filteredProductsPrice = productsDataParams.filter(
      (productsData) => Number(priceRangeArr[0]) <= productsData.price && productsData.price <= Number(priceRangeArr[1])
    );

    return filteredProductsPrice;
  }
};

export const handleFilterByCategoriesAndPrice = (
  dispatch,
  NoOfProductsPerPage,
  currentPageNo,
  sortedAllProductsData,
  doesTheFnCallNotNeedToast
) => {
  const { priceRange, selectedSubCategoryForFilter, selectedCategory } = store.getState().filterByCategoryAndPrice;

  if (selectedSubCategoryForFilter && priceRange) {
    let filteredProductsCategory = sortedAllProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    !doesTheFnCallNotNeedToast &&
      toast("Categories and price range filter has been applied", {
        type: "success",
      });
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(priceRangeFn(filteredProductsCategory, priceRange)));
  } else if (!selectedSubCategoryForFilter && !priceRange) {
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(sortedAllProductsData));
    !doesTheFnCallNotNeedToast &&
      toast("no filter criterias is selected", {
        type: "info",
        autoClose: 3000,
      });
  } else if (selectedSubCategoryForFilter) {
    let filteredProductsCategory = sortedAllProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    !doesTheFnCallNotNeedToast &&
      toast("Categories filter has been applied", {
        type: "success",
        autoClose: 3000,
      });
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(filteredProductsCategory));
  } else if (priceRange) {
    !doesTheFnCallNotNeedToast &&
      toast("Price range filter has been applied", {
        type: "success",
        autoClose: 3000,
      });
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(priceRangeFn(sortedAllProductsData, priceRange)));
  }
};

//FILTER THE PRODUCTSDATA FROM THE SHALLOW COPY OF THE 'sortedAllProductsData' -THIS IS DONE DUE TO FACT THE 'allProductsData' IS IMMUTABLE WHILE THE FORMER CAN RECEIVE UPDATES FROM THE SORTING FUNCTIONS.IT IS DONE BY CHECKING THE VALUE OF THE 'selectedSubCategoryForFilter && priceRange' AS CRITERIA,FILTERED DATA THEN DISPATCHED INTO THE  'placeholderOfproductsDataCurrentlyRequested' WHICH IN TURN TRIGGERS THE PAGINATION FUNCTION IN THE USEEFFECT IN THE INDEX PAGE
