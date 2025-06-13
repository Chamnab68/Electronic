import React from "react";

function SSercvice() {
  const products = [
    {
      id: 1,
      name: "Maintanent Phone",
      description: "Maintanent Phone",
      price: "$5 Up",
      image:
        "https://www.shutterstock.com/image-photo/asian-technician-repairing-smartphones-motherboard-600nw-1079627714.jpg",
    },
    {
      id: 2,
      name: 'GPS on Car"',
      description: "GPS for your Car",
      price: "$150",
      image: "https://m.media-amazon.com/images/I/71MshJ1WLIS.jpg",
    },
    {
      id: 3,
      name: "Camera on Car",
      description: "High-resolution 4K smooth",
      price: "$255",
      image:
        "https://images.squarespace-cdn.com/content/v1/5de6e4e22a399c17e348e3d3/1584657914822-5XSXBBJQHZDNRT6HYCEO/nova4k-front-dash-cam",
    },
    {
      id: 4,
      name: "Install Software",
      description: "We have Service for inastall software, game...",
      price: "$2 Up",
      image:
        "https://pcrepairsquad.co.uk/wp-content/uploads/2019/10/Software-Installations-Services-UK.jpg",
    },
    {
      id: 5,
      name: "Laptop Secondhand",
      description: "Laptop old but Quality Still good",
      price: "$299",
      image:
        "https://pcmart.ae/cdn/shop/articles/second-hand-laptop.jpg?v=1736341050&width=1100",
    },
    {
      id: 6,
      name: "Build PC Gaming",
      description: "We have Service and Experience for build Pc",
      price: "$499 up",
      image:
        "https://i.guim.co.uk/img/media/559345d7f4f979e035cfb94bc73d9e907aa8c190/0_299_4032_2419/master/4032.jpg?width=700&quality=85&auto=format&fit=max&s=9bf52edfa5ad15a85b3235ec6e1b2eec",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-2">Our Service</h1>
      <p className="text-center text-gray-600 mb-10">
        We have Service + Experience on Electronic
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-52 overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 duration-400 transition-transform"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <p className="text-blue-600 font-bold text-lg mt-2">
                {product.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SSercvice;
