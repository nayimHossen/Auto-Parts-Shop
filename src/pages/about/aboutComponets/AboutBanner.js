import React from "react";

const AboutBanner = () => {
  return (
    <section className="container mx-auto px-5 sm:px-10 py-10 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 content-center">
        <div className="flex justify-center items-center">
          <img
            src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/about-1.jpg"
            alt="about"
          />
        </div>
        <div className="flex justify-start items-center">
          <div>
            <p className="text-[#ff4545] mb-2">About Us</p>
            <h4 className="text-3xl font-bold">
              Explore Great Auto - Car Buiness Solutions
            </h4>
            <p className="my-4">
              Sed perspiciatis unde omnis natus error voluptate accusantium
              doloremque laudantium totam aperiam eaque ipsa quae ab illo
              inventore veritatis quasi archit beatae vitae dicta sunt explicabo
              enim ipsam volupt quia voluptas sit aspernatur aut odit aut fugit
            </p>
            <ul className="my-4 font-bold">
              <li className="flex justify-start items-center">
                <span>
                  <i class="ri-arrow-drop-right-line bg-[#ff4545] mr-2 text-white"></i>{" "}
                </span>
                <p> How To Build A Music Manager With Nux</p>
              </li>
              <li className="flex justify-start items-center">
                <span>
                  <i class="ri-arrow-drop-right-line bg-[#ff4545] mr-2 text-white"></i>{" "}
                </span>
                <p> Does SEO Belong In Your Web Design Process</p>
              </li>
              <li className="flex justify-start items-center">
                <span>
                  <i class="ri-arrow-drop-right-line bg-[#ff4545] mr-2 text-white"></i>{" "}
                </span>
                <p>Upcoming Web Design Conferences August</p>
              </li>
            </ul>
            <button className="bg-[#ff4545] text-white font-bold rounded-full px-6 py-3 flex">
              Read More <i class="ri-arrow-right-circle-fill ml-2 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
