import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function JoinBtn() {
  return (
    <div className="btn join-btn">
      <Link className="join-btn-link" to="/">
        JOIN NOW
      </Link>
    </div>
  );
}

export default JoinBtn;
