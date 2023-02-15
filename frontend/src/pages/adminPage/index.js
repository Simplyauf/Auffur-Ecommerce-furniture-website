import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";
import { FullpageSpinnerLoader } from "../../components/loaders/spinnerIcon";
import { fetchIsUserAnAdmin } from "../../features/adminSlice/checkIfUserIsAnAdmin";

export const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isAdmin, setIsAdmin] = useState(true);

  const [currentTabInAdminPage, setCurrentTabInAdminPage] = useState("dashboard");

  const { checkingAdminStatusLoader } = useSelector((state) => state.adminOperations);

  useEffect(() => {
    let tabPath = location.pathname.replace("/administrator/", "");
    const tabName = tabPath.includes("management") ? tabPath : tabPath.replace("-", " ");

    setCurrentTabInAdminPage(tabName);
  }, [location.pathname, location]);

  // check if user is authorized to view the page
  useEffect(() => {
    const checkIfUserIsAdminFN = async () => {
      const { payload } = await dispatch(fetchIsUserAnAdmin());

      if (payload === "success") {
        setIsAdmin(true);
      } else {
        navigate("/");
        setIsAdmin(false);
      }
    };

    checkIfUserIsAdminFN();
  }, []);

  const handleAdminPageTabChange = (e) => {
    if (e.target.dataset.tabpath) {
      e.currentTarget.classList.remove("active-AdminPage-tab");
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

  if (checkingAdminStatusLoader) {
    return <FullpageSpinnerLoader />;
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
            <span>Admin</span>
          </div>
        </div>
        <div className="flex mx-[4%] justify-between items-start mt-16  md:mx-[4%] lg:mx-[2%] xl:mx-[4%] tablet:mx-[6%] ">
          <article className="w-[50%] tablet:w-[35%] lg:w-[30%] md:w-[30%] bg-[#ffffff] max-w-[264px] mb-16 flex-col flex gap-2">
            <div
              className="flex justify-between h-14 rounded-md shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)] items-center px-[10%] cursor-pointer bg-lightPrimaryColor text-white"
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle("active-AdminPage-tab");
              }}
            >
              <h2>{currentTabInAdminPage}</h2>
              <IoIosArrowDown className="w-6 h-6" />
            </div>
            <div
              className="hidden flex-col rounded-md shadow-[0px_3px_8px_0px_rgba(0,0,0,0.2)]   py-4  gap-4 z-[200] px-[10%] sticky top-0 left-0 right-0 -mb-[14.5rem]  md:-mb-[11.5rem] bg-lightPrimaryColor text-white"
              onClick={handleAdminPageTabChange}
            >
              <Link to="dashboard">
                <li data-tabpath="Dashboard">Dashboard</li>
              </Link>
              <Link to="product-Management">
                <li data-tabpath="Product management">Product management</li>
              </Link>
              <Link to="user-Management">
                <li data-tabpath="Users management">Users management</li>
              </Link>
              <Link to="admin-Management">
                {" "}
                <li data-tabpath="Admins">Admins</li>
              </Link>
            </div>
          </article>
          <div
            className="text-center w-[100px] h-9  hover:opacity-100 bg-lighterPrimaryColor text-[hsl(37,98%,53%)] cursor-pointer shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)]  rounded-md flex items-center justify-center"
            onClick={logoutBtnClick}
          >
            <span>logout</span> &nbsp; &nbsp; <BiLogOut className="w-6 h-6 stroke-primaryColor" />
          </div>
        </div>
        <h2 className="font-RobotoSlab  text-3xl font-bold my-20 w-[100%] xl:pl-[4%] tablet:pl-[6%] pl-[4%] lg:pl-[2%] ">
          Welcome auf3
        </h2>
        {/* // nested routes jsx */}
        {/* redirection was done directly to prvenet manul acess of all nested */}
        <Outlet />
        {/* {isAdmin ? <Outlet /> : <Navigate to="/" />} */}
      </>
    );
  }
};

export default Index;
