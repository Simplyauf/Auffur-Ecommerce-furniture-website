import { FaTrash } from "react-icons/fa";

export const SingleProductSection = () => {
  return (
    <div className="flex gap-4 border-b-2 pb-4">
      <div className="w-[35%] h-[120px] bg-[#e5e5e5] relative cursor-pointer product-img-container">
        <img
          src="/images/ruslan-bardash-4kTbAMRAHtQ-unsplash_preview_rev_1.png"
          alt=""
          className="rounded-sm w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 w-[50%] text-[16px]">
        <h2 className="text-[18px] font-bold">Wooden table</h2>
        <span className="font-bold">$54.00 USD</span>
        <span>
          STOCK : <span className="text-[#fca311] font-RobotoCondensed">In Stock</span>
        </span>
        <button className="w-[100%] h-[40px] mx-auto rounded-sm text-[#ffffff] bg-[#fca311]">Add to cart</button>
      </div>
      <FaTrash className="w-6 h-6 stroke-[#14213d]" />
    </div>
  );
};
