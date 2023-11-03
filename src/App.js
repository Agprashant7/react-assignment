import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Products from "./components/pages/products";
import Account from "./components/pages/account";
import Settings from "./components/pages/settings";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
