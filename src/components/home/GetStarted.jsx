import React from "react";
import "../../pages/home/home.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="btn-get-started">
      <Link to="/genre" className="movie-item">
        <button>
          <span className="txt-md">Get Started &gt;</span>
        </button>
      </Link>
    </div>
  );
};

export default GetStarted;
