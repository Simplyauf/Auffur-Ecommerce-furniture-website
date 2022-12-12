import { useSelector } from "react-redux";
import { useState } from "react";

export const PaginationSection = ({
  setCurrentPageNo,
  NoOfProductsPerPage,
  currentPageNo,
}) => {
  const { placeholderOfproductsDataCurrentlyRequested } = useSelector(
    (state) => state.productsData
  );

  let pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      placeholderOfproductsDataCurrentlyRequested.length / NoOfProductsPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleChangePageNo = (number) => {
    setCurrentPageNo(number);
  };

  return (
    <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-10 mx-[10%] my-16 md:mx-[12%] lg:mx-[15%] gap-4 lg:gap-6">
      {pageNumbers.map((number, index) => {
        return (
          <li
            key={index}
            className={`pagination-lists ${
              currentPageNo === number ? "active-pagination-lists" : ""
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
