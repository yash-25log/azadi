import React from 'react'
import './MainPage.css'
import Banner from '../Components/Banner/Banner'
import SubBanner from '../Components/SubBanner/SubBanner'

const MainPage = () => {
  return (
    <div className='MainPage'>
        <div className='Banners'>
            <Banner/>
        </div>
        <div className='SubBanners'>
            <SubBanner/>
        </div>
        

    </div>
  )
}

export default MainPage