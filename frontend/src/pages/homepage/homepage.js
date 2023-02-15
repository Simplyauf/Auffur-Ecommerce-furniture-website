import { HeroSection } from "./heroSection";
import { WhyChooseUsSection } from "./whyChooseUsSection";
import ProductsSection from "./productsSection";
import { useLocation } from "react-router-dom";
import FooterSection from "../../components/footerSection";

const Homepage = () => {
  const location = useLocation();

  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <FooterSection />
    </>
  );
};
export default Homepage;
