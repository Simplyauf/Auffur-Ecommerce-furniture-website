import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "./checkoutForm";
import { OrderSummary } from "./orderSummary";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { isTokenValidBeforeHeadingToRoute } from "../../utils/isTokenValidBeforeHeadingToARoute";

export const CheckoutPage = ({ setIsCartSectionActive }) => {
  const { cart } = useSelector((state) => state.wishlistAndCartSection);

  const { userData, isLoading } = useSelector((state) => state.userAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length <= 0) {
      navigate("/");
      setIsCartSectionActive(true);
    }
  }, []);

  useEffect(() => {
    isTokenValidBeforeHeadingToRoute(dispatch, navigate);
  }, [dispatch, navigate]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%]  flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
          <div className="flex gap-[4px] items-center text-[15px]">
            <IoIosArrowBack />
            <li onClick={() => navigate("/")} className="hover:underline capitalize">
              Home
            </li>
            <IoIosArrowBack />
            <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
              Shop
            </li>
            <IoIosArrowBack />
            <span className=" capitalize">Checkout</span>
          </div>
        </div>
        <div className="lg:flex lg:w-[96%] xl:w-[92%] lg:mx-auto lg:justify-between mb-20 lg:items-start">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </>
    );
  }
};
