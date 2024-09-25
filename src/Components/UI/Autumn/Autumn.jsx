import React from "react";

const Autumn = ({ data }) => {
  return (
    <div className="winter">
      <div className="winter__wrapper">
        <div className="winter__desc">
          <h2 className="winter__title">Autumn collection</h2>
          <p className="winter__text">Bukhara Natural Product</p>
        </div>
        <div className="winter__cards">
          {data
            .filter((item) => item.category === "Autumn collection")
            .map((item) => (
              <div key={item.id} className="winter__card" data-aos="fade-up">
                <img className="winter__img" src={item.img} alt="" />
                <h3 className="winter__name">{item.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Autumn;
