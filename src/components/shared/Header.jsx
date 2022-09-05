import React from 'react'
import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
              Login
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases">
              Purchases
            </NavLink>
          </li>
          <li className="header__item">
            <h2 className="header__link">Cart</h2>
          </li>
        </ul>
      </nav>
    </header>
       
  )
}

export default Header