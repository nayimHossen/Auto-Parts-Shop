import React from "react";
import PageBannerTitle from "../../components/PageTitle/PageBannerTitle";
import AboutBanner from "./aboutComponets/AboutBanner";
import MainGoals from "./aboutComponets/MainGoals";

const About = () => {
  return (
    <section>
      <PageBannerTitle title="About Us" link="About" />
      <AboutBanner />
      <MainGoals />
    </section>
  );
};

export default About;
