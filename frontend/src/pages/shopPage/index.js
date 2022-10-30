import { Header } from "../../components/header";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";
import { SingleProductBox } from "../../components/singleProductBox";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setIsLoading,
  getAllProductsData,
  setPlaceholderOfproductsDataCurrentlyRequested,
  setProductsDataForCurrentPage,
} from "../../features/productSlice";
import FooterSection from "../../components/footerSection";
import { Loading } from "../../components/Loading";
import { PaginationSection } from "./paginationSection";
import { handlePaginationProductsPage } from "../../utils/handlePaginationProductsPage";
import { FilterBySection } from "../../components/filterSection";

const Index = () => {
  const [isFilterBySectionOpen, setIsFilterBySectionOpen] = useState(false);

  const dispatch = useDispatch();
  const { allProductsData, isLoading, placeholderOfproductsDataCurrentlyRequested, productsDataForCurrentPage } =
    useSelector((state) => state.productsData);

  let NoOfProductsPerPage = 10;
  const [currentPageNo, setCurrentPageNo] = useState(1);

  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);

  useEffect(() => {
    handlePaginationProductsPage(dispatch, NoOfProductsPerPage, currentPageNo, allProductsData);
  }, [currentPageNo, NoOfProductsPerPage, allProductsData, dispatch]);

  useEffect(() => {
    dispatch(setPlaceholderOfproductsDataCurrentlyRequested(allProductsData));
  }, [dispatch, allProductsData]);

  return (
    <>
      <Header />
      <h1 className="text-center font-bold text-[40px] my-16">Shop</h1>
      <article className="w-[65%] tablet:w-[40%] md:w-[30%]  laptop:w-[17%] lg:w-[22%] ml-[5%]  mb-12 flex-col flex gap-2">
        <h3 className="text-[18px] font-bold ml-2"> Sort by</h3>
        <div
          className="flex dark:bg-mainElementColor2 bg-mainElementColor justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] cursor-pointer"
          onClick={(e) => {
            e.currentTarget.nextElementSibling.classList.toggle("active-region-container");
          }}
        >
          <h2>sort by default</h2>
          <RiArrowDropDownLine className="w-8 h-8 " />
        </div>
        <div className=" hidden flex-col rounded-md shadow-[0px_2px_32px_-2px_rgba(0,0,0,0.1)] bg-mainElementColor dark:bg-mainElementColor2  py-4  gap-4 z-50 px-[10%] sticky top-0 left-0 right-0 -mb-64  region-lists">
          <li>All</li>
          <li data-id="Africa">Africa</li>
          <li data-id="Americas">America</li>
          <li data-id="Asia">Asia</li>
          <li data-id="Europe">Europe</li>
          <li data-id="Oceania">Oceania</li>
        </div>
      </article>
      <BiFilter
        className="w-16 h-16 bg-[#fca311] shadow-md stroke-[black] fixed right-[7%] bottom-[7%] z-[1000]"
        onClick={() => setIsFilterBySectionOpen(true)}
      />
      <FilterBySection {...{ isFilterBySectionOpen, setIsFilterBySectionOpen, currentPageNo, NoOfProductsPerPage }} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h3 className="text-center font-bold text-[24px]">All</h3>
          <section className="flex w-[80%] mx-auto items-center justify-center gap-14 flex-col mt-20">
            {productsDataForCurrentPage.map((elem, index) => {
              return <SingleProductBox key={index} />;
            })}
          </section>
          <PaginationSection {...{ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }} />
        </>
      )}
      <FooterSection />
    </>
  );
};

export default Index;
