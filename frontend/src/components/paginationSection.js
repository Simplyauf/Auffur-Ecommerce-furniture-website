import { useSelector } from "react-redux";
import { useState } from "react";

export const PaginationSection = ({ setCurrentPageNo, NoOfProductsPerPage, currentPageNo }) => {
  const { placeholderOfproductsDataCurrentlyRequested } = useSelector((state) => state.productsData);

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(placeholderOfproductsDataCurrentlyRequested.length / NoOfProductsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePageNo = (number) => {
    setCurrentPageNo(number);
  };

  return (
    <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-7 mx-[10%] mt-16 mb-24 md:mx-[12%] lg:mx-[15%] gap-4 lg:gap-6">
      <h3 className="self-center">Page no : </h3>
      {pageNumbers.map((number, index) => {
        return (
          <li
            key={index}
            className={`p-3 flex items-center justify-center border-[2px] transition-all duration-500 bg-white text-secondaryColor border-LightSecondaryColor ${
              currentPageNo === number ? "active-product-page-no" : ""
            } `}
            data-id={number}
            onClick={() => handleChangePageNo(number)}
          >
            {number}
          </li>
        );
      })}
    </div>
  );
};
