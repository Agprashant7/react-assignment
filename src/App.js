import "./App.css";
import { useState, createContext } from "react";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Account from "./components/pages/account";
import Whishlist from "./components/pages/wishlist";
import { ProductsDetails } from "./utils/sampleData";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/checkout";
export const ProductsDetailsContext = createContext()
function App() {
    
  return (
    <ProductsDetailsContext.Provider value={ProductsDetails}>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/wishlist" element={<Whishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ProductsDetailsContext.Provider>
  );
}

export default App;
