import { fetchAllCategories } from "@/utils/categoriesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllCategories = () => {
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle" && categories.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, [dispatch, status, categories.length]);

  return { categories, status, error };
};

export default useGetAllCategories;
