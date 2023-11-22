import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function SigninBtn() {
  return (
    <div className="btn sign-btn">
      <Link className="sign-btn-link" to="/">
        SIGN IN
      </Link>
    </div>
  );
}

export default SigninBtn;
