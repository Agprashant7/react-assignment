import "./App.css";
import {  createContext } from "react";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Account from "./components/pages/account";
import Whishlist from "./components/pages/wishlist";
import { ProductsDetails } from "./utils/sampleData";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/checkout";
import { theme } from "./utils/theme";
import Section from "./components/pages/section";
// import Footer from "./components/footer";
export const ProductsDetailsContext = createContext();
function App() {
  return (
    <ProductsDetailsContext.Provider value={ProductsDetails}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <div style={{ height: "100vh" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/accounts" element={<Account />} />
                <Route path="/wishlist" element={<Whishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/section/:name" element={<Section />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>

        {/* <Footer />
         */}
      </ThemeProvider>
    </ProductsDetailsContext.Provider>
  );
}

export default App;
