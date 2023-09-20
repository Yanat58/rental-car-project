import React from 'react';
import css from './Filter.module.css';
// import { useSelector } from 'react-redux';
import { brands } from 'utils/brand';
// import { selectCars} from 'redux/selectors';

export const Filter = () => {
  const [to, setTo] = React.useState('');
  const [from, setFrom] = React.useState('');
  // const cars = useSelector(selectCars);

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={css.filter__form} onSubmit={onSubmit}>
      <div className={css.select__block}>
        <div className={css.select__brand}>
          <label className={css.select__label} htmlFor="brand">
            Car brand
          </label>
          <select className={css.brand} name="brand" id="brand">
            <option className={css.option} value="">
              Enter the text
            </option>
            {brands &&
              brands?.map((brand, index) => (
                <option key={index} className={css.option} value="">
                  {brand}
                </option>
              ))}
          </select>
        </div>

        <div className={css.select__price}>
          <label className={css.select__label} htmlFor="price">
            Price/ 1 hour
          </label>
          <select className={css.price} name="price" id="price">
            <option className={css.option} value="">
              To $
            </option>
            <option className={css.option} value="">
              30
            </option>
            <option className={css.option} value="">
              40
            </option>
            <option className={css.option} value="">
              50
            </option>
          </select>
        </div>

        <div className={css.select__mileage}>
          <label className={css.select__label} htmlFor="mileage">
            Car mileage / km
          </label>
          <div className={css.mileage__wrap}>
            <input
              className={css.mileage__from}
              type="number"
              value={from}
              name="mileageFrom"
              required
              onChange={e => setFrom(e.currentTarget.value)}
            />
            <span className={css.span__input__from}>From</span>

            <input
              className={css.mileage__to}
              type="number"
              value={to}
              name="mileageTo"
              required
              onChange={e => setTo(e.currentTarget.value)}
            />
            <span className={css.span__input__to}>To</span>
          </div>
        </div>
      </div>
      <button className={css.btn__form} type="submit">
        Search
      </button>
    </form>
  );
};
