import React from 'react'
import Featured from '../../components/featured/Featured'
import Featuredprpty from '../../components/featuredProperties/Featuredprpty'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navabar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <Featuredprpty/>
        <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home