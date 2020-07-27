import React from 'react'
import bed1 from '../assets/bed1.jpg'
import bed1bath from '../assets/bed1bath.jpg'
import bed1outside from '../assets/bed1outside.jpg'
import calendar from '../assets/calendar.png'
import Carousel from 'react-bootstrap/Carousel'

const Body = (props) => {
    return (
        <div className="body">
            {props.rooms.map(room =>
                <div className="room">
                    <h2>{room.name}</h2>
                    <Carousel interval='3000'>
                        {room.photos.map(photo =>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100 slider-img'
                                    src={photo.source}
                                    alt={photo.alt}
                                />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            )}
            <div className="room">
                <h2>Bedroom #1</h2>
                <Carousel interval='3000'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={bed1}
                            alt="First bedroom"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={bed1bath}
                            alt="Bathroom for first bedroom"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={bed1outside}
                            alt="Outside first bedroom"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='info'>
                    <div className='info-container'>
                        <h2>Pricing</h2>
                        <h3 style={{ marginBottom: '-1.5%' }}><h6>STARTING AT</h6></h3>
                        <h3>$39<h6>A NIGHT</h6></h3>
                        <h2>Details</h2>
                        <div className="room-details">
                            <div className="single-room-detail">
                                <ion-icon name="bed-sharp"></ion-icon>
                                <h5>Bed Size</h5>
                                <h4>Queen</h4>
                            </div>
                            <div className="single-room-detail">
                                <ion-icon name="people-circle-sharp"></ion-icon>
                                <h5>Max Guests</h5>
                                <h4>Two</h4>
                            </div>
                            <div className="single-room-detail smaller">
                                <ion-icon name="pricetag-sharp" style={{ fontSize: '3.5vh', margin: '0.25vh 0' }}></ion-icon>
                                <h5>Wknd Pricing</h5>
                                <h4 className='single-room-detail-wkndpricing'>$44</h4>
                            </div>
                        </div>
                    </div>
                    <div className='info-container'>
                        <h2>Availablity</h2>
                        <img src={calendar}></img>
                    </div>
                </div>
                <button class="snip1372" id="second">Book Room #1<i class="ion-ios-calendar-outline"></i></button>
            </div>
            <div className="room">
                <h2>Bedroom #2</h2>
            </div>
        </div>
    )
}

export default Body;