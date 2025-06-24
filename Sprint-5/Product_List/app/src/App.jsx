import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FilterMenu from "./components/FilterMenu";

const App = () => {
  const [category, setCategory] = useState("All");
  const products = [
    { id: 1, name: "The Alchemist", category: "Books", price: 299 },
    { id: 2,name: "Wireless Headphones",category: "Electronics",price: 1499,},
    { id: 3, name: "Men's T-Shirt", category: "Clothing", price: 499 },
    { id: 4, name: "Digital Watch", category: "Electronics", price: 999 },
    { id: 5, name: "Jeans", category: "Clothing", price: 799 },
    { id: 6, name: "Atomic Habits", category: "Books", price: 349 },
    { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: 1199 },
    { id: 8, name: "Women's Kurti", category: "Clothing", price: 699 },
    { id: 9, name: "Rich Dad Poor Dad", category: "Books", price: 249 },
    { id: 10, name: "Smartphone", category: "Electronics", price: 15999 },
  ];

  return (
    <>
      <h1>Product List</h1>
      <FilterMenu setCategory={setCategory} />
      <ProductList products={products} category={category} />
    </>
  );
};

export default App;
