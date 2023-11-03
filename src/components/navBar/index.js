import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBuromobelexperte,
  FaDiceD6,
  FaOpencart,
  FaSistrix,
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
        <nav className={showMenu ? "hidden-menu show" : "hidden-menu hide"}>
          <NavLink className="nav-link" to="/">
            <div>
              <FaDiceD6 />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <div>
              <FaOpencart />
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/Settings">
            <div>
              <FaSistrix />
              <p>Settings</p>
            </div>
          </NavLink>
        </nav>
        <nav className="top-menu">
          <NavLink className="nav-link" to="/">
            <div>
              <FaDiceD6 />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/products">
            <div>
              <FaOpencart />
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
        </nav>
        <nav className="top-menu">
          <NavLink className="nav-link" to="/Settings">
            <div>
              <FaSistrix />
              <p>Settings</p>
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
          <NavLink className="nav-link" to="/dashboard">
            <div>
              <FaDiceD6 />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <div>
              <FaOpencart />
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/Settings">
            <div>
              <FaSistrix />
              <p>Settings</p>
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
