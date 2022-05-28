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
            <EventCard image="./circuitdebogue.jpg" regAvail={true} />
            <EventCard image="./photoshop.jpeg" regAvail={false} />
            <EventCard image="./hackathon.jpeg" />
            <EventCard image="./cpuassemble.jpg" />
            <EventCard image="./disandassemble.jpg" />
            <EventCard image="./ejam.jpg" />
            <EventCard image="./gaming.jpg" />
            <EventCard image="./techitout.jpg" />
            <EventCard image="./paperpresentation.jpg" />
            <EventCard image="./uiuxdesign.jpeg" />
            <EventCard image="./workshop.jpg" />
            <EventCard image="./fastandfurious.jpg" />
            <EventCard image="./engineeringdesign.jpg" />
        </div>
    </section>
  )
}

export default Events