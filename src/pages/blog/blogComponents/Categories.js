import React from "react";

const Categories = () => {
  return (
    <div className="border-2 p-7 mb-7">
      <h2 className="text-2xl font-bold border-b-2 py-1">Categories</h2>
      <ul className="mt-3">
        <li className="py-3 font-bold flex items-center hover:text-[#ff4545] hover:cursor-pointer">
          <i class="ri-arrow-drop-right-line"></i> Auto Parts (2)
        </li>
        <li className="py-3 font-bold flex items-center hover:text-[#ff4545] hover:cursor-pointer">
          <i class="ri-arrow-drop-right-line"></i> Broke Discs (4)
        </li>
        <li className="py-3 font-bold flex items-center hover:text-[#ff4545] hover:cursor-pointer">
          <i class="ri-arrow-drop-right-line"></i> Engine Parts (8)
        </li>
        <li className="py-3 font-bold flex items-center hover:text-[#ff4545] hover:cursor-pointer">
          <i class="ri-arrow-drop-right-line"></i> Gallery (9)
        </li>
        <li className="py-3 font-bold flex items-center hover:text-[#ff4545] hover:cursor-pointer">
          <i class="ri-arrow-drop-right-line"></i> Video (12)
        </li>
      </ul>
    </div>
  );
};

export default Categories;
