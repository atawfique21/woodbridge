import React from 'react'
import logo from '../assets/logo2.png'

const Header = () => {
  return (
    <div className="header">
      <div className="section-1">
        <div className="logo">
          <img src={logo} alt="Logo"></img>
        </div>
      </div>
      <div className='section-mid'>
        <nav>
          <a href="#rooms">Rooms & Pricing</a>
          <a href="#attractions">Attractions</a>
          <a href="#faq">Frequently Asked Q's</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="section-2">
        <button class="snip1372">Book Now<i class="ion-ios-calendar-outline"></i></button>
      </div>
    </div>
  )
}

export default Header;