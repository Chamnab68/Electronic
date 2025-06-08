import React from "react";

function Getdiscount() {
  return (
    <div className="container mx-auto py-16 p-4">
      <h1 className="text-4xl font-bold">Get Up to 70% off</h1>
      <div className="flex flex-wrap justify-between mt-5">
        <div className="w-full sm:w-[49%] lg:w-[24%] bg-yellow-50 rounded-lg  overflow-hidden">
          <div className="p-10">
            <p className="text-3-xl font-bold pb-3">Save</p>
            <p className="text-6xl font-bold mb-4 text-yellow-500">
              <sup>$100</sup>
            </p>
            <p className="text-xl font-medium">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src="https://static.independent.co.uk/2024/11/01/16/best-tablets-1-november-2024.jpg?width=1200"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-400"
            />
          </div>
        </div>

        <div className="w-full sm:w-[49%] lg:w-[24%] bg-red-50 rounded-lg  overflow-hidden">
          <div className="p-10">
            <p className="text-3-xl font-bold pb-3">Save</p>
            <p className="text-6xl font-bold mb-4 text-red-500">
              <sup>$29</sup>
            </p>
            <p className="text-xl font-medium">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src="https://cdn.mos.cms.futurecdn.net/SHSaafGrLuBAahug277BGg.jpg"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-400"
            />
          </div>
        </div>

        <div className="w-full sm:w-[49%] lg:w-[24%] bg-orange-50 rounded-lg  overflow-hidden">
          <div className="p-10">
            <p className="text-3-xl font-bold pb-3">Save</p>
            <p className="text-6xl font-bold mb-4 text-orange-500">
              <sup>$69</sup>
            </p>
            <p className="text-xl font-medium">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src="https://images.ctfassets.net/bht415zek091/QQxhfR1KETg5SdvguT6I7/5a964bd053528b4e0a0ea2371e5e87ad/Compacts-8.jpg"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-400"
            />
          </div>
        </div>

        <div className="w-full sm:w-[49%] lg:w-[24%] bg-green-50 rounded-lg  overflow-hidden">
          <div className="p-10">
            <p className="text-3-xl font-bold pb-3">Save</p>
            <p className="text-6xl font-bold mb-4 text-green-500">
              <sup>$59</sup>
            </p>
            <p className="text-xl font-medium">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/watch-ultimate-series/watch-ultimate-series-kv-poster.jpg"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getdiscount;
