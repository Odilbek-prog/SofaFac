import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <NavLink to="/" className="navbar__logo">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        <div className="navbar__desc">
          <ul className="navbar__ul">
            <li className="navbar__list">
              <NavLink to="/" className="navbar__link">
                Home
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink to="/collection" className="navbar__link">
                Collection
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink to="/about" className="navbar__link">
                About Us
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink to="/contact" className="navbar__link">
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
      </div>
    </div>
  );
};

export default Navbar;
