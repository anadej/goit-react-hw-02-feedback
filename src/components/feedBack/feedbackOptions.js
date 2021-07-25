import React from "react";

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
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
    </>
  );
};

export default FeedBackOptions;
