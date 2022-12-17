import React from "react";
import { Newsletter } from "./Newsletter";
import { Footer } from "./footer";

const Index = () => {
  return (
    <section className="lg:row-span-1 lg:col-span-full">
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Index;
