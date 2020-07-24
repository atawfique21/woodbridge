import React from 'react'
import bed1 from './bed1.jpg'
import bed1bath from './bed1bath.jpg'
import bed1outside from './bed1outside.jpg'
import calendar from './calendar.png'
import Carousel from 'react-bootstrap/Carousel'

const Body = () => {
    return (
        <div className="body">
            <div className="room">
                <h2>Bedroom #1</h2>
                <Carousel interval='9999999999'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bed1}
                            alt="First bedroom"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bed1bath}
                            alt="Bathroom for first bedroom"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bed1outside}
                            alt="Outside first bedroom"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='info-header'>
                    <h3>Pricing</h3>
                    <h3>Availablity</h3>
                </div>
                <div className='info'>
                    <div className='pricing'>
                        <h3>$38</h3>
                        <h6>A NIGHT</h6>
                    </div>
                    <div className='availablity'>
                        <img src={calendar}></img>
                    </div>
                </div>
                <button class="snip1372" id="second">Book Room #1<i class="ion-ios-calendar-outline"></i></button>
            </div>
            <div className="room">
                <h2>Bedroom #2</h2>
            </div>
            <div className="room">
                <h2>Bedroom #3</h2>
            </div>
            <div className="room">
                <h2>Bedroom #4</h2>
            </div>
            <div className="room">
                <h2>Bedroom #5</h2>
            </div>
            <div className="room">
                <h2>Bedroom #6</h2>
            </div>
        </div>
    )
}

export default Body;