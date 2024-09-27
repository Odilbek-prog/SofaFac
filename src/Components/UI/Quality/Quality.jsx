import React from "react";
import "./Quality.scss";
import sofa from "../../../assets/img/sofa2.png";
import ScrollAnimation from "react-animate-on-scroll";

const Quality = () => {
  return (
    <div className="quality">
      <div className="quality__wrapper">
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
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Quality;
// data-aos="fade-right"
// data-aos="fade-down"
// data-aos="fade-left"
