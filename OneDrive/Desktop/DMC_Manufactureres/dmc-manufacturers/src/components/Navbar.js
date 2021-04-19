import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../icons/logo2.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
  };

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/" className="navbar-logo">
          <img className="nav-img" src={logo} alt=".." />
          <span className="logo-text">DMC MANUFACTURERS</span>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              activeClassName="nav-links-active"
              exact
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              activeClassName="nav-links-active"
              exact
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="nav-links-active"
              exact
              to="/gallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="nav-links-active"
              exact
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="nav-links-active"
              exact
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
