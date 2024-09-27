import React from "react";
import glass from "../assets/img/glass.png";
import { NavLink, useParams } from "react-router-dom";

const Collection = ({ data }) => {
  const page1 = data.slice(0, 12);
  const page2 = data.slice(12, 24);
  const page3 = data.slice(24, 30);
  const spring = data.filter((item) => {
    if (item.category == "Spring collection") {
      return item;
    } else {
      return null;
    }
  });
  const summer = data.filter((item) => {
    if (item.category == "Summer collection") {
      return item;
    } else {
      return null;
    }
  });
  const winter = data.filter((item) => {
    if (item.category == "Winter collection") {
      return item;
    } else {
      return null;
    }
  });
  const autumn = data.filter((item) => {
    if (item.category == "Autumn collection") {
      return item;
    } else {
      return null;
    }
  });
  // location == 1 ? page1 : location == 2 ? page2 : page3
  const location = window.location.pathname.slice(17, 50);
  let total;
  let currentPageData;
  switch (location) {
    case "spring":
      currentPageData = spring;
      total = "0";
      break;
    case "winter":
      currentPageData = winter;
      total = "10";
      break;
    case "summer":
      total = "10";
      currentPageData = summer;
      break;
    case "autumn":
      currentPageData = autumn;
      total = "1";
      break;
    case "1":
      currentPageData = page1;
      total = "1-12";
      break;
    case "2":
      currentPageData = page2;
      total = "12-24";
      break;
    case "3":
      currentPageData = page3;
      total = "24-30";
      break;
    default:
      currentPageData = page1;
  }

  return (
    <div className="collection">
      <div className="collection__wrapper">
        <div className="collection__left">
          <form className="colllection__search">
            <input
              type="text"
              className="collection__input"
              placeholder="Search for products"
            />
            <NavLink className={"collection__link"} to={"/collection"}>
              <button className="collection__btn">
                <img className="glass" src={glass} alt="" />
              </button>
            </NavLink>
          </form>
          <div className="collection__select">
            <h3 className="collection__subtitle">Collection</h3>
            <NavLink className={"collection__links"} to={"/collection/page/1"}>
              All
            </NavLink>
            <NavLink
              className={"collection__links"}
              to={"/collection/page/spring"}
            >
              Spring Collection
            </NavLink>
            <NavLink
              className={"collection__links"}
              to={"/collection/page/winter"}
            >
              Winter Collection
            </NavLink>
            <NavLink
              className={"collection__links"}
              to={"/collection/page/summer"}
            >
              Summer Collection
            </NavLink>
            <NavLink
              className={"collection__links"}
              to={"/collection/page/autumn"}
            >
              Autumn Collection
            </NavLink>
          </div>
        </div>
        <div className="collection__right">
          <div className="collection__right__top">
            <div className="collection__desc">
              <h1 className="collection__title">Collection</h1>
              <p className="collection__num">Showing {total} of 30</p>
            </div>
            <select className="collection__sorting">
              <option value="default">Initial sorting</option>
              <option value="popularity">By popularity</option>
              <option value="rating">By rating</option>
              <option value="newest">By newest</option>
              <option value="price-low">Price: ascending</option>
              <option value="price-high">Price: descending</option>
            </select>
          </div>
          <div className="collection__cards">
            {currentPageData.length ? (
              currentPageData.map((item) => (
                <NavLink
                  to={`/item/${item.id}`}
                  className={"collection__links"}
                >
                  <div key={item.id} className="collection__card">
                    <img className="collection__img" src={item.img} alt="" />
                    <p className="collection__name">{item.name.slice(0, 17)}</p>
                  </div>
                </NavLink>
              ))
            ) : (
              <div className="nodata">
                No products were found matching your search criteria.
              </div>
            )}
          </div>
          {location.length == 1 ? (
            <div className="pagination">
              <NavLink to={"/collection/page/1"}>1</NavLink>
              <NavLink to={"/collection/page/2"}>2</NavLink>
              <NavLink to={"/collection/page/3"}>3</NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Collection;
