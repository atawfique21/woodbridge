import React from 'react'

const Specifics = () => {
  return (
    <div className='specifics'>
      <h2>Specifications</h2>
      <div className='single-specific'>
        <div className='sss'>
          <div className='section-1'>
            <ion-icon name="home-sharp"></ion-icon>
            <h3>House</h3>
          </div>
          <div className='section-2'>
            <div className='single-spec'>
              <ion-icon name="apps-sharp"></ion-icon>
              <h6>6 bedrooms</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="male-female-sharp"></ion-icon>
              <h6>2.5 Bathrooms</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="restaurant-sharp"></ion-icon>
              <h6>Full Kitchen</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="shirt-sharp"></ion-icon>
              <h6>Laundry Room</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="car-sport-sharp"></ion-icon>
              <h6>Free Parking</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="radio-sharp"></ion-icon>
              <h6>Free WiFi</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="thermometer-sharp"></ion-icon>
              <h6>Central A/C</h6>
            </div>
            <div className='single-spec'>
              <ion-icon name="keypad-sharp"></ion-icon>
              <h6>Keypad Locks</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='single-specific'>
        <div className='sss'>
          <div className='section-1'>
            <ion-icon name="information-circle-sharp"></ion-icon>
            <h3>Policies</h3>
          </div>
          <div className='section-2-4'>
            <div className='single-spec text'>
              <p>Quiet Hours</p>
              <h6>11 PM - 7 AM</h6>
            </div>
            <div className='single-spec text'>
              <p>Parties</p>
              <h6>Not Allowed</h6>
            </div>
            <div className='single-spec text'>
              <p>Extra Guest</p>
              <h6>$15</h6>
              <h6>per night</h6>
            </div>
            <div className='single-spec text'>
              <p>Cleaning Fee</p>
              <h6>$25</h6>
              <h6>per stay</h6>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Specifics;