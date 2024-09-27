import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [email, number, text];

    const token = `7864075875:AAEqDfgVPUbuRQRSX2-VihtFRTZWKV7yb5Y`;
    const chat_id = 6306759214;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: data,
      },
    })
      .then((data) => {
        toast("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setNumber("");
    setText("");
  };

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__top">
          <form className="contact__form" onSubmit={handleSubmit}>
            <h1 className="contact__title">Contact</h1>
            <input
              className="contact__input"
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Your E-mail"
              required
            />
            <input
              className="contact__input"
              type="number"
              value={number}
              onChange={handleNumber}
              required
              placeholder="Phone number"
            />
            <textarea
              value={text}
              onChange={handleText}
              className="contact__message"
              placeholder="Your message here"
            />
            <button className="contact__btn">Submit</button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d902.7215754102206!2d64.460005!3d39.747386!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e1!3m2!1sen!2sus!4v1727288605378!5m2!1sen!2sus"
            width="600"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
