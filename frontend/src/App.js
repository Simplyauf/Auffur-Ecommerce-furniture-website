import "./index.css";
import "./App.css";
import PagesRoute from "./routes/pagesRoute";
import { Header } from "./components/header";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsData } from "./features/productSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);
  return (
    <div className="App-container">
      <Header />
      <PagesRoute />
    </div>
  );
}

export default App;
