import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import React from 'react';
import PropTypes from 'prop-types';
import car3 from 'images/car3.png';
import css from './CatalogList.module.css';

export const CatalogList = ({ cars }) => {
  console.log(cars);

  return (
    <div className={css.wrap}>
      <ul className={css.catalog__list}>
        {cars?.length > 0 ? (
          cars.map(car => <CatalogItem key={car.id} car={car} />)
        ) : (
          <div className={css.box}>
            <p className={css.text}>No followed cars</p>
            <img className={css.img} src={car3} alt="car" />
          </div>
        )}
      </ul>
    </div>
  );
};

CatalogList.prototype = {
  cars: PropTypes.array.isRequired,
};
