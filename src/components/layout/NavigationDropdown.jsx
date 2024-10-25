import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import CategoriesList from "../categories/CategoriesList";
import { NavLink } from "react-router-dom";
import useGetAllCategories from "@/hooks/useGetAllCategories";
import useGetProductsByCategory from "@/hooks/useGetProductsByCategory";

const NavigationDropdown = () => {
  useGetAllCategories();

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/" className={navigationMenuTriggerStyle()}>
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>
                <CategoriesList /> {/*Categories list */}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="products" className={navigationMenuTriggerStyle()}>
              Products
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="contact" className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="about" className={navigationMenuTriggerStyle()}>
              About Us
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationDropdown;
