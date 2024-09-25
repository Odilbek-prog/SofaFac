import React from "react";
import "./Serv.scss";
import shipping from "../../../assets/img/shippng.svg";
import money from "../../../assets/img/money.svg";
import head from "../../../assets/img/head.svg";
import wallet from "../../../assets/img/wallet.svg";

const Serv = () => {
  return (
    <div className="serv">
      <div className="serv__wrapper">
        <div className="serv__shipping serv__card" data-aos="fade-up">
          <img className="serv__img" src={shipping} alt="" />
          <div className="serv__desc">
            <h2 className="serv__title">Free Shipping</h2>
            <p className="serv__text">Free shipping on all orders</p>
          </div>
        </div>
        <div className="serv__money serv__card" data-aos="fade-up">
          <img className="serv__img" src={money} alt="" />
          <div className="serv__desc">
            <h2 className="serv__title">Money back guarantee</h2>
            <p className="serv__text">30-day money back</p>
          </div>
        </div>
        <div className="serv__head serv__card" data-aos="fade-up">
          <img className="serv__img" src={head} alt="" />
          <div className="serv__desc">
            <h2 className="serv__title">Online support 24/7</h2>
            <p className="serv__text">Technical support 24/7</p>
          </div>
        </div>
        <div className="serv__wallet serv__card" data-aos="fade-up">
          <img className="serv__img" src={wallet} alt="" />
          <div className="serv__desc">
            <h2 className="serv__title">Secure payment</h2>
            <p className="serv__text">All payment methods accepted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;
