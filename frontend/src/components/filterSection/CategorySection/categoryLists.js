import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export const CategoryLists = ({ categoryTitle, productCategories }) => {
  const [isCategoryTitleOpen, setIsCategoryTitleOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-LightSecondaryColor pb-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium tablet:text-xl md:text-xl capitalize">{categoryTitle}</h3>
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
        <div className="flex flex-col gap-2 tablet:gap-3 md:gap-3 mt-4">
          {productCategories[categoryTitle].map((subCategoryTitle, index) => {
            return (
              <div key={index} className="flex gap-2 tablet:gap-3 md:gap-3 items-center">
                <input type="checkbox" name="selectedCategoryTitle" value={subCategoryTitle} id={subCategoryTitle} />
                <label htmlFor={subCategoryTitle}>
                  <h4 className="text-base tablet:text-lg md:text-lg cursor-pointer font-normal">{subCategoryTitle}</h4>
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
