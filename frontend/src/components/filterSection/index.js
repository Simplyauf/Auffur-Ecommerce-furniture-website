import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoriesSection from "./CategorySection";
import { PriceRange } from "./priceRange";
import { handleFilterByCategoriesAndPrice } from "../../utils/handleFilterByCategoriesAndPrice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resetFilter } from "../../utils/resetFilter";

export const FilterBySection = ({
  isFilterBySectionOpen,
  setIsFilterBySectionOpen,
  currentPageNo,
  NoOfProductsPerPage,
}) => {
  // DOMS OF THE CHECKED ELEM FOR UNCHECKING DURING RESET
  const [checkedCategoryDOM, setCheckedCategoryDOM] = useState(null);
  const [checkedPriceRangeDOM, setCheckedPriceRangeDOM] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();

  const { sortedAllProductsData, sortedSearchedProductData } = useSelector(
    (state) => state.productsData
  );

  // RESET FILTERS WHEN LOCATION URL CHANGES
  useEffect(() => {
    resetFilter(checkedCategoryDOM, checkedPriceRangeDOM, location, dispatch);
  }, [location.pathname]);

  // Filter in the shop page is from the sortedAllProductsData while the one in the searchpage is from sortedSearchedProductsData
  useEffect(() => {
    if (location.pathname === "/shop") {
      handleFilterByCategoriesAndPrice(
        dispatch,
        NoOfProductsPerPage,
        currentPageNo,
        sortedAllProductsData
      );
    }
  }, [location.pathname, sortedAllProductsData]);

  useEffect(() => {
    if (location.pathname === "/search") {
      handleFilterByCategoriesAndPrice(
        dispatch,
        NoOfProductsPerPage,
        currentPageNo,
        sortedSearchedProductData
      );
    }
  }, [location.pathname, sortedSearchedProductData]);

  return (
    <div
      className={`absolute top-0 left-0 w-[100%] h-[1000px] z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%]  ${
        isFilterBySectionOpen && "translate-x-[0%]"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start px-[5%] w-[80%] right-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-[18px] h-[100%]">
        <h2 className="text-center w-[100%] text-[28px] font-bold border-b-[2px] border-LightSecondaryColor pb-2">
          Filter by
        </h2>
        <IoCloseOutline
          className="absolute top-5 right-4 w-9 h-9 cursor-pointer"
          onClick={() => setIsFilterBySectionOpen(false)}
        />
        <div className="w-[100%]">
          <CategoriesSection {...{ setCheckedCategoryDOM }} />
          <PriceRange {...{ setCheckedPriceRangeDOM }} />
        </div>
        <div className="flex items-center justify-between w-[100%] gap-[10%] ">
          <button
            className="h-[45px] basis-[40%] bg-primaryColor text-white"
            onClick={() => {
              location.pathname === "/shop" &&
                handleFilterByCategoriesAndPrice(
                  dispatch,
                  NoOfProductsPerPage,
                  currentPageNo,
                  sortedAllProductsData
                );
              location.pathname === "/search" &&
                handleFilterByCategoriesAndPrice(
                  dispatch,
                  NoOfProductsPerPage,
                  currentPageNo,
                  sortedSearchedProductData
                );
              setIsFilterBySectionOpen(false);
            }}
          >
            Filter
          </button>
          <button
            className="h-[45px] basis-[60%] bg-transparent border-[1px] border-secondaryColor text-black"
            onClick={(e) => {
              resetFilter(
                checkedCategoryDOM,
                checkedPriceRangeDOM,
                location,
                dispatch
              );
              setIsFilterBySectionOpen(false);
            }}
          >
            Reset Filter
          </button>
        </div>
      </section>
    </div>
  );
};
