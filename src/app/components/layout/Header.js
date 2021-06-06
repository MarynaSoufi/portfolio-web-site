import React from 'react'
import { MainNav } from './'
import './Header.css'
import photo from '../../../profile.png'
const Header = () => {
  return (
    <header className="header container">
      <a href="/">
        <img className="header__logo" src={photo}></img>

      </a>
      
      <MainNav/>
     
    </header>
  )
}

export default Header;
