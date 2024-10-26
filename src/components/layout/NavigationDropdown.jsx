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

const ListItem = React.forwardRef(
  ({ className, title, children, onSelect, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
            onClick={onSelect} // Call onSelect when clicked
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
