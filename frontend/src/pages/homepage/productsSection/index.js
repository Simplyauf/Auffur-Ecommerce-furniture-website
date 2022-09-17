import { DealOfTheMonth } from "./dealOfTheMonth";
import { ProductCategories } from "./productCategories";
import { FeaturedCategories } from "./featuredCategories";

const Index = () => {
  return (
    <>
      <h1 className="text-[36px] text-center font-bold">Our shop</h1>
      <div className="flex text-[20px] justify-center items-center gap-6 my-8">
        <div>
          <h2 className="text-center ">Trending </h2>
          <div className="bg-[#fca311] h-[3px] w-[100%]"></div>
        </div>
        <div>
          <h2 className="text-center ">New arrivals</h2>
          <div className="bg-[#fca311] h-[3px] w-0"></div>
        </div>
        <div>
          <h2 className="text-center ">Featured</h2>
          <div className="bg-[#fca311] h-[3px] w-0"></div>
        </div>
      </div>
      <ProductCategories />
      <FeaturedCategories />
      <DealOfTheMonth />
    </>
  );
};

export default Index;
