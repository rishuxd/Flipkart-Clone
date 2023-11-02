import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/details/ProductDetail";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Success from "./components/cart/Success";
import Cancel from "./components/cart/Cancel";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
