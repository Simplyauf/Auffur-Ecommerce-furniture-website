import "./index.css";
import "./App.css";
import PagesRoute from "./routes/pagesRoute";
import { Header } from "./components/header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsData } from "./features/productSlice";
import { Wishlist } from "./components/wishlistSection";
import { Cart } from "./components/cartSection";

function App() {
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [isCartSectionActive, setIsCartSectionActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);

  return (
    <div className="App-container">
      <Header {...{ setIsWishlistActive, setIsCartSectionActive }} />
      <PagesRoute />
      {isWishlistActive && <Wishlist {...{ isWishlistActive, setIsWishlistActive }} />}
      <Cart {...{ isCartSectionActive, setIsCartSectionActive }} />
    </div>
  );
}

export default App;
