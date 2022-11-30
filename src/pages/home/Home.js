import React from "react";
import HeroBanner from "./homeComponents/HeroBanner";
import LogoSlider from "./homeComponents/LogoSlider";
import PopulareCategory from "./homeComponents/PopulareCategory";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <PopulareCategory />
      <LogoSlider />
    </main>
  );
};

export default Home;
