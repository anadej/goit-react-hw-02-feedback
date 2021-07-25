import React from "react";
import { StatisticsStyled } from "./StatisticsStyled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyled>
      <li className="statisticItem">Good: {good}</li>
      <li className="statisticItem">Neutral: {neutral}</li>
      <li className="statisticItem">Bad: {bad}</li>
      <li className="statisticItem">Total: {total}</li>
      <li className="statisticItem">
        Positive feedback: {positivePercentage}%
      </li>
    </StatisticsStyled>
  );
};

export default Statistics;
