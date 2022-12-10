import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import FooterSection from "../components/footerSection";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handleCartModification } from "../utils/handleCartModification";
import { handleWishlistModification } from "../utils/handleWishlistModification";
import {
  isProductInCartFn,
  isProductInWishlistFn,
} from "../utils/isSpecificProductInCartAndWishlist.js";

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allProductsData } = useSelector((state) => state.productsData);
  const { wishlist, cart } = useSelector(
    (state) => state.wishlistAndCartSection
  );
  const [productQuantityInCart, setProductQuantityInCart] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const { productId } = useParams();
  const currentProduct = allProductsData.find(
    (product) => product._id === productId
  );
  const { _id, title, price, image, discountPercentValue, categories, stock } =
    currentProduct;

  //loop through and get the sub categories arr
  let subCategoriesArr = [];
  for (let key in categories) {
    if (categories[key].length > 0) subCategoriesArr.push(...categories[key]);
  }

  const handleAddToCartFn = () => {
    if (productQuantityInCart < 1) {
      alert("product cant be less than 1");
    }
    handleCartModification(_id, dispatch, productQuantityInCart);
  };

  // Checks if a the current product can be found in the wishlist and cart so as to be able to display the states in the ui
  useEffect(() => {
    isProductInWishlistFn(_id, setIsWishlisted, wishlist);
  }, [wishlist]);

  useEffect(() => {
    isProductInCartFn(_id, setIsProductInCart, cart);
  }, [cart]);

  let discountedPrice = price - (price * discountPercentValue) / 100;
  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-[#e5e5e5] text-[#14213d] pl-[3%] flex items-center justify-between font-bold  font-RobotoCondensed">
        <div className="flex gap-[4px] items-center text-[15px]">
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/")}
            className="hover:underline capitalize"
          >
            Home
          </li>
          <IoIosArrowBack />
          <li
            onClick={() => navigate("/Shop")}
            className="hover:underline capitalize"
          >
            Shop
          </li>
          <IoIosArrowBack />
          <span className=" capitalize">{title}</span>
        </div>
      </div>
      <section className="className mt-16 mb-32 w-[90%] mx-auto gap-6 flex flex-col ">
        <div className="w-[100%] h-[320px] mx-auto bg-[#e5e5e5] relative flex justify-center items-center">
          <img
            src={image}
            alt=""
            className="w-[100%] max-w-[95%] h-auto max-h-[95%] object-cover"
          />
          <div
            className={`absolute p-3 bg-[#ffffff] shadow-[0px_2px_8px_0px_#00000085] rounded-[50%] top-[5%] right-[5%] z-[100] ${
              isWishlisted && "bg-[#fca311]"
            }`}
          >
            <FiHeart
              className={`w-6 h-6 ${
                isWishlisted && "fill-[#fca311] stroke-white"
              }`}
              onClick={() => handleWishlistModification(_id, dispatch)}
            />
          </div>
        </div>
        <h2 className="text-[24px] font-bold tracking-[0.5px]">{title}</h2>
        {discountPercentValue > 0 ? (
          <div className="flex gap-2">
            <h3 className="font-bold text-[20px] tracking-[1px]">
              ${discountedPrice.toFixed(2)}
            </h3>
            <h3 className="after:w-[100%] after:bg-[#14213d] after:h-[2px] after:left-0 relative after:absolute after:bottom-[1.1rem] tracking-[1px]">
              ${price.toFixed(2)}
            </h3>
          </div>
        ) : (
          <h3 className="font-bold text-[20px] tracki2ng-[1px]">
            ${price.toFixed(2)}
          </h3>
        )}
        <div className="flex gap-1">
          <h3 className="font-bold tracking-[0.5px] text-[18px]">
            Availability :
          </h3>
          <span>{stock > 0 ? "In stock" : " Out of stock"}</span>
        </div>
        <div>
          <h2 className="font-bold text-[18px] tracking-[0.5px]">
            Description
          </h2>
          <p className="leading-[150%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            ut voluptatem vitae, temporibus fugit velit voluptate ea enim
            voluptas. Fugit?. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Doloribus amet excepturi unde voluptatum obcaecati dolorum vel
            numquam totam soluta inventore.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-[18px] tracking-[0.5px]">Quantity :</h3>
          <input
            className="w-[20%] h-[40px] focus:outline-[#14213d] border-[1px] border-[#14213d] pl-3 rounded-sm text-[#14213d] "
            type="number"
            name=""
            id=""
            value={productQuantityInCart}
            onChange={(e) =>
              setProductQuantityInCart(Number(e.currentTarget.value))
            }
          />
        </div>
        <div>
          <h3 className="font-bold text-[18px] tracking-[0.5px]">
            Sub-Categories
          </h3>
          <div className="flex">
            {subCategoriesArr.map((category) => category).join(", ")}
          </div>
        </div>
        <button
          className="text-[#14213d] bg-transparent border-[1px] border-[#14213d] font-semibold w-[100%] h-[50px]"
          onClick={handleAddToCartFn}
        >
          {isProductInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
        <Link className="w-[100%] h-[50px] block" to="/checkout">
          <button className="text-white bg-[#fca311] font-semibold w-[100%] h-[100%]">
            Buy Now
          </button>
        </Link>
        <div className="flex-col flex gap-4">
          <h3 className="font-bold text-[18px] tracking-[0.5px]">
            Shipping Options
          </h3>
          <span className="font-bold text-[18px] text-[#fca311]">
            *This product is eligible for Free Shipping
          </span>
          <div className="flex flex-col gap-2">
            <p className=" leading-[150%]">
              <text className="font-semibold">Standard shipping</text>(Delivery
              in 5-7 working days) - takes 5% of product's total amount.
            </p>
            <p className="leading-[150%]">
              <text className="font-semibold">Free shipping</text>(Delivery in
              5-7 working days) - takes 0% of total product's amount.
            </p>
            {/* <p className=" leading-[150%]">
              <text className="font-semibold">Express shipping</text>(Delivery in 3-5 working days) takes 3% of total
              product's amount.
            </p> */}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};
