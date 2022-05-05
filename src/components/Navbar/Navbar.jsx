import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
          <img src="./logo_navbar.png" alt="" />
        </div>
        <div className='navbar-options'>  
          <h2 className='navbar-option'>EVENTS</h2>
          <h2 className='navbar-option'>CONTACT US</h2>
        </div>
    </div>
  )
}

export default Navbar