import React from "react";
import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | AutoParts</title>
    </Helmet>
  );
};

export default DynamicTitle;
