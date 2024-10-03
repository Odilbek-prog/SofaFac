import React from "react";
import gadget from "../assets/img/gadget.png";
import { useTranslation } from "react-i18next";

const Gadgets1 = () => {
  const { t } = useTranslation();
  return (
    <div className="gadgets">
      <div className="gadgets__wrapper">
        <img src={gadget} alt="" className="gadgets__img" />
        <div className="gadgets__desc">
          <h4 className="gadgets__subtitle">{t("date")}</h4>
          {t("content", { returnObjects: true }).map((paragraph, index) => (
            <p key={index} className="gadgets__text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets1;
