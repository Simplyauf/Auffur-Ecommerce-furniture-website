import { Header } from "../../components/header";
import { HeroSection } from "./heroSection";
import { WhyChooseUsSection } from "./whyChooseUsSection";
import ProductsSection from "./productsSection";
import FooterSection from "./footerSection";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <FooterSection />
    </>
  );
};
export default Homepage;
