import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"; // Import social media icons
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
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <Link to="#" className="hover:text-gray-400">
              <Facebook className="h-6 w-6" />
            </Link>

            <Link to="#" className="hover:text-gray-400">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <Linkedin className="h-6 w-6" />
            </Link>
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
