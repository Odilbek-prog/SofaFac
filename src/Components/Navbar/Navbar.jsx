import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
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
              <NavLink onClick={toggleMenu} to="/" className="navbar__link">
                {t("Home")}
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={toggleMenu}
                to="/collection/page/1"
                className="navbar__link"
              >
                {t("Collection")}
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={toggleMenu}
                to="/about"
                className="navbar__link"
              >
                {t("About Us")}
              </NavLink>
            </li>
            <li className="navbar__list">
              <NavLink
                onClick={toggleMenu}
                to="/contact"
                className="navbar__link"
              >
                {t("Contact")}
              </NavLink>
            </li>
          </ul>
          <select
            onChange={changeLanguage}
            className="navbar__lang"
            defaultValue={i18n.language}
          >
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
            <option value="uz">Uzb</option>
            <option value="po">Pol</option>
          </select>
        </div>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
