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
          <h2>NEARBY ATTRACTIONS</h2>
          <div className='single-specific'>
            <div className='sss'>
              <div className='section-1'>
                <ion-icon name="ticket-sharp"></ion-icon>
                <h3>Attractions</h3>
              </div>
              <div className='attraction-details'>
                <ul>
                  <li><p>Greater Cleveland Aquarium | 9 Min Drive</p></li>
                  <li><p>Cleveland Metroparks Zoo | 4 Min Drive</p></li>
                  <li><p>Rock & Roll Hall Of Fame | 10 Min Drive</p></li>
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
                  <li><p>FirstEnergy Stadium (Cleveland Browns) | 10 Min Drive</p></li>
                  <li><p>Progressive Field (Cleveland Indians) | 7 Min Drive</p></li>
                  <li><p>Rocket Mortgage FieldHouse (Cleveland Cavaliers) | 8 Min Drive</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attractions;