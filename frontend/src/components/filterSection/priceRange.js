import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import { setPriceRange } from "../../features/filterBySlice";
import { useDispatch } from "react-redux";

export const PriceRange = ({ setCheckedPriceRangeDOM }) => {
  const [isPriceSectionOpen, setIsPriceSectionOpen] = useState(false);

  const dispatch = useDispatch();

  // LOOP THROUGH THE DESCENDANTS WHILE SKIPPING THE EVENT TARGET AND GET THE CHECKBOXES DOM
  const handleCheckedPrice = (e) => {
    const descendants = e.currentTarget.getElementsByTagName("*");
    for (let i = 0; i < descendants.length; i++) {
      if (descendants[i] === e.target) {
        continue;
      }
      descendants[i].checked = false;
    }

    if (e.target.checked) {
      dispatch(setPriceRange(e.target.value));
      setCheckedPriceRangeDOM(e.target);
    } else {
      dispatch(setPriceRange(e.target.value));
    }
  };

  return (
    <article className="flex flex-col gap-4 w-[100%] mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-bold">Price</h3>
        {isPriceSectionOpen ? (
          <RiArrowDropUpLine
            className=" w-8 h-6 cursor-pointer"
            onClick={() => setIsPriceSectionOpen(!isPriceSectionOpen)}
          />
        ) : (
          <RiArrowDropDownLine
            className="w-8 h-6 cursor-pointer"
            onClick={() => setIsPriceSectionOpen(!isPriceSectionOpen)}
          />
        )}
      </div>
      {isPriceSectionOpen && (
        <div
          className="flex flex-col gap-[6px] mt-4 text-[16px]"
          onChange={(e) => handleCheckedPrice(e)}
        >
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="priceRange" value="1-10" id="1-10" />
            <label
              htmlFor="1-10"
              className="flex gap-[1px] items-center cursor-pointer"
            >
              <span>$1</span>
              <span>-</span> <span>$10</span>
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="priceRange"
              value="11-100"
              id="11-100"
            />
            <label
              htmlFor="11-100"
              className="flex gap-[1px] items-center cursor-pointer"
            >
              <span>$11</span>
              <span>-</span> <span>$100</span>
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="priceRange"
              value="101-250"
              id="101-250"
            />
            <label
              htmlFor="101-250"
              className="flex gap-[1px] items-center cursor-pointer"
            >
              <span>$101</span>
              <span>-</span> <span>$250</span>
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="priceRange" value="251-" id="251-" />
            <label
              htmlFor="251-"
              className="flex gap-[1px] items-center cursor-pointer"
            >
              <span>$251</span>
              <span>+</span>
            </label>
          </div>
        </div>
      )}
    </article>
  );
};
