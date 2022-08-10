import React from 'react'
import './Banner.css'


const Banner = () => {
  const myStyle={
    backgroundImage: "url(banner.jpg)",
    // height:'80vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const SubBannerdesign={
  backgroundImage: "url(flag.jpg)",
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

  return (
    <div className="Banner" style={myStyle}>
        <div className="banner-left" >
            
             <h1 style={{fontSize:"60px"}}>Celebrating 75th <br/>INDEPENDENCE DAY<br/>Azadi Ka Amrit Mahotsav</h1>
        </div>
        <div className="banner-right">
            <div>
              <img src="bannerphoto.jpg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Banner