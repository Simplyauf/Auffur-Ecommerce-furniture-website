import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoriesSection from "./CategorySection";
import { PriceRange } from "./priceRange";
import { handleFilterByCategoriesAndPrice } from "../../utils/handleFilterByCategoriesAndPrice";
import { handlePaginationProductsPage } from "../../utils/handlePaginationProductsPage";

export const FilterBySection = ({
  isFilterBySectionOpen,
  setIsFilterBySectionOpen,
  currentPageNo,
  NoOfProductsPerPage,
}) => {
  const dispatch = useDispatch();
  const { allProductsData } = useSelector((state) => state.productsData);

  const [selectedSubCategoryForFilter, setSelectedSubCategoryForFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  // DOMS OF THE CHECKED ELEM FOR UNCHECKING DURING RESET
  const [checkedCategoryDOM, setCheckedCategoryDOM] = useState(null);
  const [checkedPriceRangeDOM, setCheckedPriceRangeDOM] = useState(null);

  // GET SELECTED CHECKED CATEGORY DETAILS FROM THE CHILD COMPONENT
  const getSelectedCategoryDetailsCallbackFN = (CategoryValue, SubCategoryForFilterValue, checkedCategory) => {
    setSelectedCategory(CategoryValue);
    setSelectedSubCategoryForFilter(SubCategoryForFilterValue);
    setCheckedCategoryDOM(checkedCategory);
  };

  const resetFilter = (checkedCategory, checkedPriceRange) => {
    setSelectedCategory(null);
    setSelectedSubCategoryForFilter(null);
    setPriceRange(null);
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, allProductsData);
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
          <CategoriesSection {...{ getSelectedCategoryDetailsCallbackFN }} />
          <PriceRange {...{ setPriceRange, setCheckedPriceRangeDOM }} />
        </div>
        <div className="flex items-center justify-between w-[100%] gap-[10%] ">
          <button
            className="h-[45px] basis-[40%] bg-[#fca311] text-white"
            onClick={() => {
              handleFilterByCategoriesAndPrice(
                dispatch,
                priceRange,
                selectedSubCategoryForFilter,
                selectedCategory,
                NoOfProductsPerPage,
                currentPageNo,
                allProductsData
              );
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
