import React, { useState } from "react";

function ProductCard() {
  const [isHeartSolid, setIsHeartSolid] = useState(false);
  const [isEyeSolid, setIsEyeSolid] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for hover effect

  return (
    <div className="flex flex-col gap-2">
      <figure
        className="p-14 bg-gray-200 rounded-md relative w-[250px] transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="absolute top-2 left-2 py-1 px-4 rounded-md bg-red-600 text-white text-sm">
          -40%
        </p>
        <img src="img/card-img1.png" alt="" className="w-full" />

        {/* Add to Cart - Hidden by default, appears on hover */}
        <p
          className={`bg-black absolute right-0 left-0 bottom-0 text-center rounded-bl-md rounded-br-md py-2 px-3 text-white font-bold transition-opacity duration-200 hover:bg-gray-800 hover:cursor-pointer ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Add To Cart
        </p>

        <div className="absolute top-2 right-3 flex flex-col gap-2">
          {/* Heart Icon */}
          <p
            className="py-1 px-2 rounded-full bg-white cursor-pointer"
            onClick={() => setIsHeartSolid(!isHeartSolid)}
          >
            <i
              className={`fa-${
                isHeartSolid ? "solid" : "regular"
              } fa-heart text-${isHeartSolid ? "red-500" : "black"}`}
            ></i>
          </p>

          {/* Eye Icon */}
          <p
            className="py-1 px-2 rounded-full bg-white cursor-pointer"
            onClick={() => setIsEyeSolid(!isEyeSolid)}
          >
            <i
              className={`fa-${isEyeSolid ? "solid" : "regular"} fa-eye text-${
                isEyeSolid ? "green-500" : "black"
              }`}
            ></i>
          </p>
        </div>
      </figure>

      <div>
        <p className="font-semibold text-lg">Earbuds</p>
        <div className="flex gap-4">
          <p className="font-semibold text-red-600">$12</p>
          <p className="font-semibold text-gray-500 line-through">$18</p>
        </div>
        <div className="flex gap-2 items-center">
          <ul className="flex gap-1">
            <li><i className="fa-solid fa-star text-yellow-500"></i></li>
            <li><i className="fa-solid fa-star text-yellow-500"></i></li>
            <li><i className="fa-solid fa-star text-yellow-500"></i></li>
            <li><i className="fa-solid fa-star text-yellow-500"></i></li>
            <li><i className="fa-solid fa-star text-yellow-500"></i></li>
          </ul>
          <p className="font-semibold text-gray-500">(88)</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
