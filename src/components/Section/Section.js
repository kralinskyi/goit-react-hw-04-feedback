import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title }) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
