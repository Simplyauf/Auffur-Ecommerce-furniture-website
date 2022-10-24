import { setProductsDataForCurrentPage } from "../features/productSlice";

export const handlePaginationProductsPage = (
  dispatch,
  NoOfProductsPerPageNo,
  currentPageNo,
  placeholderOfproductsDataCurrentlyRequested
) => {
  const indexOfLastPage = NoOfProductsPerPageNo * currentPageNo;
  const indexOfPrevPage = indexOfLastPage - NoOfProductsPerPageNo;
  let currentPageProductsData = placeholderOfproductsDataCurrentlyRequested.slice(indexOfPrevPage, indexOfLastPage);
  dispatch(setProductsDataForCurrentPage(currentPageProductsData));
};
