import React from "react";
 import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/footer/Footer";
import TopNavbar from "./components/top-navbar/TopNavbar";
import "./App.css";
 
const App = () => {
  return (
    <div className= "app"> 
      <div>
        <TopNavbar />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
      </div>
   );
};

export default App;
