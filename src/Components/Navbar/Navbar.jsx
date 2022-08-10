import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src="https://img.freepik.com/free-vector/stylish-15-august-independence-day-india-background_1017-39349.jpg?size=626&ext=jpg&uid=R75902323" alt="" style={{height :'120px',width:'120px'}}/>
      </div>
      {/* menu */}
      <div className="menu">
        <div className="menu-items">Home</div>
        
        <div className="menu-items">Events</div>
        <div className="menu-items">Pledge</div>
        <div className="menu-items">History</div>
        <div className="menu-items">Donations</div>
      </div>

      <div className="register-login">
        <div className="register">
          <button className="button">Register</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar