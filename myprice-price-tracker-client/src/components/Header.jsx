import React from "react";
import "../styles/Header.css";

import logo from "../assets/myprice-logo.svg";

const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <a href="/tracklist" className="logo">
          <img src={logo} />
        </a>
      </div>
    </header>
  );
};

export default Header;
