import React from "react";
import sofa from "../../../assets/img/sofa3.png";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";

const Quality2 = () => {
  return (
    <div className="quality">
      <div className="quality__wrapper" id="quality2">
        <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
          <div className="quality__desc">
            <h1 className="quality__subtitle">100%</h1>
            <p className="quality__text">Quality of material</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" duration={0.5}>
          <img className="quality__img" src={sofa} alt="" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
          <div className="quality__right">
            <h3 className="quality__title">'Bukhara Natural Product'</h3>
            <p className="quality__text">
              'Bukhara Natural Product' has been a company for many years
              producing cotton fabrics for use all over the world.
            </p>
            <NavLink className="quality__btn" to={"/collection/page/autumn"}>
              Collection
            </NavLink>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Quality2;
