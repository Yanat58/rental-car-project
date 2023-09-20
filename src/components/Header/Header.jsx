import logo from 'images/logo1.png';
import css from './Header.module.css';
import { Navigation } from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <img
          className={css.logo__img}
          src={logo}
          alt="logo"
          width={180}
          height={180}
        />

        <h1 className={css.logo}>UkrRentalCar</h1>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
