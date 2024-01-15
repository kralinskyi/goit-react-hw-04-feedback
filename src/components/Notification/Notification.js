import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default Notification;
