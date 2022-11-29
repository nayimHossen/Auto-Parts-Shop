import React from "react";
import TopBar from "./TopBar";

const Navbar = () => {
  return (
    <header className="">
      <TopBar />

      <nav className="bg-[#ff4545]">
        <div className="flex justify-between container mx-auto px-4 sm:px-1">
          {/* mobile responsive logo */}
          <div className="lg:hidden py-5">
            <img
              className="h-[40px]"
              src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo.png"
              alt="logo"
            />
          </div>

          <div className="hidden lg:block">
            <ul className="flex justify-center items-center gap-1 text-white font-bold">
              <li className="hover:bg-black py-6 px-5">HOME</li>
              <li className="hover:bg-black py-6 px-5">ABOUT</li>
              <li className="hover:bg-black py-6 px-5">SHOP</li>
              <li className="hover:bg-black py-6 px-5">CATEGORIES</li>
              <li className="hover:bg-black py-6 px-5">BLOG</li>
              <li className="hover:bg-black py-6 px-5">CONTACT US</li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-3 text-white text-xl py-5">
              <div>
                <i class="ri-user-fill"></i>
              </div>
              <div>
                <i class="ri-shopping-cart-fill"></i>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className="lg:hidden">
            <div className="flex justify-center items-center gap-3 text-white text-3xl py-5">
              <i class="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
