import React from 'react'
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
    const activeClass = ({ isActive }) =>
      isActive ? `${css.active}` : `${css.navLink}`;
  
  return (
    <>
       <ul className={css.nav__list}>
          <li>
            <NavLink className={activeClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to="/catalog">
             Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to="/favorites">
             Favorites
            </NavLink>
          </li>
        </ul>
    </>
  )
}


