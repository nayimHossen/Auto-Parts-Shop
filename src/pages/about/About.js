import React from "react";
import PageBannerTitle from "../../components/PageTitle/PageBannerTitle";
import AboutBanner from "./aboutComponets/AboutBanner";
import MainGoals from "./aboutComponets/MainGoals";
import OurTeam from "./aboutComponets/OurTeam";

const About = () => {
  return (
    <section>
      <PageBannerTitle title="About Us" link="About" />
      <AboutBanner />
      <MainGoals />
      <OurTeam />
    </section>
  );
};

export default About;
