import React from "react";
import "./Intro.scss";
import sofa from "../../../assets/img/sofa1.png";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="intro">
      <div className="intro__wrapper" data-aos="fade-up">
        <img className="intro__img" data-aos="fade-right" src={sofa} alt="" />
        <div className="intro__right" data-aos="fade-left">
          <h2 className="intro__subtitle">{t("Buxoro")}</h2>
          <h2 className="intro__subtitle">{t("Natural")}</h2>
          <h2 className="intro__subtitle">{t("Product")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
