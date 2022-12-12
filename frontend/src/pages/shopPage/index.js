import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";
import { SingleProductBox } from "../../components/singleProductBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FooterSection from "../../components/footerSection";
import { Loading } from "../../components/Loading";
import { PaginationSection } from "../../components/paginationSection";
import { handlePaginationProductsPage } from "../../utils/handlePaginationProductsPage";
import { FilterBySection } from "../../components/filterSection";
import { handleSorting } from "../../utils/handleSorting";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const [sortingCriteria, setSortingCriteria] = useState("Default: Latest");
  const [isFilterBySectionOpen, setIsFilterBySectionOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    allProductsData,
    isLoading,
    placeholderOfproductsDataCurrentlyRequested,
    productsDataForCurrentPage,
  } = useSelector((state) => state.productsData);
  const { priceRange, selectedSubCategoryForFilter, selectedCategory } =
    useSelector((state) => state.filterByCategoryAndPrice);

  let NoOfProductsPerPage = 10;
  const [currentPageNo, setCurrentPageNo] = useState(1);

  // HANDLE SORTING WHEN THE APP STARTS AND ALSO WHEN SORTING CRITERIA CHANGES
  useEffect(() => {
    handleSorting(
      dispatch,
      sortingCriteria,
      allProductsData,
      NoOfProductsPerPage,
      currentPageNo,
      location.pathname
    );
  }, [dispatch, sortingCriteria, allProductsData]);

  // PAGINATES THE DATA WHEN VALUE  placeholderOfproductsDataCurrentlyRequested CHANGES IN THE FILTER FN
  useEffect(() => {
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      placeholderOfproductsDataCurrentlyRequested
    );
  }, [
    currentPageNo,
    NoOfProductsPerPage,
    placeholderOfproductsDataCurrentlyRequested,
    dispatch,
  ]);

  const handleSortingCriteriaSelection = (e) => {
    if (e.target.dataset.list) {
      setSortingCriteria(e.target.textContent);
      e.currentTarget.classList.remove("active-sorting-lists");
    }
  };

  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-[#e5e5e5] text-[#14213d] pl-[3%] flex items-center justify-between font-bold  font-RobotoCondensed">
        <div className="flex gap-[4px] items-center text-[15px]">
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/")}
            className="hover:underline capitalize"
          >
            Home
          </li>
          <IoIosArrowBack />
          <span>Shop</span>
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
      <h1 className="text-center font-bold text-[40px] my-16">Shop</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <article className="w-[65%] tablet:w-[40%] md:w-[30%] bg-[#ffffff] laptop:w-[17%] lg:w-[22%] ml-[5%]  mb-12 flex-col flex gap-2">
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
            <article className="w-[75%] tablet:w-[40%] md:w-[30%] bg-[#ffffff] laptop:w-[17%] lg:w-[22%] ml-[5%]  mb-12 flex-col flex gap-2 mb-12">
              <h3 className="text-[18px] font-bold ml-2"> Active Filters</h3>
              <div className="flex dark:bg-mainElementColor2 bg-mainElementColor justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] text-[15px] ">
                {selectedSubCategoryForFilter && (
                  <h3>Sub-Category : {selectedSubCategoryForFilter}</h3>
                )}
                {priceRange && <h3>priceRange : {priceRange}($)</h3>}
              </div>
            </article>
          )}
          <h3 className="text-center font-bold text-[24px]">All</h3>
          <section className="flex w-[92%] mx-auto items-center justify-center gap-[4rem] flex-col mt-20">
            {productsDataForCurrentPage.map((productsData, index) => {
              return (
                <SingleProductBox key={index} productsData={productsData} />
              );
            })}
          </section>
          <PaginationSection
            {...{ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }}
          />

          <BiFilter
            className="w-16 h-16 bg-[#fca311] shadow-md stroke-[black] fixed right-[7%] bottom-[7%] z-[1000] cursor-pointer"
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

export default Index;
