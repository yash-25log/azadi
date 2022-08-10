import React from 'react'
import './SubBanner.css'

const SubBanner = () => {
  const SubBannerdesign={
    backgroundImage: "url(banner.jpg)",
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};
  return (
    <div className="SubBanner" style={SubBannerdesign}>
      <div className="event" style={{fontSize:"40px"}}>Event</div>
      <div className="event-heading">
        <img src="" alt="" />
        <h1>Marathon Competition</h1>
      <br/>
      <h2>Only 5o Participats allowed!!</h2></div>
      <div className="register">
        <button className="button">Register Now</button>
      </div>


    </div>
  )
}

export default SubBanner