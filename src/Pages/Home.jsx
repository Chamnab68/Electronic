import React from 'react'
import Hero from '../Components/Hero'
import ShopCategories from '../Components/ShopCategories'
import BestDeal from '../Components/BestDeal'
import Getdiscount from '../Components/Getdiscount'
import PopularProduct from '../Components/PopularProduct'
import Herotwo from '../Components/Herotwo'
import TodayBestdeal from '../Components/TodayBestdeal'
import Herothree from '../Components/Herothree'
import TrendingProduct from '../Components/TrendingProduct'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDeal/>
      <Getdiscount/>
      <PopularProduct/>
      <Herotwo/>
      <TodayBestdeal/>
      <Herothree/>
      <TrendingProduct/>
      <Footer/>
    </div>
  )
}

export default Home
