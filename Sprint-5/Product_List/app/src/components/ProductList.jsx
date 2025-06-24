import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, category }) => {
  const filteredarr = products.filter((val) => {
    return category == "All" ? val : val.category == category;
  });

  return (
    <>
      <ProductCard filteredarr={filteredarr} />
    </>
  );
};

export default ProductList;
