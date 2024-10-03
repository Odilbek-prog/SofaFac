import React from "react";
import about from "../assets/img/about.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__desc">
          <h1 className="about__title">{t("Bukhara Natural Product")}</h1>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
          <p className="about__text">
            {t(
              "Bukhara materials, Eco bags, Bukhara fabrics, Eco bags. Our factory has been producing cotton fabrics for use all over the world for many years."
            )}
          </p>
        </div>
        <img className="about__img" src={about} alt={t("About Us")} />
      </div>
    </div>
  );
};

export default About;
