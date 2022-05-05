import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'></div>
        <div className='navbar-options'> 
            <button className='navbar-contact-us-btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar