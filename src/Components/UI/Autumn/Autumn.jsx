import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Autumn = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="winter">
      <div className="winter__wrapper">
        <div className="winter__desc">
          <h2 className="winter__title">{t("Autumn")}</h2>
          <p className="winter__text">Bukhara Natural Product</p>
        </div>
        <div className="winter__cards">
          {data
            .filter((item) => item.category === "Autumn collection")
            .map((item) => (
              <NavLink className={"collection__links"} to={`/item/${item.id}`}>
                <div key={item.id} className="winter__card" data-aos="fade-up">
                  <img className="winter__img" src={item.img} alt="" />
                  <h3 className="winter__name">{item.name.slice(0, 17)}</h3>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Autumn;
