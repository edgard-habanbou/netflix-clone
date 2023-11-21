import React from "react";
import "../../pages/home/home.css";

const Input = ({ placeholder }) => {
  return (
    <div className="input">
      <input className="txt-sm" type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
