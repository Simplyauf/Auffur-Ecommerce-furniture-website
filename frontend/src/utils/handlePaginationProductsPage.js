import {
  setProductsDataForCurrentPage,
  setPlaceholderOfproductsDataCurrentlyRequested,
} from "../features/productSlice";

export const handlePaginationProductsPage = (dispatch, NoOfProductsPerPageNo, currentPageNo, productsData) => {
  const indexOfLastPage = NoOfProductsPerPageNo * currentPageNo;
  const indexOfPrevPage = indexOfLastPage - NoOfProductsPerPageNo;
  console.log(productsData);
  dispatch(setPlaceholderOfproductsDataCurrentlyRequested(productsData));
  let currentPageProductsData = productsData.slice(indexOfPrevPage, indexOfLastPage);
  dispatch(setProductsDataForCurrentPage(currentPageProductsData));
};
