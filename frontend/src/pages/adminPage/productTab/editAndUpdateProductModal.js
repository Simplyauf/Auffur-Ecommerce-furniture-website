import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { FullpageSpinnerLoader } from "../../../components/loaders/spinnerIcon";

export const EditAndupdateProductModal = ({
  isEditAndUpdateModalOn,
  setIsEditAndUpdateModal,
  productDetails,
  setProductDetails,
  setIsFetchingUpdatedDataLoading,
  isFetchingUpdatedDataLoading,
}) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

  const { _id, title, stock, price, discountPercentValue, categories, image } = productDetails;

  const productCategories = {
    "Featured Categories": ["featured", "first order deal", "discounts"],
    location: ["kitchen", "dining", "bedroom", "living room", "office"],
    features: ["chairs", "table", "sets", "cupboards", "lighting", "sofa"],
    others: ["kids"],
  };

  const imgRef = useRef(null);

  const handleCheckedCategories = (e) => {
    if (e.target.checked) {
      setProductDetails((prevData) => {
        return {
          ...prevData,
          categories: {
            ...prevData.categories,
            [e.target.name]: [...prevData.categories[e.target.name], e.target.value],
          },
        };
      });
    } else {
      if (productDetails.categories[e.target.name].length === 0) {
        setProductDetails((prevData) => {
          delete prevData.categories[e.target.name];
          return prevData;
        });
      }
      setProductDetails((prevData) => {
        let uncheckedCategory = prevData.categories[e.target.name].filter(
          (subCategory) => subCategory !== e.target.value
        );
        return { ...prevData, categories: { ...prevData.categories, [e.target.name]: uncheckedCategory } };
      });
    }
  };

  const UpdateProduct = async (e) => {
    e.preventDefault();

    setIsFetchingUpdatedDataLoading(true);

    const formData = {
      title,
      image,
      categories,
      price: parseFloat(price),
      stock: parseInt(stock),
      discountPercentValue,
    };

    const asyncCreateProductToastId = toast.loading("product data upload in progress");

    try {
      const LoginToken = JSON.parse(localStorage.getItem("UserData"))?.loginToken || " ";

      const data = await axios.patch(`${serverUrl}/api/v1/products/editAndupdateProduct/${_id}`, formData, {
        headers: {
          authorization: `Bearer ${LoginToken}`,
          "Content-Type": "application/json",
        },
      });

      //resetting  form datas to default after submits
      imgRef.current.value = null;
      setProductDetails({
        title: "",
        stock: "",
        price: "",
        discountPercentValue: "",
        categories: {
          "Featured Categories": [],
          location: [],
          features: [],
          others: [],
        },
        image: "",
      });

      imgRef.current.nextElementSibling.style.display = "none";
      for (let key of e.target) {
        key.checked = false;
      }

      toast.update(asyncCreateProductToastId, {
        render: "Product data has sucessfully been updated",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setIsFetchingUpdatedDataLoading(false);
      setIsEditAndUpdateModal(false);
    } catch (error) {
      let errMessage;

      if (!error?.response?.data) errMessage = error?.message;
      else {
        errMessage = error?.response?.data?.message;
      }

      toast.update(asyncCreateProductToastId, {
        render: `${errMessage} : Product data update failed`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      setIsFetchingUpdatedDataLoading(false);
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
      const LoginToken = JSON.parse(localStorage.getItem("UserData"))?.loginToken || " ";
      const { data } = await axios.post(`${serverUrl}/api/v1/products/upload`, formData, {
        headers: {
          authorization: `Bearer ${LoginToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const { image } = data;
      setProductDetails((prevData) => {
        return { ...prevData, image: image.src };
      });
      toast.update(asyncImgUploadToastId, {
        render: "Product image has been successfully updated",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      imgRef.current.nextElementSibling.textContent = "uploaded";
    } catch (error) {
      setProductDetails((prevData) => {
        return { ...prevData, image: "" };
      });
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
    <>
      {" "}
      {isFetchingUpdatedDataLoading && <FullpageSpinnerLoader />}
      <div
        className={`fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 flex items-center justify-center overflow-y-auto  h-[100vh]  z-[3000] translate-y-[100%] ${
          isEditAndUpdateModalOn && "translate-y-0"
        } `}
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-y-auto w-[99%] h-[98%] shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-center">Update existing product</h2>
          <AiOutlineClose
            className="w-9 h-9 fill-primaryColor absolute right-5 cursor-pointer top-5"
            onClick={() => setIsEditAndUpdateModal(false)}
          />
          <form action="" className="pt-8" onSubmit={UpdateProduct}>
            <div className="mb-6">
              <label className="block font-medium mb-2">Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={title}
                onChange={(e) => {
                  setProductDetails((prevData) => {
                    return { ...prevData, title: e.target.value };
                  });
                }}
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
                  value={price}
                  onChange={(e) => {
                    setProductDetails((prevData) => {
                      return { ...prevData, price: e.target.value };
                    });
                  }}
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
                  value={stock}
                  onChange={(e) => {
                    setProductDetails((prevData) => {
                      return { ...prevData, stock: e.target.value };
                    });
                  }}
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
                  value={discountPercentValue}
                  onChange={(e) => {
                    setProductDetails((prevData) => {
                      return { ...prevData, discountPercentValue: e.target.value };
                    });
                  }}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <section>
              <h2 className="text-lg font-bold mb-2">Select product categories</h2>
              <div className="mb-6">
                <div className="flex flex-wrap">
                  {Object.keys(productCategories).map((categoryTitle) => {
                    return (
                      <div className="pb-2 border border-gray-300 p-2">
                        <h2 className="font-medium text-[18px] mb-2">{categoryTitle} :</h2>
                        <div className="flex ml-4 gap-4 flex-wrap items-center">
                          {productCategories[categoryTitle].map((subCategoryTitle) => {
                            return (
                              <label key={subCategoryTitle} htmlFor="">
                                {subCategoryTitle}
                                <input
                                  className="ml-1"
                                  type="checkbox"
                                  name={categoryTitle}
                                  onChange={handleCheckedCategories}
                                  checked={categories[categoryTitle].includes(subCategoryTitle)}
                                  value={subCategoryTitle}
                                />
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
            <div className="mb-10 relative">
              <div>
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
                <h4 className="text-sm mt-2 break-all font-normal">
                  {" "}
                  <span className="font-medium text-base">Image path</span> -{" "}
                  <a target="_blank" rel="noreferrer" className="underline text-blue-600" href={`${image}`}>
                    {" "}
                    {image}
                  </a>
                </h4>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button type="submit" className="text-[#ffffff] bg-[#fca311] w-[40%] max-w-[150px] p-2 rounded-lg">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
