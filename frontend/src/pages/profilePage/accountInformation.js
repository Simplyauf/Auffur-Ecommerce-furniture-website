import { BiArrowToRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AccountInformation = () => {
  const { userData } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();
  return (
    <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl text-center">Account Information</h2>

      <div className="mt-16 flex flex-col gap-4">
        {userData.adminStatus && (
          <div
            className="text-center w-[60%] max-w-[240px] self-end h-16  px-2 justify-center hover:opacity-100 bg-lightestPrimaryColor text-[hsl(37,98%,53%)] cursor-pointer shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)]  rounded-md flex items-center "
            onClick={() => navigate("/administrator/product-management")}
          >
            <span>Proceed to Admin page</span> &nbsp; &nbsp; <BiArrowToRight className="w-6 h-6 stroke-primaryColor" />
          </div>
        )}

        <h3 className="text-xl ">Personal information</h3>
        <div className="flex gap-4">
          <h4 className="font-bold">Email :</h4>
          <span>{userData.email}</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Username :</h4>
          <span>{userData.username}</span>
        </div>
      </div>
      <div className="mt-16 flex flex-col  gap-4">
        <h3 className="text-xl ">Customer metrics</h3>
        <div className="flex gap-4">
          <h4 className="font-bold">Year joined :</h4>
          <span>2022</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Complete purchases :</h4>
          <span>0</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Value of purchases :</h4>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
