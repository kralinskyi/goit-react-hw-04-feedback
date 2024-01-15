import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  isNotificationShow = () => {
    const { good, bad, neutral } = this.state;
    return !good && !neutral && !bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const positive = (Number(good) + Number(neutral)) / Number(total);

    const positivePercentage = parseFloat(positive * 100).toFixed();
    return positivePercentage;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onBtnClick}
        ></FeedbackOptions>
        <Section title={'Statistics'} />
        {this.isNotificationShow() ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </div>
    );
  }
}

export default App;
