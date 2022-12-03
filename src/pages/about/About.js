import React from "react";
import PageBannerTitle from "../../components/PageTitle/PageBannerTitle";
import AboutBanner from "./aboutComponets/AboutBanner";
import MainGoals from "./aboutComponets/MainGoals";
import OurTeam from "./aboutComponets/OurTeam";
import CustomarReview from "../home/homeComponents/CustomarReview";
import Blogs from "../home/homeComponents/Blogs";

const About = () => {
  return (
    <section>
      <PageBannerTitle title="About Us" link="About" />
      <AboutBanner />
      <MainGoals />
      <OurTeam />
      <CustomarReview />
      <Blogs />
    </section>
  );
};

export default About;
