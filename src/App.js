import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainPage from './Page/MainPage'
const App = () => {
  return (
    <div className='App'>
      <div className='App-inner'>
        <Navbar/>
        <MainPage/>
        {/* <MainPage/> */}
      </div>
    </div>
  )
}

export default App