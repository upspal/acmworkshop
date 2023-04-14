import React from 'react'
import logo from '../assets/logo.png';
import  "../style/navbar.css"


function navbar() {
  return (
    <div className='navbar_main_container'>
        <div className='logo_container'>
            <img src={logo} />
        </div>
    <div className='list_signup'>
        <div className='list_container'>
            <p>Product</p>
            <p>Resource</p>
            <p>Pricing</p>
            <p>Explore</p>
         </div>   
        <div className='signup_container'>
            <p>Sign Up</p>
        </div>
    </div>    
    </div>
      )
}

export default navbar