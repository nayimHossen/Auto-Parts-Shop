import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import BottomToTop from "../../utils/BottomToTop";

const Footer = () => {
  return (
    <footer>
      {/* ......scroll to top button..... */}
      <BottomToTop />

      <div className="bg-[#111111] py-16">
        <div className="grid px-5 sm:px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 container mx-auto text-base-100">
          {/* .......footer info start........ */}
          <div>
            <div>
              <div>
                <figure className="mb-4">
                  <img
                    src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo-white.png"
                    alt="logo"
                    className="shrink-0 w-44"
                  />
                </figure>
                <p className="mb-5 text-neutral text-sm">
                  Sed perspiciatis unde omnis natus error voluptatem accusan
                  doloreqe laudantium totam aperiam eaque sipsa quae abillo
                  inventore
                </p>
                <h3 className="text-2xl font-bold">Follow Us</h3>
              </div>
              <div className="flex justify-start items-center gap-3 mt-2">
                <div className="cursor-pointer border-primary hover:text-[#ff4545]">
                  <GrFacebookOption />
                </div>
                <div className="cursor-pointer border-primary hover:text-[#ff4545]">
                  <AiOutlineGooglePlus />
                </div>
                <div className="cursor-pointer border-primary hover:text-[#ff4545]">
                  <AiOutlineTwitter />
                </div>
                <div className="cursor-pointer border-primary hover:text-[#ff4545]">
                  <FiInstagram />
                </div>
              </div>
            </div>
          </div>
          {/* .......footer info end........ */}

          {/* .......footer Resources start........ */}
          <div>
            <h2 className="text-2xl font-bold text-white">Resources</h2>
            <ul className="mt-5 text-sm">
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">Site Map</Link>
              </li>
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">Search Terms</Link>
              </li>
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">Advanced Search</Link>
              </li>
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">About Us</Link>
              </li>
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">Contact Us</Link>
              </li>
              <li className="text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="#">Suppliers</Link>
              </li>
            </ul>
          </div>
          {/* .......footer Resources end........ */}

          {/* .......footer quick link start........ */}
          <div>
            <h2 className="text-2xl font-bold text-white">Quick Links</h2>
            <ul className="mt-5 text-sm">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="/home">Home</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="/services">Services</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="/blog">Blogs</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-[#ff4545]">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* .......footer quick link end........ */}

          {/* .......footer contact us start........ */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-white">Contact Us</h2>
            <div className="flex justify-start items-start gap-3 mb-3">
              <div className="text-[#ff4545] text-2xl">
                <MdLocationOn />
              </div>
              <div className="text-neutral text-sm">
                <h4>1247/Plot No. 39, 15th Phase</h4>
                <h2>LHB Colony, Kanpur</h2>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-2xl text-[#ff4545]">
                <BsFillTelephoneFill />
              </div>
              <div className="text-neutral text-sm">
                <h4>+91-7052-101-786</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-[#ff4545] text-2xl ">
                <AiOutlineMail />
              </div>
              <div className="text-neutral text-sm">
                <h4>help@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <hr />
      </div>

      {/* ......copyright section..... */}
      <div className="p-4 bg-[#111111] text-base-100">
        <div className="flex justify-center items-center">
          <p className="text-xs">
            Copyright © 2022 - mail.nayimhossen@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
