import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Notfound from "../Pages/Notfound";
import Collection from "../Pages/Collection";

import safari from "../assets/img/safari.jpeg";
import Multicolored from "../assets/img/multicolored.jpeg";
import Stucco from "../assets/img/stucco.jpeg";
import Emerald from "../assets/img/emerald.jpeg";
import Malachite from "../assets/img/box.jpeg";
import spring from "../assets/img/spring.jpeg";
import Autumn from "../assets/img/fall.jpeg";
import Blue from "../assets/img/blue.jpeg";
import Water from "../assets/img/water.jpeg";
import Plaid from "../assets/img/paid.jpeg";

//Summer
import vintage from "../assets/img/vintage.jpeg";
import flutter from "../assets/img/flutter.jpeg";
import French from "../assets/img/french.jpeg";
import Dolly from "../assets/img/dolly.jpeg";
import Alpine from "../assets/img/alpine.jpeg";
import Inspirational from "../assets/img/insprational.jpeg";
import lotus from "../assets/img/lotus.jpeg";
import Mountain from "../assets/img/mountain.jpeg";
import sakura from "../assets/img/sakura.jpeg";
import Olive from "../assets/img/olive.jpeg";

//winter
import square from "../assets/img/squares.jpeg";
import ikat from "../assets/img/ikat.jpeg";
import Circles from "../assets/img/circles.jpeg";
import Geometry from "../assets/img/bluew.jpeg";
import Tropical from "../assets/img/tropik.jpeg";
import Bambi from "../assets/img/bambi.jpeg";
import Byzantium from "../assets/img/bzyantium.jpeg";
import garden from "../assets/img/garden.jpeg";
import Marquis from "../assets/img/feather.jpeg";
import roses from "../assets/img/roses.jpeg";
import Item from "../Pages/Item";
import Gadgets1 from "../Pages/Gadgets1";
import Gadgets2 from "../Pages/Gadgets2";
import Gadgets3 from "../Pages/Gadgets3";

const data = [
  {
    id: 1,
    name: "Safari",
    img: safari,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Squares",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 2,
    name: "Multicolored amethyst",
    img: Multicolored,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Ikat bedding set",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 3,
    name: "Stucco ornament",
    img: Stucco,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Circles",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 4,
    name: "Emerald (AB)",
    img: Emerald,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Emerald (AB)",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 5,
    name: "Malachite",
    img: Malachite,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Malachite",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 6,
    name: "spring",
    img: spring,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "spring bedding set",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 7,
    name: "Autumn leaf fall",
    img: Autumn,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Autumn leaf fall (AB)",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 8,
    name: "Blue Breeze (AB)",
    img: Blue,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bed linen set Blue Breeze (AB)",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 9,
    name: "Feather Marquis",
    img: Water,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Feather Marquis",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 10,
    name: "Lavender Plaid",
    img: Plaid,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Lavender Plaid",
    category: "Autumn collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },

  {
    id: 11,
    name: "Vintage style",
    img: vintage,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Squares",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 12,
    name: "fluttering dandelion",
    img: flutter,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Ikat bedding set",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 13,
    name: " French Riviera ",
    img: French,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Circles",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 14,
    name: "Dolly the Sheep",
    img: Dolly,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Emerald (AB)",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 15,
    name: "Alpine herbs",
    img: Alpine,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Malachite",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 16,
    name: "Inspirational",
    img: Inspirational,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "spring bedding set",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 17,
    name: "Green lotus",
    img: lotus,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Autumn leaf fall (AB)",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 18,
    name: "Mountain cornflower",
    img: Mountain,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bed linen set Blue Breeze (AB)",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 19,
    name: "Sakura branch",
    img: sakura,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Feather sakura",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 20,
    name: "Olive  branch",
    img: Olive,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Lavender Plaid",
    category: "Summer collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },

  {
    id: 21,
    name: "Squares",
    img: square,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Squares",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 22,
    name: "Ikat",
    img: ikat,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Ikat bedding set",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 23,
    name: "Circle",
    img: Circles,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Circles",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 24,
    name: "Geometry blue",
    img: Geometry,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Geometry blue",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 25,
    name: "Tropical leaves",
    img: Tropical,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Tropical leaves",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 26,
    name: "Bambi",
    img: Bambi,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bambi bedding set",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 27,
    name: "Bzyantyum",
    img: Byzantium,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Byzantium",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 28,
    name: "Evening garden",
    img: garden,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bed linen set Evening garden",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 29,
    name: "Feather marquis",
    img: Marquis,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Feather Marquis",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
  {
    id: 30,
    name: "Lavender roses",
    img: roses,
    text: "Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.",
    title: "Bedding set Lavender roses",
    category: "Winter collection",
    Material: "100% cotton flannel",
    Pillowcase: "50x70 cm (2 pcs.)",
    sheet: "Bed sheet:",
    Duvet: "Duvet cover",
    Size: "Special size",
    Manufacturer: "Bukhara Natural Product",
  },
];

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/collection/page/1" element={<Collection data={data} />} />
      <Route path="/collection/page/2" element={<Collection data={data} />} />
      <Route path="/collection/page/3" element={<Collection data={data} />} />
      <Route
        path="/collection/page/spring"
        element={<Collection data={data} />}
      />
      <Route
        path="/collection/page/winter"
        element={<Collection data={data} />}
      />
      <Route
        path="/collection/page/summer"
        element={<Collection data={data} />}
      />
      <Route
        path="/collection/page/autumn"
        element={<Collection data={data} />}
      />
      <Route path="/item/:id" element={<Item data={data} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gadgets1" element={<Gadgets1 />} />
      <Route path="/gadgets2" element={<Gadgets2 />} />
      <Route path="/gadgets3" element={<Gadgets3 />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;
