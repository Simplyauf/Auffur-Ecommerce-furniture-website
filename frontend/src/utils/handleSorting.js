import { setSortedAllProductsData } from "../features/productSlice";

export const handleSorting = (dispatch, sortingCriteria, allProductsData, NoOfProductsPerPage, currentPageNo) => {
  switch (sortingCriteria) {
    case "Default: Latest":
      {
        let sortedArr = [...allProductsData].sort((a, z) => a.updatedAt.localeCompare(z.updatedAt));
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    case "Oldest":
      {
        let sortedArr = [...allProductsData].sort((a, z) => z.updatedAt.localeCompare(a.updatedAt));
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    case "Name: A-Z":
      {
        let sortedArr = [...allProductsData].sort((a, z) => {
          let A = a.title.toUpperCase();
          let Z = z.title.toUpperCase();
          if (A > Z) {
            return 1;
          }
          if (A < Z) {
            return -1;
          }
          return 0;
        });
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    case "Name: Z-A":
      {
        let sortedArr = [...allProductsData].sort((a, z) => {
          let A = a.title.toUpperCase();
          let Z = z.title.toUpperCase();
          if (A > Z) {
            return -1;
          }
          if (A < Z) {
            return 1;
          }
          return 0;
        });
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    case "Price: low to high":
      {
        let sortedArr = [...allProductsData].sort((a, z) => a.price - z.price);
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    case "Price: high to low":
      {
        let sortedArr = [...allProductsData].sort((a, z) => z.price - a.price);
        dispatch(setSortedAllProductsData(sortedArr));
      }
      break;
    default:
      console.log("Default");
      break;
  }
};

// SORT THE 'ALLPRODUCTDATA' AT THE START OF THE APP AND ON CHANGE OF THE 'SORTINGCRITERIA' AND DISPATCH THE SORTED ARRAY INTO THE 'SORTEDALLPRODUCT'
