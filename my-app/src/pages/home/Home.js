import React from 'react'
import './Home.css'
import { NavBar } from '../../sections/Nav/NavBar'
import { Header } from '../../sections/Header/Header'
import Features from '../../sections/Features/Features'
import { NewArt } from '../../sections/NewArt/NewArt'
import { ProductSlider } from '../../components/ProductSlider/ProductSlider'
const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <Header />
        <Features />
        <NewArt />
        <ProductSlider />
        <ProductSlider />
    </div>
  )
}

export default Home