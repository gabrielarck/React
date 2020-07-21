import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const { burguer, setBurguer } = useState(false);

  const onchage = () =>{
    setBurguer(true)
    export.preventdefaul
  }

  return (
    <div className="navBar">
      <div id="wrap">
        <button onClick={burguer} className="button__menu">
          <div className="menu__burguer"></div>
          <div className="menu__burguer"></div>
          <div className="menu__burguer"></div>
        </button>

        <ul className={`${burguer} ? "navBurguer" : "nav"`}>
          <li className="navOnglet">
            <Link className="Nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="navOnglet">
            <Link className="Nav__link" to="/jeu">
              Jeu
            </Link>
          </li>
          <li className="navOnglet">
            <Link className="Nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
