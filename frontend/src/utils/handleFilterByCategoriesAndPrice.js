import { handlePaginationProductsPage } from "./handlePaginationProductsPage";

// FUNCTIONALITY FOR FILTERING BY PRICE
const priceRangeFn = (productsDataParams, priceRange) => {
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
  priceRange,
  selectedSubCategoryForFilter,
  selectedCategory,
  NoOfProductsPerPage,
  currentPageNo,
  allProductsData
) => {
  if (selectedSubCategoryForFilter && priceRange) {
    let filteredProductsCategory = allProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    console.log(filteredProductsCategory);
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      priceRangeFn(filteredProductsCategory, priceRange)
    );
  } else if (!selectedSubCategoryForFilter && !priceRange) {
    console.log("no filter parameters is selected");
  } else if (selectedSubCategoryForFilter) {
    let filteredProductsCategory = allProductsData.filter((productsData) =>
      productsData.categories[selectedCategory].includes(selectedSubCategoryForFilter)
    );
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, filteredProductsCategory);
  } else if (priceRange) {
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      priceRangeFn(allProductsData, priceRange)
    );
  }
};
