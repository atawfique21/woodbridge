import React from 'react'
import logo from './logo2.png'

const Header = () => {
    return (
        <div className="header">
            <div className="section-1">
                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                </div>
                <nav>
                    <a href="#">Rooms & Pricing</a>
                    <a href="#">About us</a>
                    <a href="#">Frequently Asked Q's</a>
                </nav>
            </div>

            <div className="section-2">
                {/* <button>
                    Book Now
                </button> */}
                <button class="snip1372">Book Now<i class="ion-ios-calendar-outline"></i></button>
            </div>
        </div>
    )
}

export default Header;