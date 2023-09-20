import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

ButtonLoadMore.prototype = {
  onClick: PropTypes.func.isRequired,
};
