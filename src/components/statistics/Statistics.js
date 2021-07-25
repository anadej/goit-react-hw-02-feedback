import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="statisticsList">
      <li className="statisticItem">Good: {good}</li>
      <li className="statisticItem">Neutral: {neutral}</li>
      <li className="statisticItem">Bad: {bad}</li>
      <li className="statisticItem">Total: {total}</li>
      <li className="statisticItem">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;
