import React, { useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBuromobelexperte,
  FaDiceD6,
  FaHeart,
  FaOpencart,
  FaSistrix,
  FaUserAlt,
} from "react-icons/fa";
import { styled } from "@mui/system";
import LeftPanel from "../leftPanel";
const NavBar = () => {
  // const NavLink = styled((props) => (
  //   <NavLinkBase {...props} end={props.to === "/"} />
  // ))(({ theme }) => ({
  //   textDecoration: "none",
  
  //   "&.active": {
  //     color: "green",
  //     fontSize: theme.spacing(3)
  //   }
  // }));
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
        {/* <nav className={showMenu ? "hidden-menu show" : "hidden-menu hide"}>
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

          <NavLink className="nav-link" to="/Settings">
            <div>
              <FaSistrix />
              <p>Settings</p>
            </div>
          </NavLink>
          <NavLink className="nav-link" to="/accounts">
            <div>
              <FaUserAlt />
              <p>Accounts</p>
            </div>
          </NavLink>
        </nav> */}
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
          <NavLink activeClassName='is-active' className="nav-link" to="/Home">
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
