import React from "react";
import sofa from "../../../assets/img/sofa3.png";

const Quality2 = () => {
  return (
    <div className="quality">
      <div className="quality__wrapper" id="quality2">
        <div className="quality__desc" data-aos="fade-right">
          <h1 className="quality__subtitle">100%</h1>
          <p className="quality__text">Quality of material</p>
        </div>
        <img data-aos="fade-down" className="quality__img" src={sofa} alt="" />
        <div className="quality__right" data-aos="fade-left">
          <h3 className="quality__title">'Bukhara Natural Product'</h3>
          <p className="quality__text">
            'Bukhara Natural Product' has been a company for many years
            producing cotton fabrics for use all over the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality2;
