import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

export const ProductDetailsModal = ({
  isProductDetailsModalOn,
  setIsProductDetailsModalOn,
  productDetails,
  isFetchingUpdatedDataLoading,
}) => {
  const { image, title, price, stock, categories, discountPercentValue } = productDetails;

  //loop through and get the sub categories arr so it can be displayed as part of the details
  let subCategoriesArr = [];

  for (let key in categories) {
    if (categories[key].length > 0) subCategoriesArr.push(...categories[key]);
  }

  return (
    <>
      {" "}
      {isFetchingUpdatedDataLoading && <FullpageSpinnerLoader />}
      <div
        class={`fixed top-[30%] sm:top-0 inset-x-0 h-[100vh] px-4 pb-4 sm:inset-0  sm:items-center sm:justify-center z-[3000]  ${
          isProductDetailsModalOn ? "sm:flex  block" : "hidden"
        }`}
      >
        <div class="fixed inset-0 transition-opacity flex justify-center items-center">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div class=" bg-white w-[90%] tablet:w-[90%] max-w-[400px] p-6 rounded-lg shadow-lg flex flex-col items-center relative">
            <AiOutlineClose
              className="w-8 h-8 fill-primaryColor absolute right-5 cursor-pointer top-5"
              onClick={() => setIsProductDetailsModalOn(false)}
            />
            <div className="h-48 my-8 w-[100%] ">
              <img src={image} class="w-full  max-h-full h-auto object-contain " alt="Product" />
            </div>
            <div className="flex flex-col items-center mb-4">
              <h4 class=" mb-2">Product Title</h4> <span className=" text-lg font-bold capitalize">{title}</span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h4 class=" ">Price</h4> <span className=" text-lg font-bold">{price} USD</span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <h4 class=" ">sub-categories</h4>{" "}
              <span className=" text-lg font-bold text-center">
                {" "}
                {subCategoriesArr.map((categories) => categories).join(", ")}
              </span>
            </div>
            <h4 class="  text-lg font-bold mb-4">{stock} in Stock</h4>
            {discountPercentValue > 0 && (
              <div className="flex flex-col items-center mb-4">
                <h4 class=" ">Discount percent</h4> <span className=" text-lg font-bold">-{discountPercentValue}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
