import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options, statistic, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.list}>
        {options.map((name, i) => {
          return (
            <li key={i + 1} className={css.listItem}>
              {name}: {statistic[name]}
            </li>
          );
        })}

        <li key={'total'} className={css.listItem}>
          Total: {total}
        </li>
        <li key={'positivePercentage'} className={css.listItem}>
          Positive feedback: {positivePercentage()}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
