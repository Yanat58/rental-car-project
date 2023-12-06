import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import alternate from 'images/car.jpeg';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ car, onClose }) => {
  console.log(car);
  const {
    id,
    year,
    rentalPrice,
    rentalConditions,
    model,
    mileage,
    make,
    type,
    img,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    address,
    accessories,
  } = car;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const condition = rentalConditions.split('\n');
  const age = condition[0].split(' ').slice(-1).join('');

  const mile = (mileage / 1000).toString().replace('.', ',');

  return createPortal(
    <div onClick={handleClickBackdrop} className={css.modalBackdrop}>
      <div className={css.modal__container}>
        <div className={css.img__box}>
          <img
            className={css.modal__img}
            src={img ? `${img}` : alternate}
            alt="car"
            loading="lazy"
          />
        </div>

        <div className={css.info}>
          <div className={css.data__car}>
            <p className={css.car__name}>
              {make}
              <span className={css.car__name__color}>{model}</span>, {year}
            </p>

            <div className={css.location}>
              <p className={css.location__details}>{city}</p>
              <p className={css.location__details}>{country}</p>
              <p className={css.location__details}>id: {id}</p>
              <p className={css.location__details}>Year: {year}</p>
              <p className={css.location__details}>Type: {type}</p>
            </div>
            <div className={css.detalis}>
              <p className={css.details__name}>
                Fuel Consumption: {fuelConsumption}
              </p>
              <p className={css.details__name}>Engine Size: {engineSize}</p>
            </div>
            <p className={css.data__car__text}>{description}</p>
          </div>
          <div className={css.data__car}>
            <p className={css.data__car__title}>
              Accessories and functionalities:
            </p>
            <div className={css.location}>
              <p className={css.location__details}>{accessories[0]}</p>
              <p className={css.location__details}>{accessories[1]}f</p>
              <p className={css.location__details}>{accessories[2]}</p>
            </div>
            <div className={css.detalis}>
              <p className={css.details__name}>{functionalities[0]}</p>
              <p className={css.details__name}>{functionalities[1]}</p>
              <p className={css.details__name}>{functionalities[2]}</p>
            </div>
          </div>
          <div className={css.data__car}>
            <p className={css.data__car__title}>Rental Conditions:</p>
            <div className={css.rental}>
              <p className={css.rental__info}>
                Minimum age : <span className={css.rental__span}>{age}</span>
              </p>
              <p className={css.rental__info}>{condition[1]}</p>
              <p className={css.rental__info}>{condition[2]} </p>
              <p className={css.rental__info}>
                Mileage: <span className={css.rental__span}>{mile}</span>
              </p>
              <p className={css.rental__info}>
                Price: <span className={css.rental__span}>{rentalPrice}</span>
              </p>
            </div>
          </div>
          <a href="tel:+380730000000">
            <button className={css.btn__rental}>Rental car</button>
          </a>
        </div>
        <button className={css.btn__close} type="button" onClick={onClose}>
          <AiOutlineClose className={css.btn__close__icon} size={24} />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
