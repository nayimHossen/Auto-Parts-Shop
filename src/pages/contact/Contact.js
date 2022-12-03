import React from "react";
import PageBannerTitle from "../../components/PageTitle/PageBannerTitle";
import ContactForm from "./contactComponents/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageBannerTitle title="Contact Us" link="Contact" />
      <ContactForm />
    </div>
  );
};

export default Contact;
