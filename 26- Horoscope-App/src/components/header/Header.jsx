import React from 'react'
import "./Header.scss"
import logo from "../img/logo.png"


const Header = () => {
    return (

      <header>

          <img src={logo} alt="" />

          <ul>
            <li><a href="#">horoscope</a></li>
            <li><a href="#">daily</a></li>
            <li><a href="#">tarot</a></li>
            <li><a href="#">article</a></li>
            <li><a href="#">contact</a></li>
          </ul>
            
      </header>
    
    )
}

export default Header