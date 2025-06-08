import React from 'react'

function AAbut() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">The World of Electronics!</h1>
      <div className="bg-rose-500 w-full h-auto py-10 px-4 md:px-16 lg:px-32 mt-10 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Wellcome!!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mt-4">
            To our Website
          </p>
          <div className="mt-6"></div>
        </div>
      </div>
      <section className="bg-gray-100 py-12 px-4 md:px-20" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">ElectroTech</span> –
            your trusted source for the latest in consumer electronics. From
            cutting-edge smartphones to high-performance laptops, we provide
            quality gadgets at competitive prices.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            With over a decade in the industry, we pride ourselves on
            exceptional customer service, fast delivery, and a wide selection of
            products to meet your needs.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're a tech enthusiast or shopping for home or office
            solutions, ElectroTech has you covered.
          </p>
        </div>
      </section>

      
      
    </div>
    
    
  );
}


export default AAbut
