import React from 'react'

function Herotwo() {
  return (
    <div className=" w-full h-[70vh] bg-black bg-image-herotwo p-4 mt-10">
      <div className="container h-full mx-auto flex justify-end items-center p-4">
        <div className="w-auto p-10 md:w-[70%] lg:w-[34%] text-white bg-blue-950 sm:p-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Get 5% Cash back on $200
          </h1>

          <p className="mt-3 lg:mt-16 text-xl">
            Shopping is a bit of a relaxing hobby for me, which is somtimes
            troubling for the bank blance.
          </p>

          <button className="bg-white mt-16 px-8 py-4 rounded-4xl text-black text-2xl cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Herotwo
