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
            <EventCard image="./circuitdebogue.jpg" 
                regAvail={true} 
                regLink="https://docs.google.com/forms/d/e/1FAIpQLSclhQUDF6v5hgrkedmrkh9EqPQiF71SFjLz6jORo8LNW_r2qg/viewform?usp=sf_link" 
            />
            <EventCard image="./codetech.jpeg"
              regAvail={true}
              regLink="https://docs.google.com/forms/d/e/1FAIpQLSeIfp5B25i5uPKiyWu1sD6UiPvJJhxDkkoYTg4aLF-henjr4w/viewform"
            />
            <EventCard image="./photoshop.jpeg" 
              regAvail={true}
              regLink="https://surveyheart.com/form/6291e2181503c414bc714b79"
            />
            <EventCard image="./hackathon.jpeg" />
            <EventCard image="./cpuassemble.jpg" />
            <EventCard image="./disandassemble.jpg" />
            <EventCard image="./oorja.jpeg" />
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