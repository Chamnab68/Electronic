import React from "react";

function TrendingProduct() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Trending Products For You!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden shadow-md transition-transform hover:shadow-lg">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[355px] overflow-hidden">
            <img
              src="https://cdn.mos.cms.futurecdn.net/AEYvg9hJbdXFmWL4XKPiHk.jpg"
              alt="Asus ROG Strix G18"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-6 bg-gray-50">
            <h3 className="text-lg font-bold">Asus ROG Strix G18</h3>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              Delivery within 24 hours
            </p>
            <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md transition-transform hover:shadow-lg">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[355px] overflow-hidden">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-shop-202309_FMT_WHH?wid=1110&hei=456&fmt=jpeg&qlt=90&.v=1692837388523"
              alt="iWatch Sport"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-6 bg-gray-50">
            <h3 className="text-lg font-bold">iWatch Sport</h3>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              Delivery within 24 hours
            </p>
            <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
