import React from "react";

const TopBar = () => {
  return (
    <div className="hidden lg:block container mx-auto px-1">
      <div className="flex justify-between items-center gap-4 py-7">
        <div>
          <img
            className="h-[40px]"
            src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo.png"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-[#fff4f4] rounded-full text-[#ff4a6c] px-4 py-3">
            <i class="ri-map-pin-line"></i>
          </div>
          <div>
            <span className="text-slate-500 text-sm font-bold">
              Office Address
            </span>
            <h5 className="text-xl font-bold tracking-tight">
              55 Medical Road, USA
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-[#fff4f4] rounded-full text-[#ff4a6c] px-4 py-3">
            <i class="ri-time-line"></i>
          </div>
          <div>
            <span className="text-slate-500 text-sm font-bold">
              Service Hours
            </span>
            <h5 className="text-xl font-bold tracking-tight">
              Everyday, 08am - 09pm
            </h5>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input border-none rounded-full h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
