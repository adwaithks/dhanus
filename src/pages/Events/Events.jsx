import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import './Events.scss'

function Events() {
  return (
    <section className='events'>
        <div className='events-head-container'>
            <h1>EVENTS</h1>
        </div>
        <div className='events-container'>
        <h1 className='coming-soon'>Coming Soon...</h1>
        </div>
    </section>
  )
}

export default Events