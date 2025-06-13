import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

function CContact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="container mx-auto py-16 p-4">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold">Contact Our</h1>
          <p className="text-xl text-gray-600 mt-3">Criticize to Build Below</p>
        </div>

        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
            <div>
              <img
                src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/493848006_703174622657758_7862937038208819114_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBtxqAc-vhVp45zRQwsUVAAjqbh5FlphoCOpuHkWWmGgnh8tZiExRSmPuv5p10IdWjjXdhi_nKjcMzVKQCRIGL&_nc_ohc=Z_3qlTz8QEQQ7kNvwHVhkby&_nc_oc=AdlA-5qnx0wr-wb24v_5z5YrrguynnnCx8qMdhek5W4SGqH0gLlEPJTZ1YWBiLT9bhU&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=DR9LAKVp4wwfw852baXMEA&oh=00_AfOkdx9VRYayhVJLVbquqr6T62zluvK_h658JG5NvW5NDw&oe=684B54B1"
                alt="Sambath Chamnab"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white hover:scale-105 transition duration-300"
              />

              <h2 className="text-3xl font-bold text-center mb-2">
                Sambath Chamnab
              </h2>
              <p className="text-center mb-6 text-blue-100">
                Electronics Specialist & Support
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Mail />
                  <span>sambathchamnab88@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone />
                  <span>+855 123-456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin />
                  <span>Toul Sangke, Phnom Penh</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/493848006_703174622657758_7862937038208819114_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBtxqAc-vhVp45zRQwsUVAAjqbh5FlphoCOpuHkWWmGgnh8tZiExRSmPuv5p10IdWjjXdhi_nKjcMzVKQCRIGL&_nc_ohc=S34eiDtsoYUQ7kNvwHh-C2G&_nc_oc=Adlj2W_u_EpEs3ElsBGTLRrGdZrZMQ8k9ZySqQBqFDYGOuFBWtuiVyhP1Vv_9O62eXY&_nc_zt=23&_nc_ht=scontent.fpnh20-1.fna&_nc_gid=hPiDEyLLFTh6r-APVWzs9w&oh=00_AfPCiznMu-t4WVL8oAoz0wFGrSDk6ZoQbFTsTto024O-EQ&oe=6851B3F1"
                className="hover:text-white/80"
              >
                <Facebook />
              </a>
              <a href="#" className="hover:text-white/80">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-white/80">
                <Instagram />
              </a>
            </div>
          </div>

          <form className="p-10 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:ring-2 hover:ring-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:ring-2 hover:ring-blue-500 transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:ring-2 hover:ring-blue-500 transition"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none hover:ring-2 hover:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CContact;
