import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBuromobelexperte,
  FaDiceD6,
  FaHeart,
  FaOpencart,
  FaUserAlt,
} from "react-icons/fa";
import LeftPanel from "../leftPanel";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLeft, setShowMenuLeft] = useState(false);
  return (
    <header>
      <div className="header-content container">
        <button
          onClick={() => setShowMenuLeft(!showMenuLeft)}
          className="navbar-toggler-left"
          type="button"
        >
          <FaBuromobelexperte size={28} />
        </button>

        <nav className="top-menu">
          <NavLink className="nav-link" to="/">
            <div>
              <FaDiceD6 />
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/cart">
            <div>
              <FaOpencart />
              <p>Cart</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/wishlist">
            <div>
              <FaHeart />
              <p>Wishlist</p>
            </div>
          </NavLink>
        </nav>
        <nav className="top-menu">
          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
        </nav>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="navbar-toggler"
          type="button"
        >
          <FaBars />
        </button>

        <nav className={showMenu ? "hidden-menu show" : "hidden-menu hide"}>
          <NavLink className="nav-link" to="/">
            <div>
              <FaDiceD6 />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            <div>
              <FaOpencart />
              <p>Cart</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/wishlist">
            <div>
              <FaHeart />
              <p>Wishlist</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
        </nav>
        {showMenuLeft ? (
          <nav className="hidden-menu-left">
            <LeftPanel onClose={() => setShowMenuLeft(!showMenuLeft)} />
          </nav>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default NavBar;
