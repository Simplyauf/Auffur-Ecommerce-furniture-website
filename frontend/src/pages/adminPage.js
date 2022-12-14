import { React, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminPage = () => {
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
  console.log(categories);
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
      const data = await axios.post("http://localhost:5000/api/v1/products", formData, {
        headers: {
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

      console.log(data);
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
      console.log(error);
    }
  };

  const handleImageUpload = async (e) => {
    console.log(e.currentTarget.files[0]);
    let imageFile = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    imgRef.current.nextElementSibling.style.display = "block";
    imgRef.current.nextElementSibling.textContent = "uploading image ...";
    const asyncImgUploadToastId = toast.loading("Pls wait, product image is currently being uploaded");

    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/products/upload", formData, {
        headers: {
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
      console.log(image);
    } catch (error) {
      console.log(error);
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

  console.log(handleImageUpload);

  return (
    <form action="" className="w-[100%] px-[5%] mt-[32px] flex flex-col gap-8" onSubmit={createProduct}>
      <h2 className="text-[36px] font-bold text-center">Create a new product</h2>
      <label htmlFor="">
        Title
        <br />
        <input
          value={productTitle}
          onChange={(e) => setProductTitle(e.currentTarget.value)}
          className="h-[32px] pl-3  border-2 border-black mt-1 w-[60%]  outline-black rounded-sm"
          type="name"
          name="title"
        />
      </label>
      <div className="flex gap-4 items-center">
        <label htmlFor="" className="basis-[30%]">
          Price
          <br />
          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.currentTarget.value)}
            className="h-[32px] pl-1  border-2 border-black mt-1 w-[60%]  outline-black rounded-sm"
            type="text"
            name="price"
            id=""
          />
        </label>
        <label htmlFor="" className="basis-[25%]">
          Stock
          <br />
          <input
            value={productStock}
            onChange={(e) => setProductStock(e.currentTarget.value)}
            className="h-[32px] pl-1  border-2 border-black mt-1 w-[70%]  outline-black rounded-sm"
            type="number"
            name="Stock"
            id=""
          />
        </label>
        <label htmlFor="" className="basis-[40%]">
          discountValue (%)
          <br />
          <input
            value={productDiscountPercentValue}
            onChange={(e) => setProductDiscountPercentValue(e.currentTarget.value)}
            className="h-[32px] pl-1  border-2 border-black mt-1 w-[45%]  outline-black rounded-sm"
            type="number"
            name="discountPercentValue"
            id=""
          />
        </label>
      </div>

      <section onChange={handleCheckedCategories} className="flex flex-wrap">
        <h2 className="text-[20px] mb-4 font-bold">Select products categories</h2>
        <div className="flex flex-col flex-wrap gap-4">
          {Object.keys(productCategories).map((categoryTitle) => {
            return (
              <div className="pb-2 border-b-2">
                <h2 className="font-medium text-[18px]">{categoryTitle}</h2>
                <div className="flex ml-4 gap-4 flex-wrap">
                  {productCategories[categoryTitle].map((subCategoryTitle) => {
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
      </section>
      <label htmlFor="" className="relative font-semibold">
        Image
        <br />
        <input
          ref={imgRef}
          className="h-[32px] mt-3 w-[40%] border-2"
          type="file"
          name="image"
          id=""
          onChange={handleImageUpload}
        />
        <h1 className="italics absolute left-[45%] hidden text-[#fca311] bottom-4 font-bold "> </h1>
      </label>
      <button
        type="submit"
        className="border-2 w-[50%] self-center h-[44px] mx-auto rounded-md mt-6 text-[#ffffff] bg-[#fca311]"
      >
        submit
      </button>
    </form>
  );
};
