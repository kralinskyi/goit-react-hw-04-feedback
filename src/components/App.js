import { useState } from 'react';
import css from './App.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onBtnClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const isNotificationShow = () => {
    return !good && !neutral && !bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + bad + neutral;
    const positive = (Number(good) + Number(neutral)) / Number(total);

    const positivePercentage = parseFloat(positive * 100).toFixed();
    return positivePercentage;
  };

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'} />
      <FeedbackOptions
        options={{ good, bad, neutral }}
        onLeaveFeedback={onBtnClick}
      ></FeedbackOptions>
      <Section title={'Statistics'} />
      {isNotificationShow() ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
    </div>
  );
};

export default App;
