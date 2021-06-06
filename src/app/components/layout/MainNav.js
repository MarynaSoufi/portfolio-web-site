import React from 'react'
import {
  NavLink
} from "react-router-dom";
import * as Routes from '../../routes'
import './MainNav.css'
const MainNav = () => {
  return (
    <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <NavLink exact to ={Routes.HOME}  activeClassName="active" >HOME</NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink exact to ={Routes.WORK}  activeClassName="active" >WORK</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default MainNav;
