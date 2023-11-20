import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import Minus from "../../assets/svgs/minus.svg";

const Question = ({ question, answer }) => {
  const [height, setHeight] = useState(0);

  return (
    <div>
      <div
        className="txt-md question flex space-between"
        onClick={() => setHeight(height === 0 ? "auto" : 0)}
      >
        <div>
          <p>
            <span>{question}</span>
          </p>
        </div>
        <div>
          {height === 0 ? (
            <i className="fa-solid fa-plus fa-2xl"></i>
          ) : (
            <img src={Minus} alt="minus" />
          )}
        </div>
      </div>

      <AnimateHeight duration={500} height={height}>
        <p className="txt-md answer">{answer}</p>
      </AnimateHeight>
    </div>
  );
};

export default Question;
