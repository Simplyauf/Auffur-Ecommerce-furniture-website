import { IoCloseOutline } from "react-icons/io5";
import { SingleProductSection } from "./singleProductSection";
import { useSelector } from "react-redux";
import { persistor } from "../../store.js";
import { Loading } from "../Loading.js";
import { PersistGate } from "redux-persist/integration/react";
import { useNavigate } from "react-router-dom";

export const Wishlist = ({ isWishlistActive, setIsWishlistActive }) => {
  const { wishlist } = useSelector((state) => state.wishlistAndCartSection);
  const { isLoading } = useSelector((state) => state.productsData);
  const navigate = useNavigate();

  //PersistGate ALLOWS RENDERING OF A LOADER BEFORE REDUX STATE IS PERSISTEd
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[1500] bg-opacity-60 bg-[#000000] translate-x-[100%]  ${
        isWishlistActive && "translate-x-[0%]"
      }`}
    >
      <section className="flex flex-col z-[2000] overflow-y-auto absolute top-0 bg-white items-start w-[98%] right-0 bottom-0 pt-4 pb-12 gap-7 tracking-[0.25px] text-[18px] h-[100%]">
        <h1 className=" text-center mt-[0.5em] w-[100%] text-[22px] border-b-2 pb-4 font-bold">My Wishlist</h1>
        <IoCloseOutline
          className="absolute top-6 right-6 w-9 h-9 cursor-pointer"
          onClick={() => setIsWishlistActive(false)}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <PersistGate loading={<Loading />} persistor={persistor}>
            {wishlist.length < 1 ? (
              <div className="flex justify-center items-center w-[100%] h-[50vh]">
                {" "}
                <h2 className="font-bold text-[20px]">Your wishlist is currently empty</h2>{" "}
              </div>
            ) : (
              <div className="w-[100%] flex flex-col px-[5%] gap-4">
                {wishlist.map((wishlistData) => {
                  return <SingleProductSection wishlistData={wishlistData} />;
                })}
              </div>
            )}
            <div className="pt-4 border-t-2 mt-14 w-[100%]">
              <div className="w-[100%] px-[5%]">
                <button
                  className="bg-[#fca311] text-[#ffffff] h-[54px] rounded-sm  w-[100%]"
                  onClick={() => {
                    navigate("/shop");
                    setIsWishlistActive(false);
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </PersistGate>
        )}
      </section>
    </div>
  );
};
