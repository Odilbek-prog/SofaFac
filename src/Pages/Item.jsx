import React, { useCallback, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Zoom } from "react-toastify";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const Item = ({ data }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  const params = useParams()?.id;
  const {
    name,
    img,
    Material,
    Pillowcase,
    sheet,
    Duvet,
    Size,
    category,
    Manufacturer,
  } = data[params - 1];
  const categorylink = category.toLowerCase().slice(0, 7).trim();
  return (
    <div className="item">
      <div className="item__wrapper">
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <img src={img} alt="" className="item__img" />
        </ControlledZoom>
        <div className="item__right">
          <h1 className="item__title">{name}</h1>
          <table className="item__desc">
            <tr>
              <td>Material:</td>
              <td>{Material}</td>
            </tr>
            <tr>
              <td>Pillowcase:</td>
              <td>{Pillowcase}</td>
            </tr>
            <tr>
              <td>Sheet:</td>
              <td>{sheet}</td>
            </tr>
            <tr>
              <td>Duvet cover:</td>
              <td>{Duvet}</td>
            </tr>
            <tr>
              <td>Size:</td>
              <td>{Size}</td>
            </tr>
            <tr>
              <td>Manufacturer:</td>
              <td>{Manufacturer}</td>
            </tr>
          </table>
          <p className="item__category">
            Category:{" "}
            {
              <NavLink
                className={"item__link"}
                to={`/collection/page/${categorylink}`}
              >
                {category}
              </NavLink>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
