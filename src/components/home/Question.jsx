import React, { useState } from "react";
const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="faqs flex center column full-width feature-content question-section">
      <div>
        <div
          id="question"
          className="txt-md question flex space-between"
          onClick={toggleAnswer}
        >
          <div>
            <p>
              <span>What is Netflix?</span>
            </p>
          </div>
          <div>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </div>
        </div>

        <p className={`txt-md answer ${showAnswer ? "" : "hidden"}`}>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial - all for one low
          monthly price. There's always something new to discover, and new TV
          shows and movies are added every week!
        </p>
      </div>
    </div>
  );
};

export default Question;
