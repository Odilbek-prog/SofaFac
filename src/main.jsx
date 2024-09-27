import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
AOS.init();
import "../node_modules/react-medium-image-zoom/dist/styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ToastContainer />
      <App />
    </StrictMode>
  </BrowserRouter>
);
