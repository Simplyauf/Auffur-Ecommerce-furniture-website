import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";
import { isTokenValidBeforeHeadingToRoute } from "../../utils/isTokenValidBeforeHeadingToARoute";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentTabInProfilePage, setCurrentTabInProfilePage] = useState("Account information");

  const { isTokenValidLoader } = useSelector((state) => state.userAuth);

  // check if user is authorized to view the page
  useEffect(() => {
    isTokenValidBeforeHeadingToRoute(dispatch, navigate);
  }, [dispatch, navigate]);

  const handleProfilePageTabChange = (e) => {
    if (e.target.dataset.tabpath) {
      setCurrentTabInProfilePage(e.target.dataset.tabpath);
      e.currentTarget.classList.remove("active-profilePage-tab");
    }
  };

  const logoutBtnClick = async () => {
    try {
      await localStorage.clear("userData");

      toast("User has sucessfully logged out", {
        type: "success",
        autoClose: 3000,
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      toast("Something went wrong", {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  if (isTokenValidLoader) {
    return <h2>loading...</h2>;
  } else {
    return (
      <>
        <div className="mt-12 tablet:px-[6%] w-[100%] h-[54px] bg-neutralColor text-secondaryColor xl:px-[4%] px-[4%] lg:px-[2%] flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
          <div className="flex gap-[4px] items-center text-base">
            <IoIosArrowBack />
            <li onClick={() => navigate("/")} className="hover:underline capitalize">
              Home
            </li>
            <IoIosArrowBack />
            <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
              Shop
            </li>
            <IoIosArrowBack />
            <span>Profile</span>
          </div>
        </div>
        <div className="flex mx-[4%] justify-between mt-16  md:mx-[4%] lg:mx-[2%] xl:mx:[4%] tablet:mx-[6%] ">
          <article className="w-[50%] tablet:w-[35%] lg:w-[30%] md:w-[30%] bg-[#ffffff] laptop:w-[17%]  mb-16 flex-col flex gap-2">
            <div
              className="flex justify-between h-14 rounded-md shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)] items-center px-[10%] cursor-pointer bg-primaryColor text-white"
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle("active-profilePage-tab");
              }}
            >
              <h2>{currentTabInProfilePage}</h2>
              <SlArrowDown className="w-4 h-4" />
            </div>
            <div
              className="hidden flex-col rounded-md shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)]   py-4  gap-4 z-[200] px-[10%] sticky top-0 left-0 right-0 md:-mb-[11.5rem] bg-primaryColor text-white"
              onClick={handleProfilePageTabChange}
            >
              <Link to="accountInformation">
                <li data-tabpath="Account information">Account information</li>
              </Link>
              <Link to="address">
                <li data-tabpath="Addresses">Addresses</li>
              </Link>
              <Link to="myOrders">
                <li data-tabpath="Orders">Orders</li>
              </Link>
              <Link to="accountSettings">
                {" "}
                <li data-tabpath="Account Settings">Account settings</li>
              </Link>
            </div>
          </article>
          <div
            className="text-center w-[100px] h-9  hover:opacity-100 bg-[hsl(37,98%,92%)] text-[hsl(37,98%,53%)] cursor-pointer shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)]  rounded-md flex items-center justify-center"
            onClick={logoutBtnClick}
          >
            <span>logout</span> &nbsp; &nbsp; <BiLogOut className="w-6 h-6 stroke-primaryColor" />
          </div>
        </div>
        <Outlet />
      </>
    );
  }
};
