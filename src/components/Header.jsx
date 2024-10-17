import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

const Header = () => {
  const cartItems = ["sher", "sher2"];
  return (
    <header>
      <div className="h-20 bg-white shadow-sm flex justify-between items-center px-10">
        <h1 className="font-bold text-2xl">𝒁𝑼𝑬 ˢᵗᵒʳᵉ</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                <div className="relative inline-flex items-center">
                  <ShoppingCartIcon className="h-8 w-8 " />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
