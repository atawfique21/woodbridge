import React from 'react';

const About = () => {
  return (
    <div className='about-us-container'>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className='about-us specifics'>
        <div className='profile-picture'>
          <ion-icon name="person-sharp"></ion-icon>
        </div>
        <div className='profile-description'>
          {/* <h2>Hi, I'm Chris!</h2> */}
          <h3>About this space</h3>
          <h4>I love telling the story of Woodbridge because it is such a special one.
          When I first purchased the property, age and wear truly showed. Initially built
          in the 1960's, from the walls to the flooring, everything was outdated.
          I quickly realized I would have to completely start from the ground up to meet my
          expectations for this project. Fast forward a couple of years and from the studs in the walls to
          the appliances, everything had been changed out. Currently, the home feels and looks
          modern. From beautiful hardwood flooring to comfortable central air-conditioning,
          you would not be able to see the resemblance comparing old pictures to the current ones.
          </h4>
          <h3>About me</h3>
          <h3>About my team</h3>
        </div>
      </div>
    </div>
  )
}

export default About;