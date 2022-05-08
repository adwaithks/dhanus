import React from 'react'
import './DhanusPosters.scss'

function DhanusPosters() {
  return (
    <div className='dhanus-posters'>
        <div className='dhanus-posters-head'>
            <h1>Eat Sleep <span className='rave'>Rave</span> Repeat!</h1>
        </div>
        <div className='dhanus-posters-container'>
            <div className='dhanus-poster'>
                <img src="./dhanus_poster1.svg" alt="" />
            </div>
            <div className='dhanus-poster'>
                <img src="./dhanus_poster2.svg" alt="" />
            </div>
            <div className='dhanus-poster'>
                <img src="./dhanus_poster3.svg" alt="" />
            </div>
        </div>
        <div>
            <p></p>
        </div>
    </div>
  )
}

export default DhanusPosters