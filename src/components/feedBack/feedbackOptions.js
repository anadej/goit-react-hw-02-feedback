import React from "react";
import { FeedbackOptionsStyled } from "./FeedbackOptionStyled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map((option) => (
        <button
          className="feedbackBtn"
          type="button"
          name={option.name}
          key={option.name}
          onClick={onLeaveFeedback}
        >
          {/* {option.title.charAt(0).toUpperCase() + option.title.slice(1)} */}
          {option.title}
        </button>
      ))}
    </FeedbackOptionsStyled>
  );
};

export default FeedbackOptions;
