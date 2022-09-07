import { Stack } from "@mui/system";
import React, { useState } from "react";
import AllProducts from "../components/AllProducts/AllProduct";
import Categories from "../components/Categories/Categories";
 import useFetch from "../hooks/useFetch";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data} = useFetch(
    `products/category/${selectedCategory}`
  );

  const categorySelectHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Stack direction="row" mt={4} sx={{display:{xs:"flex"}, flexDirection:{xs:"column", md:"row"}, alignItems:{xs:"center", md:"flex-start"} }}>
      <Categories categorySelectHandler={categorySelectHandler} />
      <AllProducts selectedCategory={selectedCategory} filterData={data} />
    </Stack>
  );
};

export default Product;
