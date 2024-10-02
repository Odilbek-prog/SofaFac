import React from "react";
import "./News.scss";
import gadget from "../../../assets/img/gadget.png";
import mac from "../../../assets/img/mac.png";
import vr from "../../../assets/img/vr.png";
import { NavLink } from "react-router-dom";

const News = () => {
  return (
    <div className="news">
      <div className="news__wrapper">
        <div className="news__subtitle">
          <h1>News</h1>
          <p>Bukhara Natural Product</p>
        </div>
        <div className="news__cards">
          <NavLink className={"news__link"} to={"/gadgets1"}>
            <div className="news__card">
              <img className="news__img" src={gadget} alt="" />
              <p>05.10.2019 · by Admin</p>
              <h4>How to choose perfect gadgets</h4>
              <p className="news__text">
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper s...
              </p>
            </div>
          </NavLink>
          <NavLink className={"news__link"} to={"/gadgets2"}>
            <div className="news__card">
              <img className="news__img" src={mac} alt="" />
              <p>05.10.2019 · by Admin</p>
              <h4>How to choose perfect gadgets</h4>
              <p className="news__text">
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper s...
              </p>
            </div>
          </NavLink>
          <NavLink className={"news__link"} to={"/gadgets3"}>
            <div className="news__card">
              <img className="news__img" src={vr} alt="" />
              <p>05.10.2019 · by Admin</p>
              <h4>How to choose perfect gadgets</h4>
              <p className="news__text">
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper s...
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default News;
