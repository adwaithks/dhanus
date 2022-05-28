import React from 'react'
import './EventCard.scss'

function EventCard({image, regAvail, regLink}) {
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
              <button onClick={() => {
                window.open(regLink, "_blank");
              }}>Register Now! 🤩</button>
            ) : (
              <button>See you there! 👋</button>
            )
          }
          </div>
    </div>
  )
}

export default EventCard