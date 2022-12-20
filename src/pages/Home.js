import React from 'react'
import Advertise from '../components/layout/Advertise';
import Banner from '../components/layout/Banner';
import BannerBottom from '../components/layout/BannerBottom';
import NewArrival from '../components/layout/NewArrival';

const Home = () => {
  return (
    <>
      <Banner />
      <BannerBottom />
      <Advertise />
      <NewArrival/>
    </>
  )
}

export default Home