import React from "react";
import logo from "../../assets/svgs/logo.svg";
import "../../pages/home/home.css";
import SelectLanguage from "../../components/common/SelectLanguage";
const Header = () => {
  return (
    <div className="header-wrapper flex center">
      <div className="home-header flex space-between full-width">
        <div className="header-image">
          <img src={logo} className="netflix-logo" alt="Netflix" />
        </div>
        <div className="header-options flex space-around center">
          <SelectLanguage />
          <button className="btn-sign-in">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
