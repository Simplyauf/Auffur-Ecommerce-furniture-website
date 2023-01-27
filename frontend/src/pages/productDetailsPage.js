import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import FooterSection from "../components/footerSection";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handleCartModification } from "../utils/handleCartModification";
import { handleWishlistModification } from "../utils/handleWishlistModification";
import { isProductInCartFn, isProductInWishlistFn } from "../utils/isSpecificProductInCartAndWishlist.js";
import { ProductLoader } from "../components/loaders/productLoader";

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { allProductsData, isLoading } = useSelector((state) => state.productsData);
  const { wishlist, cart } = useSelector((state) => state.wishlistAndCartSection);

  const [productQuantityInCart, setProductQuantityInCart] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const { productId } = useParams();
  const currentProduct = allProductsData.find((product) => product._id === productId);
  const { _id, title, price, image, discountPercentValue, categories, stock } = currentProduct || {
    _id: "",
    title: "",
    price: "",
    image: "",
    discountPercentValue: "",
    categories: "",
    stock: "",
  };

  //loop through and get the sub categories arr so it can be displayed as part of the details
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
  }, [wishlist, _id]);

  useEffect(() => {
    isProductInCartFn(_id, setIsProductInCart, cart);
  }, [cart, _id]);

  const buyNowFn = () => {
    handleAddToCartFn();
    navigate("/checkout");
  };

  let discountedPrice = price - (price * discountPercentValue) / 100;
  if (isLoading) {
    return <ProductLoader />;
  }

  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor xl:px-[4%] px-[4%] lg:px-[2%] flex items-center justify-between font-bold tablet:px-[6%] font-RobotoCondensed lg:col-span-full lg:row-span-1">
        <div className="flex gap-[4px] items-center text-base">
          <IoIosArrowBack />
          <li onClick={() => navigate("/")} className="hover:underline capitalize">
            Home
          </li>
          <IoIosArrowBack />
          <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
            Shop
          </li>
          <IoIosArrowBack />
          <span className=" capitalize">{title}</span>
        </div>
      </div>
      <section className="className mt-16 mb-32 w-[92%] mx-auto gap-6 flex flex-col lg:flex-row  lg:gap-2 md:justify-between tablet:w-[88%] lg:w-[96%]">
        <div className="w-[100%] lg:mx-0 lg:basis-[50%] lg:h-max min-h-[320px] tablet:min-h-[450px] md:min-h-[500px] h-auto mx-auto bg-neutralColor relative flex justify-center items-center">
          <img src={image} alt="" className="w-auto max-w-[99%] h-auto  object-cover" />
          <div
            className={`absolute p-3 bg-[#ffffff] shadow-[0px_2px_8px_0px_#00000085] rounded-[50%] top-[5%] right-[5%] z-[100] ${
              isWishlisted && "bg-primaryColor"
            }`}
          >
            <FiHeart
              className={`w-6 h-6 ${isWishlisted && "fill-primaryColor stroke-white"}`}
              onClick={() => handleWishlistModification(_id, dispatch)}
            />
          </div>
        </div>
        <div className="lg:basis-[40%] flex flex-col gap-6">
          <h2 className="text-[28px] font-bold tracking-[0.5px] capitalize">{title}</h2>
          {discountPercentValue > 0 ? (
            <div className="flex gap-2">
              <h3 className="font-bold text-[20px] md:text-[24px]  tracking-[1px]">${discountedPrice.toFixed(2)}</h3>
              <h3 className="line-through tracking-[1px] text-[18px] md:text-[20px] ">${price.toFixed(2)}</h3>
            </div>
          ) : (
            <h3 className="font-bold text-[20px] md:text-[24px] tracking-[1px]">${price.toFixed(2)}</h3>
          )}
          <div className="flex gap-1 items-center">
            <h3 className="font-bold tracking-[0.5px] text-[20px]">Availability :</h3>
            <span>{stock > 0 ? "In stock" : " Out of stock"}</span>
          </div>
          <div>
            <h2 className="font-bold text-[20px] tracking-[0.5px]">Description</h2>
            <p className="leading-[150%] tracking-[0.5px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ut voluptatem vitae, temporibus fugit
              velit voluptate ea enim voluptas. Fugit?. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus amet excepturi unde voluptatum obcaecati dolorum vel numquam totam soluta inventore.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-[20px] tracking-[0.5px]">Quantity :</h3>
            <input
              className="w-[20%] h-[40px] focus:outline-secondaryColor border-[1px] border-secondaryColor pl-3 rounded-sm text-secondaryColor "
              type="number"
              name=""
              id=""
              value={productQuantityInCart}
              onChange={(e) => setProductQuantityInCart(Number(e.currentTarget.value))}
            />
          </div>
          <div>
            <h3 className="font-bold text-[20px] tracking-[0.5px]">Sub-Categories :</h3>
            <div className="flex font-medium text-[18px]">
              {subCategoriesArr.map((category) => category).join(", ")}
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <button
              className="text-secondaryColor basis-[100%] tablet:basis-[45%] md:basis-[35%] bg-transparent border-[1px] border-secondaryColor font-semibold w-[100%] h-[50px]"
              onClick={handleAddToCartFn}
            >
              {isProductInCart ? "Remove from Cart" : "Add to Cart"}
            </button>

            <button
              className="text-white bg-primaryColor font-semibold  w-[100%] basis-[100%] tablet:basis-[45%] md:basis-[35%] h-[50px] block"
              onClick={buyNowFn}
            >
              Buy Now
            </button>
          </div>
          <div className="flex-col flex gap-4">
            <h3 className="font-bold text-[20px] tracking-[0.5px]">Shipping Options</h3>
            <div className="flex flex-col gap-2">
              <p className=" leading-[150%]">
                <span className="font-semibold text-[18px]">Standard shipping</span>
                (Delivery in 7-10 working days) - takes $7.00 USD for each product
              </p>
              <p className=" leading-[150%]">
                <span className="font-semibold text-[18px]">Express shipping</span>
                (Delivery in 5-7working days) - takes $7.00 USD for each product
              </p>
              <p className="leading-[150%]">
                <span className="font-semibold text-[18px]">Free shipping</span>
                (Delivery in 11-13 working days) - takes 0 USD for each product
              </p>
              {/* <p className=" leading-[150%]">
              <text className="font-semibold">Express shipping</text>(Delivery in 3-5 working days) takes 3% of total
              product's amount.
            </p> */}
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};
