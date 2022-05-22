import React from 'react'
import './EventCard.scss'

function EventCard({image}) {
  return (
    <div className='event-card'>
          <img src={image} alt="" />
    </div>
  )
}

export default EventCard