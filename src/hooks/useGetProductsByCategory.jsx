import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "@/utils/productSlice";
import { updateSelectedCategoryURL } from "@/utils/productSlice";

const useGetProductsByCategory = (category) => {
  const dispatch = useDispatch();

  const { status, error, selectedCategoryProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (category) {
      const formattedCategory = category.split(" ").join("-")

      const categoryURL = `https://dummyjson.com/products/category/${formattedCategory}?limit=50`;
      dispatch(updateSelectedCategoryURL(categoryURL));

      dispatch(fetchProductsByCategory(categoryURL));
    }
  }, [dispatch, category]);

  return {
    selectedCategoryProducts,
    status,
    error,
    
  };
  
};

export default useGetProductsByCategory;
