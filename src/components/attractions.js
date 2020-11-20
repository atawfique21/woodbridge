import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Attractions = (props) => {
  return (
    <div className='attractions-container'>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className='attractions specifics'>
        <div className='carousel'>
          <Carousel interval='20000' className='attraction-carousel'>
            {props.attractions.map(attraction =>
              <Carousel.Item>
                <img
                  className='d-block w-100 slider-img'
                  src={attraction.source}
                  alt={attraction.alt}
                />
                <Carousel.Caption>
                  <h3 className='attraction-title'>{attraction.title}</h3>
                  <p className='attraction-caption'>{attraction.caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
        <div className='nearby specifics'>
          <h2>NEARBY</h2>
          <div className='nearby-container'>
            <div className='single-specific'>
              <div className='sss'>
                <div className='section-1'>
                  <ion-icon name="map-sharp"></ion-icon>
                  <h3>Attractions</h3>
                </div>
                <div className='attraction-details'>
                  <ul>
                    <li>Greater Cleveland Aquarium | 9 Min Drive</li>
                    <li>Cleveland Metroparks Zoo | 4 Min Drive</li>
                    <li>Rock & Roll Hall Of Fame | 10 Min Drive</li>
                    <li>Westside Market | 5 Min Drive</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='single-specific'>
              <div className='sss'>
                <div className='section-1'>
                  <ion-icon name="american-football-sharp"></ion-icon>
                  <h3>Sports</h3>
                </div>
                <div className='attraction-details'>
                  <ul>
                    <li>FirstEnergy Stadium (Cleveland Browns) | 10 Min Drive</li>
                    <li>Progressive Field (Cleveland Indians) | 7 Min Drive</li>
                    <li>Rocket Mortgage FieldHouse (Cleveland Cavaliers) | 8 Min Drive</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='single-specific'>
              <div className='sss'>
                <div className='section-1'>
                  <ion-icon name="location-sharp"></ion-icon>
                  <h3>Locations</h3>
                </div>
                <div className='attraction-details'>
                  <ul>
                    <li>The Flats / Steelyards | 5 Min Drive</li>
                    <li>Ohio City | 9 Min Drive</li>
                    <li>Edgewater Park/Beach | 13 Min Drive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attractions;