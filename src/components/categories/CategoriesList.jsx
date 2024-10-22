import useGetAllCategories from "@/hooks/useGetAllCategories";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import updateSelectedCategoryURL from "@/utils/productSlice";

const CategoriesList = () => {
  const { categories, status, error } = useGetAllCategories();
  const dispatch = useDispatch();

  const handleSelectedCategory = (categoryUrl) => {
    dispatch(updateSelectedCategoryURL(categoryUrl));
  };

  if (status === "loading") return <div>Loading categories...</div>;
  if (status === "failed") return <>Error: {error}</>;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">All Categories</h2>

          {categories.length === 0 && <div>No categories found.</div>}

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map((category) => (
              <div key={category.slug} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-200 shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={category.slug}
                    src="src/assets/categoryIMG.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 mb-6 text-gray-500 text-xl font-semibold">
                  <NavLink
                    to={`/category/${category.name}`}
                    onClick={() => handleSelectedCategory(category.url)}
                  >
                    <span className="absolute inset-0 mb-4 " />
                    {category.name}
                  </NavLink>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
