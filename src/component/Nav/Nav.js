import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
      <ul className="nav">
        <li className="navOnglet">
          <Link to="/">Home</Link>
        </li>
        <li className="navOnglet">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
