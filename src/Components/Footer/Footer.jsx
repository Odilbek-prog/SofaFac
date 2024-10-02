import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__desc" data-aos="fade-up">
          <NavLink to="/" className="navbar__logo">
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <p className="footer__text">
            'Bukhara Natural Product' has been a company for many years
            producing cotton fabrics for use all over the world.
          </p>
        </div>
        <div className="footer__menu" data-aos="fade-up">
          <ul className="footer__ul">
            <h3 className="footer__title">Menu</h3>
            <li className="footer__list">
              <NavLink to="/" className="footer__link">
                Home
              </NavLink>
            </li>
            <li className="footer__list">
              <NavLink to="/collection/page/1" className="footer__link">
                Collection
              </NavLink>
            </li>
            <li className="footer__list">
              <NavLink to="/about" className="footer__link">
                About Us
              </NavLink>
            </li>
            <li className="footer__list">
              <NavLink to="/contact" className="footer__link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__contact" data-aos="fade-up">
          <h3 className="footer__title">Contact</h3>
          <NavLink className={"footer__address"} to={""}>
            Bukhara, st. Alpomysh 80.
          </NavLink>
          <NavLink className={"footer__address"} to={"mailto:Bnpuz@bk.ru"}>
            Bnpuz@bk.ru
          </NavLink>
          <p className="footer__address">bnp_fabrik</p>
          <NavLink className="footer__address" to={"info@bnpfabric.com"}>
            info@bnpfabric.com
          </NavLink>
          <NavLink className="footer__address" to={"tel:+998 93 383 75 85"}>
            +998 93 383 75 85
          </NavLink>
          <NavLink className="footer__address" to={"tel:+998 93 960 78 00"}>
            +998 93 960 78 00
          </NavLink>
        </div>
      </div>
      <div className="footer__copy">
        <div className="footer__copywrapper">
          © 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
