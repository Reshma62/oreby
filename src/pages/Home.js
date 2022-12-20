import React from 'react'
import Advertise from '../components/layout/Advertise';
import Banner from '../components/layout/Banner';
import BannerBottom from '../components/layout/BannerBottom';
import BestSeller from '../components/layout/BestSeller';
import NewArrival from '../components/layout/NewArrival';
import Promotional from '../components/layout/Promotional';
import SpecialOffers from '../components/layout/SpecialOffers';

const Home = () => {
  return (
    <>
      <Banner />
      <BannerBottom />
      <Advertise />
      <NewArrival />
      <BestSeller />
      <Promotional/>
      <SpecialOffers/>
    </>
  )
}

export default Home