import React from 'react';

const About = () => {
  return (
    <div className='about-us-container'>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className='about-us specifics'>
        {/* <div className='profile-picture'>
          <ion-icon name="person-sharp"></ion-icon>
        </div> */}
        <div className='profile-description'>
          {/* <h2>Hi, I'm Chris!</h2> */}
          <h3>About this space</h3>
          <h4>I love telling the story of Woodbridge because it is such a special one.</h4>
          <h4>
            When I first purchased the property, age and wear truly showed. Initially built
            in the 1960's, everything from the floors to the walls were outdated.
            I quickly realized I would have to completely start from the ground up to meet my
            expectations for this project.
            Fast forward a couple of years and from the studs in the walls to
            the appliances, everything has been changed out. Currently, the home feels and looks
            modern. From beautiful hardwood flooring to comfortable central air-conditioning,
            you would not be able to see the resemblance comparing old pictures to the current ones.
          </h4>
          <h4>I know you'll love staying at Woodbridge, it's my personal guarentee.</h4>
          <h3>About me</h3>
          <h4>
            I'm an honest, humble, and hard-working married man. Who likes any type of outdoor adventures that
            include spending time with my wife and 3 kids.
          </h4>
          <h3>About my team</h3>
          <h4>
            My team consists of Carolyn and Abir. Both of them are co-hosts and help me
            manage reservations to ensure guests get the most comfortable stay possible. Beside this, Carolyn
            handles room and general house cleanings. She is extremely detail-oriented and ensures the space is
            as clean as possible, especially due to COVID-19.
            On the other hand, Abir manages our online presence and answers most messages through the Airbnb App.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default About;