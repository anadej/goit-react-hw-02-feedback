import React from "react";
import FeedbackOptions from "./feedBack/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./Section";
import Statistics from "./statistics/Statistics";
import options from "../data/options.json";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // options = Object.keys(this.state);

  onLeaveFeedback = (e) => {
    const typeState = e.target.innerHTML.toLowerCase();

    this.setState((prev) => {
      return {
        [typeState]: prev[typeState] + 1,
      };
    });
  };

  //подсчет общего количества feedback
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  //подсчет процента положительных feedback
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    //переменные для передачи данных в компонент Statistics
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
