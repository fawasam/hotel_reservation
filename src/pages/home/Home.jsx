import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navabar/Navbar'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home