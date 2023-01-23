import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { enterNewPasswordAsync } from "../features/authSlice/enterNewPassword";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const EnterNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //first field and confirm password field
  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });

  // check if input type=password is in password mode or text mode.first for normal password input and second for confirm password
  const [isInputValueInPasswordMode1, setIsInputValueInPasswordMode1] = useState(true);

  const [isInputValueInPasswordMode2, setIsInputValueInPasswordMode2] = useState(true);

  // on page load,return those who don't have token, to prevous page
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  useEffect(() => {
    if (!token) {
      window.history.back();
    }
  }, []);

  // on new password submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = passwords;
    if (password !== confirmPassword) {
      toast("passwords doesnt match", {
        type: "error",
        autoClose: 3000,
        position: "top-center",
      });
    } else {
      const response = await dispatch(enterNewPasswordAsync({ password, token }));
      console.log(response);
      if (!response.payload.success) {
        toast(response.errorMsg, {
          type: "error",
          autoClose: 3000,
          position: "top-center",
        });
      } else {
        toast("Password has been updated,please relogin with the new credentials", {
          type: "success",
          autoClose: 3000,
          position: "top-center",
        });
        localStorage.removeItem("UserData");
        navigate("/login");
      }
    }
  };

  return (
    <section class="mt-16 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
      <form class="flex flex-col gap-5  w-[100%] " onSubmit={onSubmit}>
        <h1 class="text-4xl font-bold text-center font-RobotoCondensed">Change Password</h1>
        <div class="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
          <input
            class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
            type={`${isInputValueInPasswordMode1 ? "password" : "text"}`}
            placeholder=" "
            name=""
            required
            id=""
            value={passwords.password}
            onChange={(e) =>
              setPasswords((prevData) => {
                return { ...prevData, password: e.target.value };
              })
            }
          />
          <label for="" class="absolute top-[0.7rem] left-4 z-[-1]">
            password
          </label>
          {isInputValueInPasswordMode1 ? (
            <FaEye
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPasswordMode1(!isInputValueInPasswordMode1)}
            />
          ) : (
            <FaEyeSlash
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPasswordMode1(!isInputValueInPasswordMode1)}
            />
          )}
        </div>
        <div class="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
          <input
            class="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
            type={`${isInputValueInPasswordMode2 ? "password" : "text"}`}
            placeholder=" "
            name=""
            id=""
            required
            minLength="8"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords((prevData) => {
                return { ...prevData, confirmPassword: e.target.value };
              })
            }
          />
          <label for="" class="absolute top-[0.7rem] left-4 z-[-1]">
            confirm password
          </label>
          {isInputValueInPasswordMode2 ? (
            <FaEye
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPasswordMode2(!isInputValueInPasswordMode2)}
            />
          ) : (
            <FaEyeSlash
              className="w-6 h-6 absolute top-[0.8rem] right-4"
              onClick={() => setIsInputValueInPasswordMode2(!isInputValueInPasswordMode2)}
            />
          )}
        </div>
        <div class="border-[1px]  rounded py-[0.9rem] w-[100%] flex flex-col gap-4 border-black pl-4">
          <span>Your password must contain:</span>
          <span class={`${passwords.password.length < 8 ? "text-primaryColor" : "text-secondaryColor"}`}>
            {passwords.password.length < 8 ? "•" : "✓"}&nbsp; &nbsp;At least 8 characters
          </span>
          <span
            class={`${passwords.password === passwords.confirmPassword ? "text-secondaryColor" : "text-primaryColor"}`}
          >
            {passwords.password === passwords.confirmPassword ? "✓" : "•"}&nbsp; &nbsp;Passwords must match
          </span>
        </div>
        <div class="flex justify-between items-center mt-1"></div>
        <button
          class="h-[56px] mt-3 bg-primaryColor w-[100%] rounded border-transparent text-white  font-medium"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </section>
  );
};
