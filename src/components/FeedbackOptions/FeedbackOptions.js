import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <div className={css.feedback}>
      {keys.map(option => {
        return (
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
            className={css.btn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
