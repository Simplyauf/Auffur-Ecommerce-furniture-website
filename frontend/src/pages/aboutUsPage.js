import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/footerSection";
import { WhyChooseUsSection } from "./homepage/whyChooseUsSection";
import FurnitureVector from "../assets/Home-furniture-set.jpg";

export const AboutUsPage = () => {
  const navigate = useNavigate();

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
          <span className=" capitalize">About</span>
        </div>
      </div>
      <section className="w-full  mt-4 tablet:px-[6%] xl:px-[4%] px-[4%] lg:px-[2%] flex flex-col md:flex-row gap-4  pt-20 pb-10">
        <div>
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] mb-2">Our Story</h2>
          <p className="leading-[180%] first-letter:float-left first-letter:mr-4 first-letter:text-7xl  first-letter:text-secondaryColor first-letter:font-bold">
            Welcome to our e-furniture store,Auffur, where we offer a wide selection of high-quality, affordable
            furniture for every room in your home. Our online platform allows you to shop for furniture at your
            convenience, with easy-to-use filters that help you find the perfect piece for your style and budget. We
            believe that everyone deserves to have a beautiful, comfortable home, and we're committed to making that a
            reality for our customers. Our furniture is designed and crafted by experts using only the best components,
            ensuring that you get furniture that is both stylish and durable. At Auffur, we're passionate about creating
            beautiful spaces and providing excellent customer service, and we look forward to helping you create your
            dream home.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <img className="" src={FurnitureVector} alt="" />
        </div>
      </section>
      <WhyChooseUsSection />
      <FooterSection />
    </>
  );
};
