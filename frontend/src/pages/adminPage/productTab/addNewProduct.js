import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

export const AddNewProduct = ({ isAddNewProductClicked, setIsAddNewProductClicked }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDiscountPercentValue, setProductDiscountPercentValue] = useState(0);
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState(0);
  const [categories, setCategories] = useState({
    "Featured Categories": [],
    location: [],
    features: [],
    others: [],
  });

  const productCategories = {
    "Featured Categories": ["featured", "first order deal", "discounts"],
    location: ["kitchen", "dining", "bedroom", "living room", "office"],
    features: ["chairs", "tables", "sets", "cupboards", "lighting", "sofa"],
    others: ["kids"],
  };

  const imgRef = useRef(null);

  const handleCheckedCategories = (e) => {
    if (e.target.checked) {
      setCategories((categories) => {
        return {
          ...categories,
          [e.target.name]: [...categories[e.target.name], e.target.value],
        };
      });
    } else {
      if (categories[e.target.name].length === 0) {
        setCategories((categories) => {
          delete categories[e.target.name];
          return categories;
        });
      }
      setCategories((categories) => {
        let uncheckedCategory = categories[e.target.name].filter((category) => category !== e.target.value);
        return { ...categories, [e.target.name]: uncheckedCategory };
      });
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();

    const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

    const formData = {
      title: productTitle,
      image: imgUrl,
      categories: categories,
      price: productPrice,
      stock: productStock,
      discountPercentValue: productDiscountPercentValue,
    };
    const asyncCreateProductToastId = toast.loading("product data upload in progress");
    try {
      const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
      const data = await axios.post(`${serverUrl}/api/v1/products`, formData, {
        headers: {
          authorization: `Bearer ${LoginToken}`,
          "Content-Type": "application/json",
        },
      });

      //resetting  form datas to default after submits
      imgRef.current.value = null;
      setImgUrl("");
      setProductTitle("");
      setCategories({
        "Featured Categories": [],
        location: [],
        features: [],
        others: [],
      });
      setProductPrice("");
      setProductStock(0);
      setProductDiscountPercentValue(0);
      imgRef.current.nextElementSibling.style.display = "none";
      for (let key of e.target) {
        key.checked = false;
      }
      toast.update(asyncCreateProductToastId, {
        render: "Product data has sucessfully been uploaded",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      let errMessage;
      if (!error.response.data) errMessage = error.message;
      else {
        errMessage = error.response.data.message;
      }

      toast.update(asyncCreateProductToastId, {
        render: `${errMessage} : Product data upload failed`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const handleImageUpload = async (e) => {
    let imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    imgRef.current.nextElementSibling.style.display = "block";
    imgRef.current.nextElementSibling.textContent = "uploading image ...";
    const asyncImgUploadToastId = toast.loading("Pls wait, product image is currently being uploaded");

    try {
      const LoginToken = JSON.parse(localStorage.getItem("UserData")).loginToken || " ";
      const { data } = await axios.post("http://localhost:5000/api/v1/products/upload", formData, {
        headers: {
          authorization: `Bearer ${LoginToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const { image } = data;
      setImgUrl(image.src);
      toast.update(asyncImgUploadToastId, {
        render: "Product image has been successfully uploaded",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      imgRef.current.nextElementSibling.textContent = "uploaded";
    } catch (error) {
      setImgUrl("");

      let errMessage;
      if (!imageFile) errMessage = "No image selected";
      else if (!error.response.data) errMessage = error.message;
      else {
        errMessage = error.response.data.message;
      }
      toast.update(asyncImgUploadToastId, {
        render: `${errMessage} : Product image upload has failed`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      imgRef.current.nextElementSibling.textContent = "image upload failed";
    }
  };

  return (
    <div
      className={`fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 flex items-center justify-center overflow-y-auto  h-[100vh]  z-[3000] translate-y-[100%] ${
        isAddNewProductClicked && "translate-y-0"
      } `}
    >
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-y-auto w-[99%] h-[98%] shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-center">Create a new product</h2>
        <AiOutlineClose
          className="w-9 h-9 fill-primaryColor absolute right-5 cursor-pointer top-5"
          onClick={() => setIsAddNewProductClicked(false)}
        />
        <form action="" className="pt-8" onSubmit={createProduct}>
          <div className="mb-6">
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={productTitle}
              onChange={(e) => setProductTitle(e.currentTarget.value)}
            />
          </div>
          <div className="mb-6 flex gap-[2%] items-end justify-between">
            <div className="w-1/3">
              <label htmlFor="price" className="font-bold">
                Price
              </label>
              <input
                type="text"
                id="price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.currentTarget.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="stock" className="font-bold">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                value={productStock}
                onChange={(e) => setProductStock(e.currentTarget.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="discount" className="font-bold">
                Discount(%)
              </label>
              <input
                type="number"
                id="discount"
                value={productDiscountPercentValue}
                onChange={(e) => setProductDiscountPercentValue(e.currentTarget.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <section onChange={handleCheckedCategories}>
            <h2 className="text-lg font-bold mb-2">Select product categories</h2>
            <div className="mb-6">
              <div className="flex flex-wrap">
                {Object.keys(productCategories).map((categoryTitle) => {
                  return (
                    <div key={categoryTitle} className="pb-2 border border-gray-300 p-2">
                      <h2 className="font-medium text-[18px] mb-2">{categoryTitle} :</h2>
                      <div className="flex ml-4 gap-4 flex-wrap items-center">
                        {productCategories[categoryTitle].map((subCategoryTitle, index) => {
                          return (
                            <label key={subCategoryTitle} htmlFor="">
                              {subCategoryTitle}
                              <input className="ml-1" type="checkbox" name={categoryTitle} value={subCategoryTitle} />
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <div className="mb-6 relative">
            <label className="block font-bold mb-2">Image</label>
            <input
              type="file"
              ref={imgRef}
              className="w-full p-4 border border-gray-300 rounded-lg "
              onChange={handleImageUpload}
            />
            <h1 className="italics absolute left-[45%] sm:left-[55%] top-[38%]  hidden text-[#fca311] bottom-4 font-bold ">
              {" "}
            </h1>
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="text-[#ffffff] bg-[#fca311]  p-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
