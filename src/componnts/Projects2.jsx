import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import botiga from '../imges/botiga.png';
import criativo from '../imges/criativo.png';
import fior from '../imges/fior.png';
import khamsat from '../imges/khamsat.png';
import land from '../imges/rosa-land.png'
import time from '../imges/time zone.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function App() {
  return (
    
    <>
        {/* <Project /> */}

      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><a href="https://botiga-xi.vercel.app/"><img src={botiga} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://cute-liger-d4aa79.netlify.app/"><img src={khamsat} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://fiore-rho.vercel.app/"><img src={fior} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://rose-land.vercel.app/"><img src={land} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://criativo-livid.vercel.app/"><img src={criativo} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://time-zone-gamma.vercel.app/"><img src={time} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://time-zone-gamma.vercel.app/"><img src={time} alt="" /></a></SwiperSlide>
        

      </Swiper>
    </>
  );
}
