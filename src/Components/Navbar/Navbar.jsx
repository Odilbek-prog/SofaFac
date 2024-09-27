import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <NavLink to="/" className="navbar__logo">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <div className="navbar__desc">
          <ul className={`navbar__ul ${isOpen ? "show" : ""}`}>
            <li className="navbar__list">
              <NavLink onClick={handleToggle} to="/" className="navbar__link">
                Home
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={handleToggle}
                to="/collection/page/1"
                className="navbar__link"
              >
                Collection
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={handleToggle}
                to="/about"
                className="navbar__link"
              >
                About Us
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={handleToggle}
                to="/contact"
                className="navbar__link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <select className="navbar__lang">
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
            <option value="Uzb">Uzb</option>
            <option value="Pol">Pol</option>
          </select>
        </div>
        <div className="navbar__hamburger" onClick={handleToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
