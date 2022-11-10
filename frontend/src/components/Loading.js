import {useSelector} from "react-redux"

export const Loading = () => {
  const {loadingOrErrorMessage}=useSelector((state)=>state.productsData)
  return (
    <div className="w-[100%] h-[50vh]">
      <div className="flex flex-col items-center flex-wrap gap-[24px] justify-center w-[100%] h-[100%]">
        <div className="flex justify-center items-center  text-[25px] tablet:text-[30px] md:text-[32px] ">
          <h2 className="mr-4 font-NunitoSans font-extrabold">{loadingOrErrorMessage}</h2>
          <div className="flex items-center gap-4 ">
            <span className="preloading-dot "></span>
            <span className="preloading-dot"></span>
            <span className="preloading-dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
