import { store } from "../store";
import { setPlaceholderOfproductsDataCurrentlyRequested } from "../features/productSlice";

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
  sortedAllProductsData
) => {
  const { priceRange, selectedSubCategoryForFilter, selectedCategory } = store.getState().filterByCategoryAndPrice;

  console.log(selectedCategory, selectedSubCategoryForFilter);
  if (selectedSubCategoryForFilter && priceRange) {
    let filteredProductsCategory = sortedAllProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(priceRangeFn(filteredProductsCategory, priceRange)));
  } else if (!selectedSubCategoryForFilter && !priceRange) {
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(sortedAllProductsData));
    console.log("no filter parameters is selected");
  } else if (selectedSubCategoryForFilter) {
    let filteredProductsCategory = sortedAllProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(filteredProductsCategory));
  } else if (priceRange) {
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(priceRangeFn(sortedAllProductsData, priceRange)));
  }
};

//FILTER THE PRODUCTSDATA FROM THE SHALLOW COPY OF THE 'sortedAllProductsData' -THIS IS DONE DUE TO FACT THE 'allProductsData' IS IMMUTABLE WHILE THE FORMER CAN RECEIVE UPDATES FROM THE SORTING FUNCTIONS.IT IS DONE BY CHECKING THE VALUE OF THE 'selectedSubCategoryForFilter && priceRange' AS CRITERIA,FILTERED DATA THEN DISPATCHED INTO THE  'placeholderOfproductsDataCurrentlyRequested' WHICH IN TURN TRIGGERS THE PAGINATION FUNCTION IN THE USEEFFECT IN THE INDEX PAGE
