import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilImage from "../../image/stan.png";
import "./Contacts.scss";

const Contact = () => {
  return (
    <div className="container__contact">
      <div className="container__imgProfil">
        <img src={profilImage} alt="tête du vega" className="img__profil"></img>
      </div>
      <div className="container__social">
        <a
          className="linkedin social"
          href="https://www.linkedin.com/in/stanislas-vega-807b89163/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a
          href="https://www.facebook.com/stanislas.vega.39/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
