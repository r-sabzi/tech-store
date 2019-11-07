import React from "react";
import Products from "../components/ProductPage/Products";
import Hero from "../components/Hero";
import productImage from "../images/productsBcg.jpeg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productImage} />
      <Products />
    </>
  );
}
