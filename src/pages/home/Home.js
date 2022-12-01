import React from "react";
import ExclusiveProducts from "./homeComponents/ExclusiveProducts";
import FeatureProduct from "./homeComponents/FeatureProduct";
import HeroBanner from "./homeComponents/HeroBanner";
import LogoSlider from "./homeComponents/LogoSlider";
import PopulareCategory from "./homeComponents/PopulareCategory";
import SubscribSection from "./homeComponents/SubscribSection";
import BestSelling from "./homeComponents/BestSelling";
import Blogs from "./homeComponents/Blogs";
import CustomarReview from "./homeComponents/CustomarReview";
import DynamicTitle from "../../components/PageTitle/DynamicTitle";

const Home = () => {
  return (
    <main>
      <DynamicTitle title="Home" />
      <HeroBanner />
      <PopulareCategory />
      <LogoSlider />
      <FeatureProduct />
      <ExclusiveProducts />
      <SubscribSection />
      <BestSelling />
      <CustomarReview />
      <Blogs />
    </main>
  );
};

export default Home;
