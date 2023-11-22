import React from "react";
import JoinBtn from "../JoinBtn";
import SigninBtn from "../SigninBtn";
import "./styles.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/logo.svg";

function StickyNav() {
  return (
    <nav className="sticky-nav">
      <Link to={"/"} className="netflix-logo">
        <img src={logo} alt="" />
      </Link>
      <div className="nav-account">
        <span className="txt-color">UNLIMITED TV SHOWS & MOVIES</span>
        <JoinBtn />
        <SigninBtn />
      </div>
    </nav>
  );
}

export default StickyNav;
