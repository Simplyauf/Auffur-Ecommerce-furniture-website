import { setProductsDataForCurrentPage } from "../features/productSlice";

export const handlePaginationProductsPage = (
  dispatch,
  NoOfProductsPerPageNo,
  currentPageNo,
  typeOfproductsDataCurrentlyRequested
) => {
  const indexOfLastPage = NoOfProductsPerPageNo * currentPageNo;
  const indexOfPrevPage = indexOfLastPage - NoOfProductsPerPageNo;
  let currentPageProductsData = typeOfproductsDataCurrentlyRequested.slice(indexOfPrevPage, indexOfLastPage);
  dispatch(setProductsDataForCurrentPage(currentPageProductsData));
};
