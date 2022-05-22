import React from 'react'
import CountDown from '../../components/CountDown/CountDown'
import './Home.scss'
import Particles from "react-tsparticles";

import {BsChevronDoubleDown} from 'react-icons/bs'


function Home() { 
  return (
    <div className='home'>
       <Particles
        className="particles"
        options={{
          background: {
            color: {
              value: "black",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className='home-left-container'>
        <main className='home-dhanus-text-container'>
          <h1 className='home-dhanus-text-primary'>
            DHANUS<br />2k22
          </h1>
          <h2 className='home-dhanus-text-secondary'>Powered by <span>College of Engineering Kallooppara</span></h2>
        </main>
      </div>

      <div className='home-right-container'>
        <div className='home-right-countdown'>
          <CountDown deadline="June, 2, 2022" />
        </div>
      </div>
    </div>
  )
}

export default Home