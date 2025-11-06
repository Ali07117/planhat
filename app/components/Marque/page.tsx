"use client";
import React from 'react';
import Marquee from "react-fast-marquee";

function Marque() {
  return (
    <div className="bg-black mx-[300px] mx-200 marque-container mt-[180px]">
    <Marquee
      speed={50}
      pauseOnHover
      gradient={true}
      gradientColor={"black"}   // black gradient
      gradientWidth={180}         // increase to make fade visible
    >
      <div className="flex items-center">
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
       <img className='mx-8' src="/assets/nasdq.svg" alt="" />
       <img className='mx-8' src="/assets/ivanti.svg" alt="" />
      </div>
    </Marquee>
  </div>
  );
}

export default Marque;
