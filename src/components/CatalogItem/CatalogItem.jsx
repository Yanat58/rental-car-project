import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './CatalogItem.module.css';
import alternate from 'images/car.jpeg';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';
import { removeFromFavorites, addToFavorites } from 'redux/carSlice';

export const CatalogItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const favoriteCars = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const favoriteCheck = favoriteCars?.some(item => item.id === car.id);

  console.log(car);
  console.log(car.address);

  const city = car?.address.split(',')[1];
  const country = car?.address.split(',')[2];
  const functionalitiesNumber = Math.floor(Math.random() * 3);
  const n = functionalitiesNumber;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleFavorite = () => {
    if (favoriteCheck) {
      dispatch(removeFromFavorites(car));
      Notify.success('Deleted from favorites');
    } else {
      dispatch(addToFavorites(car));
      Notify.success('Added your favorites');
    }
  };

  return (
    <>
      {car && (
        <li className={css.catalog__item}>
          <div className={css.img__box}>
            <img
              className={css.img__car}
              src={car.img ? `${car.img}` : alternate}
              alt="car"
              loading="lazy"
            />
            <button
              className={css.btn__heard}
              type="button"
              onClick={handleToggleFavorite}
            >
              {favoriteCheck ? (
                <AiTwotoneHeart className={css.svg__heardfull} size={18} />
              ) : (
                <AiOutlineHeart className={css.svg__heard} size={18} />
              )}
            </button>
          </div>
          <div className={css.info}>
            <div className={css.car}>
              <p className={css.car__name}>
                {car.make}
                <span className={css.car__name__color}> {car.model}</span>,{' '}
                {car.year}
              </p>
              <p className={css.car__price}>{car.rentalPrice}</p>
            </div>
            <div className={css.location}>
              <p className={css.location__details}>{city}</p>
              <p className={css.location__details}>{country}</p>
              <p className={css.location__details}>{car.rentalCompany}</p>
            </div>
            <div className={css.detalis}>
              <p
                style={{ textTransform: 'capitalize' }}
                className={css.details__name}
              >
                {car.type}
              </p>
              <p className={css.details__name}>{car.model}</p>
              <p className={css.details__name}>{car.id}</p>
              <p className={css.details__name}>{car.functionalities[n]}</p>
            </div>
            <button
              className={css.btn__car}
              type="button"
              onClick={toggleModal}
            >
              <span className={css.btn__span}>Learn more</span>
            </button>
          </div>
          {showModal && <Modal onClose={toggleModal} car={car} />}
        </li>
      )}
    </>
  );
};

CatalogItem.prototype = {
  car: PropTypes.object.isRequired,
};
