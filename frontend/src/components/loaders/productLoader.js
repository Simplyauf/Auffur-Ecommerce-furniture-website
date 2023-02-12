import { useSelector } from "react-redux";

export const ProductLoader = () => {
  const { loadingOrErrorMessage, fetchingError } = useSelector((state) => state.productsData);

  return (
    <div className="w-[100%] h-[50vh]">
      <div className="flex flex-col items-center flex-wrap gap-[24px] justify-center w-[100%] h-[100%]">
        <div className="flex justify-center items-center  text-[32px] tablet:text-[36px] md:text-[40px] gap-4 px-[5%]">
          <h2 className="mr-4 text-primaryColor font-bold leading-[130%]">{loadingOrErrorMessage}</h2>

          {fetchingError ? (
            ""
          ) : (
            <div className="flex items-center gap-4 ">
              <svg
                className="loader ease-linear rounded-full border-8 border-t-primaryColor border-t-8 border-gray-200  h-16 w-16 ..."
                viewBox="0 0 24 24"
              ></svg>
              <svg
                className="loader ease-linear rounded-full border-8 border-t-primaryColor border-t-8 border-gray-200  h-16 w-16 ..."
                viewBox="0 0 24 24"
              ></svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
