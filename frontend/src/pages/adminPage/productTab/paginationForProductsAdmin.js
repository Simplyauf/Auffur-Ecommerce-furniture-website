export const PaginationSectionForProductsAdminPage = ({
  productsLength,
  asyncFnParamState,
  asyncFn,
  setAsyncFnParamState,
}) => {
  const { perPage, pageNo } = asyncFnParamState;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsLength / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-7 mr-[10%] mt-16 mb-24 md:mr-[12%] lg:mr-[15%] gap-4 lg:gap-6">
      <h3 className="self-center">Page no : </h3>
      {pageNumbers.map((number, index) => {
        return (
          <li
            key={index}
            className={`p-1 flex items-center justify-center border-[2px] transition-all duration-500 bg-white text-secondaryColor border-LightSecondaryColor ${
              pageNo === number ? "active-product-page-no" : ""
            } `}
            data-id={number}
            onClick={() => {
              asyncFn({ ...asyncFnParamState, pageNo: number });
              setAsyncFnParamState({ ...asyncFnParamState, pageNo: number });
            }}
          >
            {number}
          </li>
        );
      })}
    </div>
  );
};
