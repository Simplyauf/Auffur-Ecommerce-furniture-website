import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export const CategoryLists = ({ categoryTitle, productCategories }) => {
  const [isCategoryTitleOpen, setIsCategoryTitleOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-[rgba(20,33,61,0.3)] pb-2">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] capitalize">{categoryTitle}</h3>
        {isCategoryTitleOpen ? (
          <RiArrowDropUpLine
            className=" w-8 h-6 cursor-pointer"
            onClick={() => setIsCategoryTitleOpen(!isCategoryTitleOpen)}
          />
        ) : (
          <RiArrowDropDownLine
            className="w-8 h-6 cursor-pointer"
            onClick={() => setIsCategoryTitleOpen(!isCategoryTitleOpen)}
          />
        )}
      </div>
      {isCategoryTitleOpen && (
        <div className="flex flex-col gap-[6px] mt-4">
          {productCategories[categoryTitle].map((subCategoryTitle, index) => {
            return (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="selectedCategoryTitle"
                  value={subCategoryTitle}
                  id={subCategoryTitle}
                />
                <label htmlFor={subCategoryTitle}>
                  <h4 className="text-[16px] cursor-pointer">
                    {subCategoryTitle}
                  </h4>
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
