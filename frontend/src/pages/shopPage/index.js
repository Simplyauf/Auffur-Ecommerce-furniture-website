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
import { toast } from "react-toastify";

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
    fetchingError,
  } = useSelector((state) => state.productsData);
  const { priceRange, selectedSubCategoryForFilter, selectedCategory } = useSelector(
    (state) => state.filterByCategoryAndPrice
  );

  let NoOfProductsPerPage = 10;
  const [currentPageNo, setCurrentPageNo] = useState(1);

  //toast message
  useEffect(() => {
    if (!isLoading)
      toast("Products loaded sucessfully", {
        type: "success",
        autoClose: 3000,
      });
    if (fetchingError)
      toast("Products loading failed", {
        type: "error",
        autoClose: 3000,
      });
  }, [fetchingError, isLoading]);

  // HANDLE SORTING WHEN THE APP STARTS AND ALSO WHEN SORTING CRITERIA CHANGES
  useEffect(() => {
    handleSorting(dispatch, sortingCriteria, allProductsData, NoOfProductsPerPage, currentPageNo, location.pathname);
  }, [dispatch, sortingCriteria, allProductsData]);

  // PAGINATES THE DATA WHEN VALUE  placeholderOfproductsDataCurrentlyRequested CHANGES IN THE FILTER FN
  useEffect(() => {
    handlePaginationProductsPage(
      dispatch,
      NoOfProductsPerPage,
      currentPageNo,
      placeholderOfproductsDataCurrentlyRequested
    );
  }, [currentPageNo, NoOfProductsPerPage, placeholderOfproductsDataCurrentlyRequested, dispatch]);

  const handleSortingCriteriaSelection = (e) => {
    if (e.target.dataset.list) {
      setSortingCriteria(e.target.textContent);
      e.currentTarget.classList.remove("active-sorting-lists");
    }
  };

  return (
    <section className="lg:grid lg:grid-cols-[250px_1fr_1fr_1fr] lg:grid-rows-[auto_1fr_auto]">
      <div className="mt-12 tablet:px-[6%] w-[100%] h-[54px] bg-neutralColor text-secondaryColor xl:px-[4%] px-[4%] lg:px-[2%] flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
        <div className="flex gap-[4px] items-center text-base">
          <IoIosArrowBack />
          <li onClick={() => navigate("/")} className="hover:underline capitalize">
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
      <FilterBySection
        {...{
          isFilterBySectionOpen,
          setIsFilterBySectionOpen,
          currentPageNo,
          NoOfProductsPerPage,
        }}
      />
      <div className="lg:col-start-2 lg:col-end-5 lg:row-span-1 lg:ml-[8%] xl:ml-[10%] lg:mr-[3%] xl:mr-[5%]">
        <h1 className="text-center font-bold text-[2.5rem] my-16">Shop</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <article className="w-[65%] tablet:w-[40%] lg:ml-0 lg:w-[30%] md:w-[30%] bg-[#ffffff] laptop:w-[17%]  ml-[4%] tablet:ml-[6%]  mb-12 flex-col flex gap-2">
              <h3 className="text-lg font-bold ml-2"> Sort by</h3>
              <div
                className={`flex justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] cursor-pointer ${
                  sortingCriteria !== "Default: Latest" && "bg-primaryColor text-white"
                }`}
                onClick={(e) => {
                  e.currentTarget.nextElementSibling.classList.toggle("active-sorting-lists");
                }}
              >
                <h2>{sortingCriteria}</h2>
                <RiArrowDropDownLine className="w-8 h-8 " />
              </div>
              <div
                className={`hidden flex-col bg-[#ffffff] rounded-md shadow-[0px_2px_32px_-2px_rgba(0,0,0,0.1)]   py-4  gap-4 z-[200] px-[10%] sticky top-0 left-0 right-0 -mb-64  sorting-lists ${
                  sortingCriteria !== "Default: Latest" && "bg-primaryColor text-white"
                }`}
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
              <article className="w-[300px] max-w-[75%] lg:ml-0  lg:w-[30%]   bg-[#ffffff] laptop:w-[17%]  ml-[4%] tablet:ml-[6%] mb-12 flex-col flex gap-2 ">
                <h3 className="text-lg font-bold ml-2"> Active Filters</h3>
                <div className="flex  justify-between h-14 bg-primaryColor text-white rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[5%] font-medium text-base ">
                  {selectedSubCategoryForFilter && <h3>Sub-Category : {selectedSubCategoryForFilter}</h3>}
                  {priceRange && <h3>priceRange : {priceRange}($)</h3>}
                </div>
              </article>
            )}
            <h1 className="text-center font-bold text-3xl">All</h1>
            <section className="flex lg:w-[100%] w-[92%] mx-auto items-center justify-center gap-[4rem] flex-col mt-20 tablet:justify-between tablet:w-[88%] md:justify-between tablet:flex-row md:flex-row md:flex-wrap md:gap-2 tablet:flex-wrap tablet:gap-2 tablet:gap-y-12 md:gap-y-12">
              {productsDataForCurrentPage.map((productsData, index) => {
                return <SingleProductBox key={index} productsData={productsData} />;
              })}
            </section>
            <PaginationSection {...{ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }} />

            <BiFilter
              className="w-16 lg:hidden h-16 bg-primaryColor shadow-md stroke-secondaryColor fixed right-[7%] bottom-[7%] z-[1000] cursor-pointer"
              onClick={() => setIsFilterBySectionOpen(true)}
            />
          </>
        )}
      </div>
      <FooterSection />
    </section>
  );
};

export default Index;
