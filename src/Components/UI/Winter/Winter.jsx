import React from "react";
import "./Winter.scss";
import { NavLink } from "react-router-dom";
import Item from "../../../Pages/Item";

const Winter = ({ data }) => {
  return (
    <div className="winter">
      <div className="winter__wrapper">
        <div className="winter__desc">
          <h2 className="winter__title">Winter collection</h2>
          <p className="winter__text">Bukhara Natural Product</p>
        </div>
        <div className="winter__cards">
          {data
            .filter((item) => item.category === "Winter collection")
            .map((item) => (
              <NavLink className={"collection__links"} to={`/item/${item.id}`}>
                <div key={item.id} className="winter__card" data-aos="fade-up">
                  <img className="winter__img" src={item.img} alt="" />
                  <h3 className="winter__name">{item.name}</h3>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Winter;
