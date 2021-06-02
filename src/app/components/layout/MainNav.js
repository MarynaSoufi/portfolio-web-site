import React from 'react'
import {
  Link
} from "react-router-dom";
import * as Routes from '../../routes'
import './MainNav.css'
const MainNav = () => {
  return (
    <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <Link to ={Routes.HOME}>HOME</Link>
      </li>
      <li className="navigation__list-item">
        <Link to ={Routes.WORK}>WORK</Link>
      </li>
    </ul>
  </nav>
  )
}

export default MainNav;
