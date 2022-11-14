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
      <div className="flex flex-col gap-2 w-[45%] text-[16px]">
        <h2 className="text-[18px] font-bold">Wooden table</h2>
        <span className="font-medium">$54.00 USD</span>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaTrash className="w-4 h-[0.9em] fill-[#fca311]" /> <h3 className="font-semibold text-[#fca311]">Remove</h3>
        </div>
      </div>
      <input
        className="w-[20%] h-[40px] focus:outline-[#14213d] mx-auto rounded-sm text-[#14213d] bg-[#e5e5e5] pl-3"
        type="number"
        name=""
        id=""
      />
    </div>
  );
};
