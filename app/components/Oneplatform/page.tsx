'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Oneplatform() {
  return (
    <div className='mx-[200px] one-platform'>
        <div className='flex mt-[180px] margin-topp flex-col one-platform-heading-container items-center gap-[35px] mt-[100px] bg-[linear-gradient(270.25deg,rgba(0,0,0,0.4)_0%,#000000_100%)]'>
            <p className='font-[500] text-[12px] bg-[linear-gradient(90deg,#FFA270_0%,#BF4200_100%)] bg-clip-text text-transparent'>ONE PLATFORM</p>
      <p className='font-[500] one-platform-heading text-[54.5px] leading-[80%] font-sans bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent text-center'>Sell. Renew. Grow.</p>
      <p className='font-alt font-[400] font-[16px] one-platform-sub-heading text-[#FFFFFF] bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent w-[650px] text-center'>Planhat Sales CRM is built for SMB and Mid-Market businesses who need a single platform to generate pipeline, close deals and drive long-term customer success.</p>
    </div>
    <div className=' justify-center  mt-[100px] one-platform-cards flex gap-[40px]'>
    {/* <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}   // 👈 No gap at all
        slidesPerView={3}
        // pagination={{ clickable: true }}
        breakpoints={{
            100: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
    > */}
      {/* <SwiperSlide> */}
      <div className="card max-w-[375px] border border-[1px] border-[#FFFFFF1C] rounded-[16px]   bg-[linear-gradient(180deg,rgba(26,25,28,0)_0%,#1A191C_100%)]">
        <div className='flex card-left justify-end'>
        <img className='card-img' src="/assets/card1.svg" alt="" />
        </div>
        <div className='py-[34px] card-right card-under px-[40px]'>
        <p className='text-[14.3px] font-[500] text-[#FFFFFF] font-sans text-center'>AI Automation</p>
        <p className='font-[400]  text-[14px] mt-[15px] text-[#9E9D9B] font-alt text-center'>Connect any LLM to our market-leading data platform and use your data as context to power AI Automations. Inject AI into day-to-day Sales and Customer Success workflows to accelerate and magnify your teams' output. Research contacts, update fields, summarise data and much more.</p>
        </div>
    </div>
      {/* </SwiperSlide> */}
      {/* <SwiperSlide> */}
      <div className="card max-w-[375px] border border-[1px] border-[#FFFFFF1C] rounded-[16px]   bg-[linear-gradient(180deg,rgba(26,25,28,0)_0%,#1A191C_100%)]">
      <div className='flex card-left justify-center'>
        <img className='card-img' src="/assets/card2.svg" alt="" />
        </div>
        <div className='py-[34px] card-right card-under px-[40px]'>
        <p className='text-[14.3px] font-[500] text-[#FFFFFF] font-sans text-center'>Deal Management</p>
        <p className='font-[400] text-[14px] mt-[15px] text-[#9E9D9B] font-alt text-center'>From prospecting to closing, run deal management from our AE-friendly interface. Log calls in one click, see how forecasts change and develop over time, automate outreach and manage complex project-based sales processes. Planhat CRM adapts effortlessly to your methodology.</p>
        </div>
    </div>
      {/* </SwiperSlide> */}
      {/* <SwiperSlide> */}
      <div className="card max-w-[375px] ggg border border-[1px] border-[#FFFFFF1C] rounded-[16px]   bg-[linear-gradient(180deg,rgba(26,25,28,0)_0%,#1A191C_100%)]">
      <div className='flex card-left justify-center'>
        <img className='card-img' src="/assets/card3.svg" alt="" />
        </div>
        <div className='py-[34px] card-right card-under px-[40px]'>
        <p className='text-[14.3px] font-[500] text-[#FFFFFF] font-sans text-center'>Customer Success</p>
        <p className='font-[400] text-[14px] text-[#9E9D9B] mt-[15px] font-alt text-center'>Drive NRR with dedicated CS tooling, rather than hacking it together a legacy CRM. Onboard customers with built-in project management, create AI powered health scores, monitor product usage and drive adoption – all while triggering custom alerts to keep your team proactive and engaged. </p>
        </div>
    </div>
      {/* </SwiperSlide> */}
    {/* </Swiper> */}
    

    </div>
    </div>
  );
}

export default Oneplatform;
