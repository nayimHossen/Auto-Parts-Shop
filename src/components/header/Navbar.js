import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";

const Navbar = () => {
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 70
        ? setStickyClass(
            "fixed top-0 left-0 z-50 bg-white transition duration-700 scroll-smooth shadow-lg"
          )
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end

  //active link
  let activeStyle = {
    backgroundColor: "black",
  };

  let extraActive = {
    color: "black",
  };

  return (
    <header>
      <TopBar />

      <nav className={`w-full bg-white sm:bg-[#ff4545] ${stickyClass}`}>
        <div className="flex justify-between container mx-auto px-4 sm:px-1">
          {/* mobile responsive logo */}
          <div className="lg:hidden py-5">
            <div className="flex items-center">
              <i className="ri-settings-5-line text-4xl"></i>
              <h1 className="text-4xl font-bold">AutoParts</h1>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex justify-center items-center gap-1 text-white font-bold">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                <li className="hover:bg-black py-8 px-5">HOME </li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
              >
                <li className="hover:bg-black py-8 px-5">ABOUT</li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/shop"
              >
                <li className="hover:bg-black py-8 px-5">SHOP</li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/categories"
              >
                <li className="hover:bg-black py-8 px-5">CATEGORIES </li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/blog"
              >
                <li className="hover:bg-black py-8 px-5">BLOG </li>
              </NavLink>

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/contact"
              >
                <li className="hover:bg-black py-8 px-5">CONTACT US</li>
              </NavLink>
            </ul>
          </div>

          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-3 text-white text-xl py-7">
              <NavLink
                style={({ isActive }) => (isActive ? extraActive : undefined)}
                to="/login"
              >
                <i className="ri-user-fill"></i>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? extraActive : undefined)}
                to="/cart"
              >
                <i className="ri-shopping-cart-fill"></i>
              </NavLink>
            </div>
          </div>

          {/* mobile menu */}
          <div className="lg:hidden">
            <div className="flex justify-center items-center gap-3 text-[#ff4545] sm:text-white font-bold text-3xl py-5">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
