import React, { useState } from "react";

function ProductCard({ image, name, price, oldPrice, discount, rating, reviews }) {
  const [isHeartSolid, setIsHeartSolid] = useState(false);
  const [isEyeSolid, setIsEyeSolid] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Hover state

  return (
    <div className="flex flex-col gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure
        className="py-10 px-14 bg-gray-200 rounded-md relative w-[250px] transition-all duration-300">
        {/* ✅ Conditionally show discount badge */}
        {discount && (
          <p className="absolute top-2 left-2 py-1 px-3 rounded-md bg-red-600 text-white text-sm">
            -{discount}%
          </p>
        )}

        <figure className="h-[150px]">
          <img src={image} alt={name} className={`w-full h-full object-contain transform duration-200 ${isHovered ? "scale-150" : "scale-100"}`} />
        </figure>

        {/* ✅ Add to Cart - Appears on Hover */}
        <p
          className={`bg-black absolute right-0 left-0 bottom-0 text-center rounded-bl-md rounded-br-md py-2 px-3 text-white font-bold transition-opacity duration-200 hover:bg-gray-800 hover:cursor-pointer ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Add To Cart
        </p>

        {/* Wishlist & Quick View Icons */}
        <div className="absolute top-2 right-3 flex flex-col gap-2">
          <p
            className="py-1 px-2 rounded-full bg-white cursor-pointer"
            onClick={() => setIsHeartSolid(!isHeartSolid)}
          >
            <i
              className={`fa-${isHeartSolid ? "solid" : "regular"} fa-heart text-${isHeartSolid ? "red-500" : "black"}`}
            ></i>
          </p>

          <p
            className="py-1 px-2 rounded-full bg-white cursor-pointer"
            onClick={() => setIsEyeSolid(!isEyeSolid)}
          >
            <i
              className={`fa-${isEyeSolid ? "solid" : "regular"} fa-eye text-${isEyeSolid ? "green-500" : "black"}`}
            ></i>
          </p>
        </div>
      </figure>

      {/* ✅ Product Details */}
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex gap-4">
          <p className="font-semibold text-red-600">${price}</p>
          {/* ✅ Conditionally render old price if it exists */}
          {oldPrice && <p className="font-semibold text-gray-500 line-through">${oldPrice}</p>}
        </div>

        {/* ✅ Product Rating */}
        <div className="flex gap-2 items-center">
          <ul className="flex gap-1">
            {Array(5).fill(0).map((_, index) => (
              <li key={index}>
                <i className={`fa-solid fa-star ${index < rating ? "text-yellow-500" : "text-gray-300"}`}></i>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-gray-500">({reviews})</p>
        </div>
        {}
      </div>
    </div>
  );
}

export default ProductCard;
