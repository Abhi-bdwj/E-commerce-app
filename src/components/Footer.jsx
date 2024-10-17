import React from "react";
import { Facebook , Instagram ,Twitter ,Linkedin} from "lucide-react"; // Import social media icons
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between flex-wrap px-4">
        {/* Left Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg font-bold">ZUE Store</h2>
          <p className="mt-2">Your one-stop shop for everything!</p>
        </div>

        {/* Center Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">
              <Facebook  className="h-6 w-6" />
            </a>

            <a href="#" className="hover:text-gray-400">
              <Instagram  className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter  className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Linkedin  className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ZUE Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
