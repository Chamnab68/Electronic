import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import Skeleton from "./Skeleton";
import ProductContext from "../Store/ProductContext";

function TodayBestdeal() {
  const { products, isloading } = useContext(ProductContext);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Today Best Deal for you!</h1>

      <div className="flex flex-wrap gap-3 mb-4">
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Gadgets
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Laptop
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          iPhone
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Watch
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Speaker
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Tablet
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Gaming
        </button>
        <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300​​​ cursor-pointer">
          Camera
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {isloading
          ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
          : products.slice(0, 8).map(
              (
                v,
                i 
              ) => (
                <div
                  key={i}
                  className="relative border border-gray-300 cursor-pointer rounded-xl overflow-hidden"
                >
                  <button className="btn btn-circle absolute right-2 top-2 text-2xl z-10">
                    <CiHeart />
                  </button>
                  <div className="w-full h-[240px] sm:h-[300px] lg:h-[260px] bg-white flex items-center justify-center">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[230px]">
                    <div>
                      <p className="text-lg font-bold line-clamp-1">{v.name}</p>
                      <p className="text-sm text-gray-600 line-clamp-2 my-1">
                        {v.description}
                      </p>
                      <div className="flex items-center text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IoStar key={i} />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          (121)
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <button className="px-4 py-2 border border-black rounded-full hover:bg-blue-900 hover:text-white transition duration-300 cursor-pointer">
                        Add To Cart
                      </button>
                      <p className="text-lg font-bold">${v.price}</p>
                    </div>
                  </div>
                </div>
              )
            )}
      </div>
    </div>
  );
}  

export default TodayBestdeal;
