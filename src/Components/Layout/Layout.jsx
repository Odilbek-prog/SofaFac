import React from "react";
import Router from "../../Routes/Router.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
