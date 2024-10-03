import React from "react";
import sofa from "../../../assets/img/sofa4.png";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Quality3 = () => {
  const { t } = useTranslation();
  return (
    <div className="quality">
      <div className="quality__wrapper">
        <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
          <div className="quality__desc">
            <h1 className="quality__subtitle">100%</h1>
            <p className="quality__text">{t("Quality of material")}</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" duration={0.5}>
          <img className="quality__img" src={sofa} alt={t("Sofa image")} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
          <div className="quality__right">
            <h3 className="quality__title">{t("Bukhara Natural Product")}</h3>
            <p className="quality__text">{t("yes")}</p>
            <NavLink className="quality__btn" to={"/collection/page/winter"}>
              {t("Collection")}
            </NavLink>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Quality3;
