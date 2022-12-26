export const ProductsNotFound = ({ searchTerm }) => {
  return (
    <h2 className="text-[20px] px-[10%] font-medium text-center">
      Searched term `{searchTerm}` doesnt match any product criteria
    </h2>
  );
};
