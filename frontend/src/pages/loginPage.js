import { loginUser } from "../features/authSlice/login";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { validateEmail } from "../utils/emailRegexValidation";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { fetchForgotPasswordClick } from "../features/authSlice/fetchForgotPasswordClick";
import { fetchResendEmailVerificationLink } from "../features/authSlice/resendEmailVerification";
import { FullpageSpinnerLoader } from "../components/loaders/spinnerIcon";

export const LoginPage = () => {
  // check if input type=password is in password mode or text mode
  const [isInputValueInPassword, setIsInputValueInPassword] = useState(true);

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const { isLoading } = useSelector((state) => state.userAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  on click of forogtPassword btn and also onclick of resend email verification link
  const onClickOfSomeBtn = (e) => {
    let emailInputDOM = e.currentTarget.querySelector("input[type='email']");
    if (e.target.dataset.nature === "forgotPassswordBtn") {
      if (emailInputDOM.value === "") {
        toast("please,email field is required", {
          type: "info",
          autoClose: 5000,
          position: "top-center",
        });
      }
      if (!validateEmail(emailInputDOM.value)) {
        emailInputDOM.parentElement.nextElementSibling.style.display = "block";
      } else {
        dispatch(fetchForgotPasswordClick(loginDetails.email));
      }
    } else if (e.target.dataset.nature === "resendEmailVerificationBtn") {
      if (emailInputDOM.value === "") {
        toast("please,email field is required", {
          type: "info",
          autoClose: 5000,
          position: "top-center",
        });
      }
      if (!validateEmail(emailInputDOM.value)) {
        emailInputDOM.parentElement.nextElementSibling.style.display = "block";
      } else {
        dispatch(fetchResendEmailVerificationLink(loginDetails.email));
      }
    }
  };

  const onSubmit = async (e) => {
    console.log(loginDetails);
    e.preventDefault();
    let emailInputDOM = e.currentTarget.querySelector("input[type='email']");
    if (!validateEmail(emailInputDOM.value)) {
      emailInputDOM.parentElement.nextElementSibling.style.display = "block";
    } else {
      let response = await dispatch(loginUser(loginDetails));
      console.log(response);
      if (response.payload.message) {
        navigate("/");

        setLoginDetails({ email: "", password: "" });
      }
    }
  };

  return (
    <section class="mt-16 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
      <form class="flex flex-col gap-5 w-[100%] " onSubmit={onSubmit} onClick={onClickOfSomeBtn}>
        <h1 class="text-4xl font-bold text-center font-RobotoCondensed">Welcome back</h1>
        <div className="w-100% mt-4">
          <div class="authPage-input-container mt-4 border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
            <input
              class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
              type="email"
              placeholder=" "
              name=""
              value={loginDetails.email}
              onChange={(e) => {
                setLoginDetails((prevData) => {
                  return { ...prevData, email: e.target.value };
                });
                if (validateEmail(e.target.value)) {
                  e.target.parentElement.nextElementSibling.style.display = "none";
                }
              }}
              required
            />
            <label for="" class="absolute  top-[0.8rem] left-4 z-[-1]">
              Email address
            </label>
          </div>
          <span className="text-[#fca311] font-RobotoCondensed hidden">Please enter a valid email address</span>
        </div>
        <div class="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
          <input
            class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
            type={`${isInputValueInPassword ? "password" : "text"}`}
            placeholder=" "
            name=""
            required
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails((prevData) => {
                return { ...prevData, password: e.target.value };
              })
            }
          />
          <label for="" class=" absolute top-[0.8rem] left-4 z-[-1]">
            Password
          </label>
          {isInputValueInPassword ? (
            <FaEye
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPassword(!isInputValueInPassword)}
            />
          ) : (
            <FaEyeSlash
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPassword(!isInputValueInPassword)}
            />
          )}
        </div>
        <div class="flex justify-between items-center mt-1">
          {/* <div class="flex gap-2 items-center">
            <input class="border-[1px] w-5 h-5" type="checkbox" name="" />
            <span>Remember me</span>
          </div> */}
          <span data-nature="forgotPassswordBtn" class="text-primaryColor cursor-pointer">
            Forgot Password?
          </span>
        </div>
        <button
          class="h-[56px] mt-3 bg-primaryColor w-[100%] rounded border-transparent text-white text-[18px]  font-medium"
          type="submit"
        >
          {isLoading ? "Logging in" : "Log in"}
        </button>
        <span class=" text-center">
          Dont have an account?{" "}
          <Link to="/register" class="text-primaryColor">
            Register here
          </Link>
        </span>
        <span
          className="text-center opacity-80 hover:opacity-100 text-[#fca311] cursor-pointer"
          data-nature="resendEmailVerificationBtn"
        >
          Resend email verification
        </span>
        {isLoading && <FullpageSpinnerLoader />}
      </form>
    </section>
  );
};
