import "./index.css";
import "./App.css";
import PagesRoute from "./routes/pagesRoute";
import { Header } from "./components/headerSection/header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsData } from "./features/productSlice";
import { Wishlist } from "./components/wishlistSection";
import { Cart } from "./components/cartSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchIsTokenValid } from "./features/authSlice/fetchIsTokenValid";
import { getUserData } from "./features/authSlice";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState("");
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [isCartSectionActive, setIsCartSectionActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsTokenValid());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserData(JSON.parse(localStorage.getItem("UserData")) || ""));
  }, [dispatch]);

  // getAllProducts as soon as app starts from any page
  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);

  // large screens are big ipads, desktop and laptop screen starting from 768
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargeScreen(true);
    } else if (window.innerWidth < 768) {
      setIsLargeScreen(false);
    }
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth >= 768) {
        setIsLargeScreen(true);
      } else if (e.currentTarget.innerWidth < 768) {
        setIsLargeScreen(false);
      }
    });
  }, [isLargeScreen]);

  return (
    <div className="App-container lg:text-[18px]">
      <Header {...{ setIsWishlistActive, setIsCartSectionActive, isLargeScreen }} />
      <PagesRoute {...{ setIsCartSectionActive }} />
      <Wishlist {...{ isWishlistActive, setIsWishlistActive }} />
      <Cart {...{ isCartSectionActive, setIsCartSectionActive }} />
      <ToastContainer position={`${isLargeScreen ? "top-right" : "bottom-center"}`} />
    </div>
  );
}

export default App;
