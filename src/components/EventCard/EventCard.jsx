import React from 'react'
import './EventCard.scss'

function EventCard({image, regAvail}) {
  return (
    <div className='event-card'>
        {
          (regAvail) ? (
            <p className='reg-now'>Online Registration Available!</p>
          ) : (
            <p className='reg-later'>Spot Registration Only!</p>
          )
        }
        <div className='event-card-main'>
          <img src={image} alt="" />
          {
            (regAvail) ? (
              <button>Registration will open soon! 🤩</button>
            ) : (
              <button>See you there! 👋</button>
            )
          }
          </div>
    </div>
  )
}

export default EventCard