import React from "react";

const TopBar = () => {
  return (
    <div className="hidden lg:block container mx-auto px-1">
      <div className="flex justify-between items-center gap-4 py-7">
        <div className="flex items-center">
          <i className="ri-settings-5-line text-4xl"></i>
          <h1 className="text-4xl font-bold">AutoParts</h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-[#fff4f4] rounded-full text-[#ff4a6c] px-4 py-3">
            <i className="ri-map-pin-line"></i>
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
            <i className="ri-time-line"></i>
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
            className="input border-none bg-slate-100 rounded-full h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
