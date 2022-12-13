import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";
import { SingleProductBox } from "../../components/singleProductBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSearchedProductData } from "../../features/productSlice";
import { ProductsNotFound } from "./productsNotFound";
import FooterSection from "../../components/footerSection";
import { PaginationSection } from "../../components/paginationSection";
import { handlePaginationProductsPage } from "../../utils/handlePaginationProductsPage";
import { FilterBySection } from "../../components/filterSection";
import { handleSorting } from "../../utils/handleSorting";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const SearchPage = () => {
  // SEE THE SHP INDEX PAGE,THE UTILS AND THE FEATURES SLICE COMMENTS FOR HOW THE APP FUNCTIONALITIES WORKS
  const [isFilterBySectionOpen, setIsFilterBySectionOpen] = useState(false);
  const [sortingCriteria, setSortingCriteria] = useState("Default: Latest");

  const dispatch = useDispatch();
  const {
    allProductsData,
    placeholderOfproductsDataCurrentlyRequested,
    productsDataForCurrentPage,
    searchedProductData,
  } = useSelector((state) => state.productsData);
  const { priceRange, selectedSubCategoryForFilter, selectedCategory } =
    useSelector((state) => state.filterByCategoryAndPrice);

  const navigate = useNavigate();
  let location = useLocation();

  const locationArr = location.search.split("=");
  const prevPage =
    location.state === "/" || location.state === "/search"
      ? "home"
      : location.state?.replace("/", "");
  const searchValue = locationArr[1]?.toUpperCase()?.trim();

  let NoOfProductsPerPage = 10;
  const [currentPageNo, setCurrentPageNo] = useState(1);

  // DIRECTLY ACESSING THE SEARCH PAGE TRIGGERS REDIRECTION TO HOMEPAGE
  useEffect(() => {
    !prevPage && navigate("/");
  }, []);

  // HANDLE SORTING WHEN THE APP STARTS AND ALSO WHEN SORTING CRITERIA CHANGES
  useEffect(() => {
    let SearchedProductData = allProductsData.filter((product) => {
      return product.title.toUpperCase().trim().includes(searchValue);
    });
    dispatch(setSearchedProductData(SearchedProductData));
    handleSorting(
      dispatch,
      sortingCriteria,
      SearchedProductData,
      NoOfProductsPerPage,
      currentPageNo,
      location.pathname
    );
  }, [dispatch, sortingCriteria, allProductsData, searchValue]);

  useEffect(() => {
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      placeholderOfproductsDataCurrentlyRequested
    );
  }, [
    dispatch,
    NoOfProductsPerPage,
    currentPageNo,
    placeholderOfproductsDataCurrentlyRequested,
  ]);

  const handleSortingCriteriaSelection = (e) => {
    if (e.target.dataset.list) {
      setSortingCriteria(e.target.textContent);
      e.currentTarget.classList.remove("active-sorting-lists");
    }
  };

  // FOR THE 'back' BTN NAVIGATION
  const navigateToPrevPage = () => {
    if (prevPage === "home") {
      navigate("/");
    }
    if (prevPage === "shop") {
      navigate("/shop");
    }
  };

  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor pl-[3%] flex items-center justify-between font-bold  font-RobotoCondensed">
        <div className="flex gap-[4px] items-center text-[15px]">
          <IoIosArrowBack />
          <li
            onClick={() => navigateToPrevPage()}
            className="hover:underline capitalize"
          >
            {prevPage}
          </li>
          <IoIosArrowBack />
          <span>Search results</span>
          {selectedSubCategoryForFilter && (
            <>
              {" "}
              <IoIosArrowBack />
              <span>{selectedCategory}</span> <IoIosArrowBack />
              <span>{selectedSubCategoryForFilter}</span>
            </>
          )}
        </div>
      </div>
      <h3 className="text-center font-bold text-[24px] my-16 px-[10%]">
        Showing search results for the term : "{locationArr[1]}"
      </h3>
      {searchedProductData.length < 1 ? (
        <ProductsNotFound searchTerm={searchValue} />
      ) : (
        <>
          <article className="w-[65%] tablet:w-[40%] md:w-[30%] bg-[#ffffff] laptop:w-[17%] lg:w-[22%] ml-[5%] mb-12 flex-col flex gap-2">
            <h3 className="text-[18px] font-bold ml-2"> Sort by</h3>
            <div
              className="flex dark:bg-mainElementColor2 bg-mainElementColor justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] cursor-pointer"
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle(
                  "active-sorting-lists"
                );
              }}
            >
              <h2>{sortingCriteria}</h2>
              <RiArrowDropDownLine className="w-8 h-8 " />
            </div>
            <div
              className=" hidden flex-col bg-[#ffffff] rounded-md shadow-[0px_2px_32px_-2px_rgba(0,0,0,0.1)] bg-mainElementColor dark:bg-mainElementColor2  py-4  gap-4 z-[200] px-[10%] sticky top-0 left-0 right-0 -mb-64  sorting-lists"
              onClick={(e) => handleSortingCriteriaSelection(e)}
            >
              <li data-list="sorting-criteria">Default: Latest</li>
              <li data-list="sorting-criteria">Name: A-Z</li>
              <li data-list="sorting-criteria">Name: Z-A</li>
              <li data-list="sorting-criteria">Price: low to high</li>
              <li data-list="sorting-criteria">Price: high to low</li>
              <li data-list="sorting-criteria">Oldest</li>
            </div>
          </article>
          {(selectedSubCategoryForFilter || priceRange) && (
            <article className="w-[75%] tablet:w-[40%] md:w-[30%] bg-[#ffffff] laptop:w-[17%] lg:w-[22%] ml-[5%]  mb-12 flex-col flex gap-2 ">
              <h3 className="text-[18px] font-bold ml-2"> Active Filters</h3>
              <div className="flex dark:bg-mainElementColor2 bg-mainElementColor justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] text-[15px] ">
                {selectedSubCategoryForFilter && (
                  <h3>Sub-Category : {selectedSubCategoryForFilter}</h3>
                )}
                {priceRange && <h3>priceRange : {priceRange}($)</h3>}
              </div>
            </article>
          )}
          <section className="flex w-[92%] mx-auto items-center justify-center gap-[4rem] flex-col mt-16">
            {productsDataForCurrentPage.map((elem, index) => {
              return <SingleProductBox key={index} productsData={elem} />;
            })}
          </section>
          <PaginationSection
            {...{ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }}
          />
          <BiFilter
            className="w-16 h-16 bg-primaryColor shadow-md stroke-secondaryColor fixed right-[7%] bottom-[7%] z-[1000]"
            onClick={() => setIsFilterBySectionOpen(true)}
          />
          <FilterBySection
            {...{
              isFilterBySectionOpen,
              setIsFilterBySectionOpen,
              currentPageNo,
              NoOfProductsPerPage,
            }}
          />
        </>
      )}
      <FooterSection />
    </>
  );
};
