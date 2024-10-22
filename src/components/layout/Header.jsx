import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "@/utils/userSlice";
import { AvatarDropdownMenu } from "./AvatarDropdown";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location=useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const { isAuthenticated } = useSelector((store) => store.user);
  const cartItems = ["sher", "sher2"];

  const LoginSignupHandler = () => {
    navigate("/login");
  };
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement search logic here
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          loginSuccess({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        setLoggedIn(true);
        if (location.pathname === "/") {
          navigate("/");
        }
      } else {
        dispatch(logout());
        setLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, [dispatch,navigate,location.pathname]);

  return (
    <header>
      <div className="h-16 bg-white shadow-lg flex justify-between items-center px-10">
        <div className="flex items-center space-x-8">
          <h1 className="font-bold text-2xl pl-14">𝒁𝑼𝑬 ˢᵗᵒʳᵉ</h1>
          <nav>
            <ul className="flex space-x-10 pb-1">
              <li className="pt-2">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-black hover:font-md"
                >
                  Home
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/categories"
                  className="text-gray-500 hover:text-black hover:font-md"
                >
                  Categories
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/products"
                  className="text-gray-500 hover:text-black hover:font-md"
                >
                  Products
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-black hover:font-md"
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-black hover:font-md"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar onSearch={handleSearch} />
          <Link to="/cart" className="relative inline-flex items-center pt-3">
            <ShoppingCartIcon className="h-7 w-7 mb-1 text-gray-500 hover:text-black" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white rounded-full text-xs h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          {!loggedIn && !isAuthenticated ? (
            <Button onClick={LoginSignupHandler} className="p-2">
              Login / SignUp
            </Button>
          ) : (
            <div className="relative pl-2">
              <AvatarDropdownMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
