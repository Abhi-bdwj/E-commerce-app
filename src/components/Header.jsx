import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = ["sher", "sher2"];

  const LoginSignupHandler = () => {
    navigate("/signup");
  };

  return (
    <header>
      <div className="h-20 bg-white shadow-lg flex justify-between items-center px-10">
        <div className="flex items-center space-x-8">
          <h1 className="font-bold text-2xl">𝒁𝑼𝑬 ˢᵗᵒʳᵉ</h1>
          <nav>
            <ul className="flex space-x-8">
              <li className="pt-2">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-black hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-black hover:underline"
                >
                  Products
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-black hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-black hover:underline"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="text-gray-700 hover:text-black hover:underline pt-2 mr-2"
          >
            <div className="relative inline-flex items-center">
              <ShoppingCartIcon className="h-7 w-7" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
          <Button onClick={LoginSignupHandler} className="p-2">
            Login / SignUp
          </Button>
          <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
