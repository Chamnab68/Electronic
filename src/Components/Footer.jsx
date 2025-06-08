import React from "react";

function Footer() {
  const paymentLogos = {
    acleda:
      "https://urm.aub.edu.kh/(S(taoihhy0brw2helcwiewnwuu))/login/images/logo.png",
    visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png",
    mastercard:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
    amazon: "https://www.tfe.agency/wp-content/uploads/2022/03/amazon.png",
    aba: "https://thefinancialtechnologyreport.com/wp-content/uploads/2023/09/Klarna-Logo.wine_.png",
    paypal:
      "https://cdn.iconscout.com/icon/free/png-256/free-paypal-logo-icon-download-in-svg-png-gif-file-formats--online-payment-logos-pack-icons-226455.png?f=webp",
    applepay:
      "https://1000logos.net/wp-content/uploads/2023/03/Apple-Pay-logo.png",
    gpay: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png",
  };

  return (
    <div className="container mx-auto px-4">
      <footer className="border-t mt-12 pt-10 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Brand & Payment */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="Shopcart Logo"
                className="w-8 h-8"
              />
              <h2 className="text-xl font-bold">Shopcart</h2>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <h3 className="text-md font-semibold mt-4">Accepted Payments</h3>
            <div className="p-3 mt-2 bg-white">
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(paymentLogos).map(([method, url]) => (
                  <img
                    key={method}
                    src={url}
                    alt={`${method} logo`}
                    className="w-20 h-8 object-contain border rounded bg-white p-1"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Department */}
          <div>
            <h4 className="font-semibold mb-2">Department</h4>
            {[
              "Fashion",
              "Education Product",
              "Frozen Food",
              "Beverages",
              "Organic Grocery",
              "Office Supplies",
              "Beauty Products",
              "Books",
              "Electronics & Gadget",
              "Travel Accessories",
              "Fitness",
              "Sneakers",
              "Toys",
              "Furniture",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-700 hover:underline cursor-pointer hover:text-orange-500"
              >
                {item}
              </p>
            ))}
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            {[
              "About Shopcart",
              "Careers",
              "News & Blog",
              "Help",
              "Press Center",
              "Shop By Location",
              "Shopcart Brands",
              "Affiliate & Partners",
              "Ideas & Guides",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-700 hover:underline cursor-pointer hover:text-orange-500"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Services & Help */}
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            {[
              "Gift Card",
              "Mobile App",
              "Shipping & Delivery",
              "Order Pickup",
              "Account Signup",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-700 hover:underline cursor-pointer hover:text-orange-500"
              >
                {item}
              </p>
            ))}

            <h4 className="font-semibold mt-4 mb-2">Help</h4>
            {[
              "Shopcart Help",
              "Returns",
              "Track Orders",
              "Contact Us",
              "Feedback",
              "Security & Fraud",
            ].map((item) => (
              <p
                key={item}
                className="text-sm text-gray-700 hover:underline cursor-pointer hover:text-orange-500"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center mt-10 pt-6 border-t text-sm text-gray-500">
          <div className="flex gap-4 items-center flex-wrap">
            <span className="hover:text-orange-500 cursor-pointer">
              🎁 Become Seller
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              💳 Gift Cards
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              🛟 Help Center
            </span>
          </div>
          <div className="flex gap-4 flex-wrap mt-2 sm:mt-0">
            <span className="cursor-pointer hover:text-orange-500">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-orange-500">
              Privacy & Policy
            </span>
            <span>agency | 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
