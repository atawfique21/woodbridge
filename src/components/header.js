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
          <a href="#rooms">Rooms</a>
          <a href="#nearby">Nearby</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="section-2">
        <a className="snip1372" href="#rooms">Book Now<i class="ion-ios-calendar-outline"></i></a>
      </div>
    </div>
  )
}

export default Header;