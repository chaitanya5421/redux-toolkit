import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product";
// import About from '../components/About'
const LazyAbout = React.lazy(() => import("../components/About"));
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<LazyAbout />} />
      </Routes>
    </div>
  );
};

export default Routing;
