import React from 'react'

const Section = (props) => {
  return (
    <div className={props.class} id={props.id}>
      <h2>{props.title}</h2>
      <span className='devider'></span>
      <h5>{props.sub}</h5>
    </div>
  )
}

export default Section;