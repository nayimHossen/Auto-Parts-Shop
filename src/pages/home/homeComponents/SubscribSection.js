import React from "react";

const SubscribSection = () => {
  return (
    <section
      className="bg-cover"
      style={{
        backgroundImage: `url("https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/newsletter-bg.jpg")`,
      }}
    >
      <div className="flex justify-center flex-col items-center py-28 bg-opacity-50 bg-slate-900">
        <div className="text-center">
          <p className="text-xl underline text-[gold]">NEWSLETTER SUBSCRIBE</p>
          <h2 className="text-white text-3xl sm:text-4 md:text-5xl lg:text-6xl max-w-4xl ">
            The Latest Developments And Special Offers
          </h2>
        </div>
        <div className="mt-7 rounded-full px-5 py-2 bg-white">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="h-16 w-[170px] sm:w-96 sm:px-10 border-none"
          />
          <button className="btn bg-[#ff4545] text-white h-16 hover:bg-black rounded-full border-none">
            SUBSCRIBE{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribSection;
