import useGetAllCategories from "@/hooks/useGetAllCategories";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSelectedCategoryURL } from "@/utils/productSlice"; 

const CategoriesList = ({ListItem}) => {
  const { categories, status, error } = useGetAllCategories();
  const dispatch = useDispatch();

  const handleSelectedCategory = (categoryUrl) => {
    const formattedCategoryUrl = categoryUrl.split(" ").join("-");
    dispatch(updateSelectedCategoryURL(formattedCategoryUrl));
  };

  if (status === "loading") return <div>Loading categories...</div>;
  if (status === "failed") return <>Error: {error}</>;

  return (
    <div>
      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.slug} className="group relative">
            <li className="hover:text-black hover:font-medium">
              <h3>
                <NavLink
                  to={`/category/${category.name}`}
                  onClick={() => handleSelectedCategory(category.url)}
                >
                  <span className="absolute inset-0 mb-4" />
                  {category.name}
                </NavLink>
              </h3>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;

