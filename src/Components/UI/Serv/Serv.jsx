import React from "react";
import "./Serv.scss";
import shipping from "../../../assets/img/shippng.svg";
import money from "../../../assets/img/money.svg";
import head from "../../../assets/img/head.svg";
import wallet from "../../../assets/img/wallet.svg";
import { useTranslation } from "react-i18next";

const Serv = () => {
  const { t } = useTranslation();

  return (
    <div className="serv">
      <div className="serv__wrapper">
        <div className="serv__shipping serv__card" data-aos="fade-up">
          <img className="serv__img" src={shipping} alt={t("Free Shipping")} />
          <div className="serv__desc">
            <h2 className="serv__title">{t("Free Shipping")}</h2>
            <p className="serv__text">{t("Free shipping on all orders")}</p>
          </div>
        </div>
        <div className="serv__money serv__card" data-aos="fade-up">
          <img
            className="serv__img"
            src={money}
            alt={t("Money back guarantee")}
          />
          <div className="serv__desc">
            <h2 className="serv__title">{t("Money back guarantee")}</h2>
            <p className="serv__text">{t("30-day money back")}</p>
          </div>
        </div>
        <div className="serv__head serv__card" data-aos="fade-up">
          <img
            className="serv__img"
            src={head}
            alt={t("Online support 24/7")}
          />
          <div className="serv__desc">
            <h2 className="serv__title">{t("Online support 24/7")}</h2>
            <p className="serv__text">{t("Technical support 24/7")}</p>
          </div>
        </div>
        <div className="serv__wallet serv__card" data-aos="fade-up">
          <img className="serv__img" src={wallet} alt={t("Secure payment")} />
          <div className="serv__desc">
            <h2 className="serv__title">{t("Secure payment")}</h2>
            <p className="serv__text">{t("All payment methods accepted")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;
