import { React, useState, useRef } from "react";
import axios from "axios";

export const AdminPage = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDiscountPercentValue, setProductDiscountPercentValue] = useState(0);
  const [productPrice, setProductPrice] = useState("");
  const [categories, setCategories] = useState({ "Featured Categories": [], location: [], features: [], others: [] });

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
        return { ...categories, [e.target.name]: [...categories[e.target.name], e.target.value] };
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
      discountPercentValue: productDiscountPercentValue,
    };
    if (imgUrl === "") {
      throw Error("Image hasnt being provided yet");
    }
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
      setCategories({ "Featured Categories": [], location: [], features: [], others: [] });
      setProductPrice("");
      setProductDiscountPercentValue(0);
      imgRef.current.nextElementSibling.style.display = "none";
      for (let key of e.target) {
        key.checked = false;
      }

      console.log(data);
    } catch (error) {
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

    try {
      const { data } = await axios.post("http://localhost:5000/api/v1/products/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { image } = data;
      setImgUrl(image.src);
      imgRef.current.nextElementSibling.textContent = "uploaded";
      console.log(image);
    } catch (error) {
      imgRef.current.nextElementSibling.textContent = "image upload failed";
      console.log(error);
    }
  };

  return (
    <form action="" className="w-[100%] mt-[32px] flex flex-col gap-8" onSubmit={createProduct}>
      <h2>create a new product</h2>
      <label htmlFor="">
        Title
        <br />
        <input
          value={productTitle}
          onChange={(e) => setProductTitle(e.currentTarget.value)}
          className="h-[32px]  mt-3 w-[40%] border-2 border-[#14213d]"
          type="name"
          name="title"
        />
      </label>
      <label htmlFor="">
        Price
        <br />
        <input
          value={productPrice}
          onChange={(e) => setProductPrice(e.currentTarget.value)}
          className="h-[32px]  mt-3 w-[40%] border-2 border-black"
          type="text"
          name="price"
          id=""
        />
      </label>
      <label htmlFor="">
        discountPercentValue
        <br />
        <input
          value={productDiscountPercentValue}
          onChange={(e) => setProductDiscountPercentValue(e.currentTarget.value)}
          className="h-[32px]  mt-3 w-[40%] border-2 border-black"
          type="number"
          name="discountPercentValue"
          id=""
        />
      </label>
      <fieldset onChange={handleCheckedCategories} className="flex flex-wrap gap-6 border-2">
        <legend>select products categories</legend>
        <div className="flex flex-col flex-wrap gap-6">
          {Object.keys(productCategories).map((categoryTitle) => {
            return (
              <div>
                <h2 className="font-bold text-[20px]">{categoryTitle}</h2>
                <div className="flex ml-4 gap-6">
                  {productCategories[categoryTitle].map((subCategoryTitle) => {
                    return (
                      <label key={subCategoryTitle} htmlFor="">
                        {subCategoryTitle}
                        <input type="checkbox" name={categoryTitle} value={subCategoryTitle} />
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </fieldset>
      <label htmlFor="" className="relative">
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
        <h1 className="italics absolute left-[45%] hidden text-[#fca311] bottom-4 font-bold "></h1>
      </label>
      <button
        type="submit"
        className="border-2 w-[50%] self-center h-[44px] mx-auto rounded-sm mt-6 text-[#ffffff] bg-[#fca311]"
      >
        submit
      </button>
    </form>
  );
};
