import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleWishlistModification } from "../../utils/handleWishlistModification";

export const SingleProductSection = ({ wishlistData }) => {
  const { title, price, image, stock, _id } = wishlistData;
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 border-b-2 pb-4">
      <div className="w-[35%] h-[120px] bg-[#e5e5e5] relative cursor-pointer product-img-container flex justify-center items-center">
        <img src={image} alt="" className="rounded-sm w-[100%] h-auto max-h-[90%] max-w-[100%] object-cover" />
      </div>
      <div className="flex flex-col gap-2 w-[50%] text-[16px]">
        <h2 className="text-[18px] font-bold capitalize">{title}</h2>
        <span className="font-medium">${price} USD</span>
        <span className="text-[#fca311] font-RobotoCondensed tracking-[1.3px]">
          {stock < 0 ? "Out of stock" : "In Stock"}
        </span>
        <button className="w-[100%] h-[40px] mx-auto rounded-sm text-[#ffffff] bg-[#fca311]">Add to cart</button>
      </div>
      <FaTrash
        className="w-4 h-5 stroke-[#14213d] cursor-pointer"
        onClick={() => {
          handleWishlistModification(_id, dispatch);
        }}
      />
    </div>
  );
};
