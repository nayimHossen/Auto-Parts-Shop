import React from "react";
import { Link } from "react-router-dom";
import DynamicTitle from "./DynamicTitle";

const PageBannerTitle = ({ title, link }) => {
  return (
    <section
      style={{
        backgroundImage: `url("https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/breadcrumb.jpg")`,
      }}
    >
      <DynamicTitle title={link} />
      <div className="py-20 text-center font-bold bg-opacity-70 bg-slate-900">
        <h2 className="text-7xl font-bold text-white mb-3">{title}</h2>
        <div className="flex gap-2 justify-center items-center">
          <Link className="text-white text-xl" to="/">
            Home
          </Link>
          <i class="ri-arrow-right-s-line text-white"></i>
          <h3 className="text-[#ff4545] text-xl">{link}</h3>
        </div>
      </div>
    </section>
  );
};

export default PageBannerTitle;
