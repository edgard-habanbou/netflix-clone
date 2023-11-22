import React, { useState } from "react";
import Minus from "../../assets/svgs/minus.svg";

const Question = ({ question, answer }) => {
  const [maxHeight, setMaxHeight] = useState("0px");

  return (
    <div>
      <div
        className="txt-md question flex space-between"
        onClick={() => {
          setMaxHeight(maxHeight === "900px" ? "0px" : "900px");
        }}
      >
        <div>
          <p>
            <span>{question}</span>
          </p>
        </div>
        <div>
          {maxHeight === "0px" ? (
            <i className="fa-solid fa-plus fa-2xl"></i>
          ) : (
            <img src={Minus} alt="minus" />
          )}
        </div>
      </div>
      <div
        className="answer txt-md"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
