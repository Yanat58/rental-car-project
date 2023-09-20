import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import car3 from 'images/car3.png';
import css from './CatalogList.module.css';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

const COUNT_CARS = 8;

export const CatalogList = ({ cars }) => {
  const [next, setNext] = useState(COUNT_CARS);

  const loadMore = () => {
    setNext(next + COUNT_CARS);
  };

  return (
    <div className={css.wrap}>
      <ul className={css.catalog__list}>
        {cars?.length > 0 ? (
          cars
            ?.slice(0, next)
            ?.map(car => <CatalogItem key={car.id} car={car} />)
        ) : (
          <div className={css.box}>
            <p className={css.text}>No followed cars</p>
            <img className={css.img} src={car3} alt="car" />
          </div>
        )}
      </ul>

      {next < cars?.length && <ButtonLoadMore onClick={loadMore} />}
    </div>
  );
};

CatalogList.prototype = {
  car: PropTypes.array.isRequired,
};
