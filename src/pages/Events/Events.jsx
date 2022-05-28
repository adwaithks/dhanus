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
            <EventCard image="./photoshop.jpeg" 
              regAvail={true}
              regLink="https://docs.google.com/forms/d/e/1FAIpQLSdLPEX_7Dw47eFLRHtg5FOsrW2KLM9Aeav-sSxqlbGhYK-KGg/viewform"
            />
            <EventCard image="./codetech.jpeg"
              regAvail={true}
              regLink="https://docs.google.com/forms/d/e/1FAIpQLSeIfp5B25i5uPKiyWu1sD6UiPvJJhxDkkoYTg4aLF-henjr4w/viewform"
            />
            <EventCard image="./cktdebug.jpeg" 
                regAvail={true} 
                regLink="https://docs.google.com/forms/d/e/1FAIpQLSclhQUDF6v5hgrkedmrkh9EqPQiF71SFjLz6jORo8LNW_r2qg/viewform?usp=sf_link" 
            />      
            <EventCard image="./techitout.jpg" 
              regAvail={true}
              regLink="https://docs.google.com/forms/d/e/1FAIpQLSc-FPBcTWvCMHFjkmVXmmasI_153qaYRbvd605oL5VRqiafhw/viewform"
            />
            <EventCard image="./hackathon.jpeg" />
            <EventCard image="./cpuassemble.jpg" />
            <EventCard image="./disandassemble.jpg" />
            <EventCard image="./oorja.jpeg" />
            <EventCard image="./ejam.jpg" />
            <EventCard image="./gaming.jpg" />
            <EventCard image="./paperpresentation.jpg" />
            <EventCard image="./uiuxdesign.jpeg" />
            <EventCard image="./iris.jpg" />
            <EventCard image="./workshop.jpg" />
            <EventCard image="./fastandfurious.jpg" />
            <EventCard image="./engineeringdesign.jpg" />
        </div>
    </section>
  )
}

export default Events