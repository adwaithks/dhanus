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
            <EventCard image="./hackathon.jpeg" />
            <EventCard image="./pubg.jpeg" />
            <EventCard image="./expo.jpg" />
            <EventCard image="./cktdebug.jpg" />
            <EventCard image="./jam.jpg" />
            <EventCard image="./fitit.jpg" />
            <EventCard image="./treasurehunt.jpg" />
        </div>
    </section>
  )
}

export default Events