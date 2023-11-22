import React, { useEffect, useState } from "react";
import JoinBtn from "../JoinBtn";
import SigninBtn from "../SigninBtn";
import "./styles.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/logo.svg";
import smallLogo from "../../../assets/svgs/smallLogo.svg";

function StickyNav() {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
  }, []);
  return (
    <nav className="sticky-nav">
      <Link to={"/"} className={width < 768 ? "small-logo" : "netflix-logo"}>
        <img src={width < 768 ? smallLogo : logo} alt="" />
      </Link>
      <div className="nav-account">
        <span className="txt-color txt-sm NavTag">
          UNLIMITED TV SHOWS & MOVIES
        </span>
        <JoinBtn />
        <SigninBtn />
      </div>
    </nav>
  );
}

export default StickyNav;
