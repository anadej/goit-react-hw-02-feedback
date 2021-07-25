import React from "react";
import { FeedbackOptionsStyled } from "./FeedbackOptionStyled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map((option) => (
        <button
          className="feedbackBtn"
          type="button"
          key={option.name}
          onClick={onLeaveFeedback}
        >
          {option.title.charAt(0).toUpperCase() + option.title.slice(1)}
        </button>
      ))}
    </FeedbackOptionsStyled>
  );
};

export default FeedbackOptions;
