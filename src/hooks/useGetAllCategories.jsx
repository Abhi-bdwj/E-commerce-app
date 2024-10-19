import React, { useEffect } from "react";

const useGetAllCategories = () => {
  const getAllCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const allCategories = await response.json();
    console.log(allCategories);
    return allCategories;
  };
  useEffect(() => {
    getAllCategories();
  }, []);
};

export default useGetAllCategories;
