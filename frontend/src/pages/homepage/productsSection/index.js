import { DealOfTheMonth } from "./dealOfTheMonth";
import { HomepageCategoryProducts } from "./homepageCategoryProducts";
import { FeaturedCategories } from "./featuredCategories";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  const [currentlyRequestedCategories, setCurrentlyRequestedCategories] =
    useState([]);
  const categoryContainerRef = useRef();
  const { allProductsData } = useSelector((state) => state.productsData);

  useEffect(() => {
    shuffleArr(featuredProducts);
  }, [allProductsData]);

  const shuffleArr = (Arr) => {
    let slicedShuffledArr = Arr.sort(() => Math.random() - 0.5).slice(0, 10);
    setCurrentlyRequestedCategories(slicedShuffledArr);
  };

  const featuredProducts = allProductsData.filter((products) =>
    products.categories["Featured Categories"].includes("featured")
  );
  const firstOrderDeals = allProductsData.filter((products) =>
    products.categories["Featured Categories"].includes("first order deal")
  );
  const bestDeals = allProductsData.filter((products) =>
    products.categories["Featured Categories"].includes("discounts")
  );

  const categoriesArr = {
    featuredProducts: featuredProducts,
    firstOrderDeals: firstOrderDeals,
    bestDeals: bestDeals,
  };

  const handleCategoryClick = (e) => {
    for (let key in categoriesArr) {
      if (e.target.dataset.id === key) {
        e.target.parentElement.classList.add("homepage-active-category-tab");
        e.target.parentElement.style.order = 1;
        shuffleArr(categoriesArr[key]);

        // order 1 is assigned to the default categoryDom and the other unclicked categoryDom gets order style values from the orderNumbering variable
        let orderNumbering = [0, 2];
        let categoriesDomListArr = Array.from(
          categoryContainerRef.current.children
        );
        let theNonTargetedCategoryDomArr = categoriesDomListArr.filter(
          (elem) => elem !== e.target.parentElement
        );
        theNonTargetedCategoryDomArr.map((elem, i) => {
          elem.classList.remove("homepage-active-category-tab");
          elem.style.order = orderNumbering[i];
          return null;
        });
      }
    }
  };

  return (
    <>
      <h1 className="text-[36px] text-center font-bold">Our shop</h1>
      <div
        className="flex text-[20px] whitespace-nowrap items-center  mx-auto w-[80%] overflow-scroll flex-nowrap gap-6 my-8"
        onClick={(e) => handleCategoryClick(e)}
        ref={categoryContainerRef}
      >
        <div className="cursor-pointer order-1 transition-all ease-in-out duration-[0.25s] homepage-active-category-tab">
          <h2 data-id="featuredProducts" className="text-center ">
            Featured{" "}
          </h2>
          <div className="bg-[#fca311] h-[3px] w-0 "></div>
        </div>
        <div className="cursor-pointer order-2 transition-all ease-in-out duration-[0.25s]">
          <h2 data-id="firstOrderDeals" className="text-center ">
            First order deals
          </h2>
          <div className="bg-[#fca311] h-[3px] w-0"></div>
        </div>
        <div className="cursor-pointer order-0 transition-all ease-in-out duration-[0.25s]">
          <h2 data-id="bestDeals" className="text-center">
            Best Deals
          </h2>
          <div className="bg-[#fca311] h-[3px] w-0"></div>
        </div>
      </div>
      <HomepageCategoryProducts
        currentlyRequestedCategories={currentlyRequestedCategories}
      />
      <FeaturedCategories />
      <DealOfTheMonth />
    </>
  );
};

export default Index;
