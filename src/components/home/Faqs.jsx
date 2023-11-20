import React from "react";
import Question from "../../components/home/Question";
import { faqData } from "../../pages/home/variables.js";

import Input from "../../components/common/Input";
import GetStarted from "../../components/home/GetStarted";
const FAQ = () => {
  return (
    <div>
      <div className="faqs flex center column full-width question-section">
        {faqData.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
        <div className="flex center column gap mt-2">
          <p>
            <span className="txt-md">
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
          </p>
          <div className="get-started flex">
            <Input placeholder="Email address" />
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
