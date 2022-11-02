import { handlePaginationProductsPage } from "./handlePaginationProductsPage";
import { store } from "../store";

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
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      priceRangeFn(filteredProductsCategory, priceRange)
    );
  } else if (!selectedSubCategoryForFilter && !priceRange) {
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, sortedAllProductsData);
    console.log("no filter parameters is selected");
  } else if (selectedSubCategoryForFilter) {
    let filteredProductsCategory = sortedAllProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, filteredProductsCategory);
  } else if (priceRange) {
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      priceRangeFn(sortedAllProductsData, priceRange)
    );
  }
};

//FILTER THE PRODUCTSDATA FROM THE SHALLOW COPY OF THE 'sortedAllProductsData' -THIS IS DONE DUE TO FACT THE 'allProductsData' IS IMMUTABLE WHILE THE CAN RECEEIVE UPDATES FROM THE SORTING FUNCTIONS.IT IS DONE BY CHECKING THE VALUE OF THE 'selectedSubCategoryForFilter && priceRange',FILTERED DATA ARE ALSO PAGINATED
