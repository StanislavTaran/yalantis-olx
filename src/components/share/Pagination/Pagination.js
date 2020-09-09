import React from 'react';
import RcPagination from 'rc-pagination';
import propTypes from 'prop-types';
import CircleButton from '../buttons/CircleButton/CircleButton';
import styles from './Pagination.module.css';
import prevArrow from '../../../images/prevArrow.svg';
import nextArrow from '../../../images/nextArrow.svg';

export default function Pagination({ currentPage, total, perPage, onChange }) {
  return (
    <RcPagination
      className={styles.paginationList}
      simple
      showTitle={false}
      current={currentPage}
      total={total}
      pageSize={perPage}
      onChange={onChange}
      prevIcon={
        <CircleButton>
          <img src={prevArrow} alt="prev"></img>
        </CircleButton>
      }
      nextIcon={
        <CircleButton>
          <img src={nextArrow} alt="next"></img>
        </CircleButton>
      }
    />
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  perPage: propTypes.number.isRequired,
};
