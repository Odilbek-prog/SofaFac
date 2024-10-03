import React from "react";
import "./News.scss";
import gadget from "../../../assets/img/gadget.png";
import mac from "../../../assets/img/mac.png";
import vr from "../../../assets/img/vr.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      <div className="news__wrapper">
        <div className="news__subtitle">
          <h1>{t("News")}</h1>
          <p>{t("Bukhara Natural Product")}</p>
        </div>
        <div className="news__cards">
          <NavLink className={"news__link"} to={"/gadgets1"}>
            <div className="news__card">
              <img className="news__img" src={gadget} alt={t("Gadget Image")} />
              <p>05.10.2019 · by Admin</p>
              <h4 className="news__title">
                {t("How to choose perfect gadgets")}
              </h4>
              <p className="news__text">{t("Short Description")}</p>
            </div>
          </NavLink>
          <NavLink className={"news__link"} to={"/gadgets2"}>
            <div className="news__card">
              <img className="news__img" src={mac} alt={t("Mac Image")} />
              <p>05.10.2019 · by Admin</p>
              <h4 className="news__title">
                {t("How to choose perfect gadgets")}
              </h4>
              <p className="news__text">{t("Short Description")}</p>
            </div>
          </NavLink>
          <NavLink className={"news__link"} to={"/gadgets3"}>
            <div className="news__card">
              <img className="news__img" src={vr} alt={t("VR Image")} />
              <p>05.10.2019 · by Admin</p>
              <h4 className="news__title">
                {t("How to choose perfect gadgets")}
              </h4>
              <p className="news__text">{t("Short Description")}</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default News;
