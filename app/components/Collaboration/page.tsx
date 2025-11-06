import React from 'react';

function Collaboration
() {
  return (
    <div className=' mx-[100px] one-platform'>
        <div className='flex margin-topp mt-[180px] flex-col one-platform-heading-container items-center gap-[35px] mt-[100px] bg-[linear-gradient(270.25deg,rgba(0,0,0,0.4)_0%,#000000_100%)]'>
            <p className='font-[500] text-[12px] bg-[linear-gradient(90deg,#FFA270_0%,#BF4200_100%)] bg-clip-text text-transparent'>COLLABORATION</p>
      <p className='font-[500] one-platform-heading text-[54.5px] leading-[80%] font-sans bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent text-center leading-[110%]'>Eliminate Siloes,<br /> Maximize Collaboration.</p>
      <p className='font-alt font-[400] collaboration-sub-heading one-platform-sub-heading font-[16px] text-[#FFFFFF] bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent w-[650px] text-center'>Consolidate your data and align your Customer Success and Sales teams around processes that drive impact.</p>
    </div>
    <div className="card -bg-[red] -h-[600px] mt-[80px] border border-[1px] border-[#FFFFFF1C] rounded-[16px]  -h-[518px] bg-[linear-gradient(180deg,rgba(26,25,28,0)_0%,#1A191C_100%)]">
        <div className='flex flex-col items-center'>
        <img src="/assets/collabroationimg.png" alt="" />
        <div className='h-[1px] w-[100%] bg-[#FFFFFF1C]'></div>
        <p className='font-[400] text-[14px] collabroation-bottom-text mt-[35px] text-[#9E9D9B] font-alt text-center w-[700px] pb-[25px] text-center'>Create cross-functional strategy documents where you execute your strategy, and collaborate with customers in Deal Rooms, sharing mutual action plans (MAPs) that evolve into Onboarding plans.</p>
        </div>
    </div>
      
    </div>
  );
}

export default Collaboration
;
