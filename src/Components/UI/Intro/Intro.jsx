import React from "react";
import "./Intro.scss";
import sofa from "../../../assets/img/sofa1.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper" data-aos="fade-up">
        <img className="intro__img" data-aos="fade-right" src={sofa} alt="" />
        <div className="intro__right" data-aos="fade-left">
          <h2 className="intro__subtitle">Bukhara</h2>
          <h2 className="intro__subtitle">Natural</h2>
          <h2 className="intro__subtitle">PRODUCT</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
