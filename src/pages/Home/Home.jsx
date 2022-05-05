import React from 'react'
import CountDown from '../../components/CountDown/CountDown'
import './Home.scss'


function Home() { 
  return (
    <section className='home'>
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
          <CountDown deadline="May, 30, 2022" />
        </div>
      </div>
    </section>
  )
}

export default Home