import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleWishlistModification } from "../../utils/handleWishlistModification";

export const SingleProductSection = ({ wishlistData }) => {
  const { title, price, image, stock, _id } = wishlistData;
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 border-b-[1px] border-LightSecondaryColor pb-4">
      <div className="w-[35%] h-[120px] bg-neutralColor relative cursor-pointer product-img-container flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="rounded-sm w-[100%] h-auto max-h-[90%] max-w-[100%] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 w-[50%] text-[16px]">
        <h2 className="text-[18px] font-bold capitalize">{title}</h2>
        <h4 className="font-bold text-[16px]">${price} USD</h4>
        <span className="text-primaryColor font-RobotoCondensed tracking-[1.3px]">
          {stock < 0 ? "Out of stock" : "In Stock"}
        </span>
        <button className="w-[100%] h-[40px] mx-auto rounded-sm border-[2px] border-primaryColor text-primaryColor">
          Add to cart
        </button>
      </div>
      <FaTrash
        className="w-4 h-5 stroke-secondaryColor cursor-pointer"
        onClick={() => {
          handleWishlistModification(_id, dispatch);
        }}
      />
    </div>
  );
};
