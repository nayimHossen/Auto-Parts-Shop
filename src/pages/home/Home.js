import React from "react";
import FeatureProduct from "./homeComponents/FeatureProduct";
import HeroBanner from "./homeComponents/HeroBanner";
import LogoSlider from "./homeComponents/LogoSlider";
import PopulareCategory from "./homeComponents/PopulareCategory";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <PopulareCategory />
      <LogoSlider />
      <FeatureProduct />
    </main>
  );
};

export default Home;
