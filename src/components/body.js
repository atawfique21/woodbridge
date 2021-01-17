import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Body = (props) => {
  return (
    <div className="body">
      {props.rooms.map((room, key) =>
        <div className="room" key={key}>
          <h2>{room.name}</h2>
          <Carousel interval='5000'>
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
          <div className='info'>
            <div className='info-container'>
              <h2>Pricing</h2>
              <h3 style={{ marginBottom: '-1.5%' }}><h6>STARTING AT</h6></h3>
              <h3>${room.base_price}<h6>A NIGHT</h6></h3>
              <h2>Details</h2>
              <div className="room-details">
                <div className="single-room-detail">
                  <ion-icon name="bed-sharp"></ion-icon>
                  <h5>Bed Size</h5>
                  <h4>{room.bed_size}</h4>
                </div>
                <div className="single-room-detail">
                  <ion-icon name="people-circle-sharp"></ion-icon>
                  <h5>Max Guests</h5>
                  <h4>{room.max_guests}</h4>
                </div>
                <div className="single-room-detail smaller">
                  <ion-icon name="pricetag-sharp" style={{ fontSize: '3.5vh', margin: '0.25vh 0' }}></ion-icon>
                  <h5>Wknd Pricing</h5>
                  <h4 className='single-room-detail-wkndpricing'>${room.base_price += 5}</h4>
                </div>
              </div>
            </div>
            <div className='info-container'>
              <h2>Availablity</h2>
              <Calendar
                events={[]}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                localizer={localizer}
              />
              <div className='unavailable'>
                <h6>Calendar Currently Unavailable</h6>
                <h6>Please Check Airbnb Calendar for Availablity</h6>
              </div>
              {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23A79B8E&amp;ctz=America%2FNew_York&amp;src=OG9ydWk3ZXBubDBxZjFhYWt0dnEyNWd2bWYxc3I2YTFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%238E24AA&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1" style={{ "border-width": "0", "width": "100%", "height": "100%", "frameborder": "0", "scrolling": "no" }}></iframe> */}
            </div>
          </div>
          <a class="snip1372" href={room.link} target="_blank" rel="noopener noreferrer" id="second">Book Room #{key + 1}<i class="ion-ios-calendar-outline"></i></a>
        </div>
      )}
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  )
}

export default Body;