import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "@/utils/productSlice";

const useGetProductsByCategory = (category) => {
  const dispatch = useDispatch();

  const { status, error, selectedCategoryProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [dispatch, category]);

  return {
    selectedCategoryProducts,
    status,
    error,
  };
};

export default useGetProductsByCategory;
