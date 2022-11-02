import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceRange, setSelectedCategory, setSelectedSubCategoryForFilter } from "../../features/filterBySlice";
import CategoriesSection from "./CategorySection";
import { PriceRange } from "./priceRange";
import { handleFilterByCategoriesAndPrice } from "../../utils/handleFilterByCategoriesAndPrice";
import { handlePaginationProductsPage } from "../../utils/handlePaginationProductsPage";
import { useEffect } from "react";

export const FilterBySection = ({
  isFilterBySectionOpen,
  setIsFilterBySectionOpen,
  currentPageNo,
  NoOfProductsPerPage,
}) => {
  const dispatch = useDispatch();
  const { sortedAllProductsData } = useSelector((state) => state.productsData);

  useEffect(() => {
    handleFilterByCategoriesAndPrice(dispatch, NoOfProductsPerPage, currentPageNo, sortedAllProductsData);
  }, [sortedAllProductsData]);

  // DOMS OF THE CHECKED ELEM FOR UNCHECKING DURING RESET
  const [checkedCategoryDOM, setCheckedCategoryDOM] = useState(null);
  const [checkedPriceRangeDOM, setCheckedPriceRangeDOM] = useState(null);

  const resetFilter = (checkedCategory, checkedPriceRange) => {
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedSubCategoryForFilter(null));
    dispatch(setPriceRange(null));
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, sortedAllProductsData);
    if (checkedCategory) {
      checkedCategory.checked = false;
    }
    if (checkedPriceRange) {
      checkedPriceRange.checked = false;
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 w-[100%] h-[1000px] z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%]  ${
        isFilterBySectionOpen && "translate-x-[0%]"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start px-[5%] w-[80%] right-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-[18px] h-[100%]">
        <h2 className=" self-center text-[22px] border-b-2 pb-2">Filter by</h2>
        <IoCloseOutline
          className="absolute top-6 right-6 w-9 h-9 cursor-pointer"
          onClick={() => setIsFilterBySectionOpen(false)}
        />
        <div className="w-[100%]">
          <CategoriesSection {...{ setCheckedCategoryDOM }} />
          <PriceRange {...{ setCheckedPriceRangeDOM }} />
        </div>
        <div className="flex items-center justify-between w-[100%] gap-[10%] ">
          <button
            className="h-[45px] basis-[40%] bg-[#fca311] text-white"
            onClick={() => {
              handleFilterByCategoriesAndPrice(dispatch, NoOfProductsPerPage, currentPageNo, sortedAllProductsData);
              setIsFilterBySectionOpen(false);
            }}
          >
            Filter
          </button>
          <button
            className="h-[45px] basis-[60%] bg-transparent border-[1px] border-[#14213d] text-black"
            onClick={(e) => {
              resetFilter(checkedCategoryDOM, checkedPriceRangeDOM);
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
