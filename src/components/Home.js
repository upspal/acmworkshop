import React, { Component } from 'react'
import '../style/Home.css'
import image from '../assets/dashboard.png';

export class Home extends Component {
  render() {
    return (   
      <div className='home_main_container'>Home
        <div className='home_button'>
        <p>Just Launched Ghost 3.0</p>    
        </div>      
        <div className='home_heading'>
        <p>Turn your audience<br/> <span className= 'business'>into a business</span></p>    
        </div>
        <div className='home_background'></div>      
        <div className='home_image'><img src={image}/></div>      
      </div>
    )
  }
}

export default Home