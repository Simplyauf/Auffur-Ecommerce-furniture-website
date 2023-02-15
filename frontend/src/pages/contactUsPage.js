import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/footerSection";

export const ContactUsPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-12 w-[100%] h-[54px] bg-neutralColor text-secondaryColor tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%]  flex items-center justify-between font-bold  font-RobotoCondensed lg:col-span-full lg:row-span-1">
        <div className="flex gap-[4px] items-center text-[15px]">
          <IoIosArrowBack />
          <li onClick={() => navigate("/")} className="hover:underline capitalize">
            Home
          </li>
          <IoIosArrowBack />
          <li onClick={() => navigate("/shop")} className="hover:underline capitalize">
            Shop
          </li>
          <IoIosArrowBack />
          <span className=" capitalize">Contact us</span>
        </div>
      </div>

      <section className="w-[100%] mt-20 mb-28 tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] flex justify-center items-center ">
        <form action="" className="w-[92%] max-w-[360px] flex flex-col gap-4 " onSubmit={handleSubmit}>
          <h2 className="text-[36px] text-center mb-8 lg:text-[44px]">Contact Us</h2>
          <div>
            <label htmlFor="">
              Name
              <input
                type="text"
                name=""
                className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
                id=""
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Email
              <input
                type="text"
                name=""
                className="border pl-4 focus:outline-none rounded w-full mt-2 h-[52px]"
                id=""
              />
            </label>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea
              className="border p-4 focus:outline-none mt-2 border-LightSecondaryColor rounded w-full"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="my-4 w-[100%] mx-auto block h-[52px] bg-primaryColor text-white cursor-none font-medium rounded"
          >
            Send message
          </button>
        </form>
      </section>
      <FooterSection />
    </>
  );
};
