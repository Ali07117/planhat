import React from 'react';

function Blockbrain() {
  return (
    <>
    <div className='w-[624px] margin-topp block-brain flex flex-col m-auto items-center mt-[150px] '>
      <p className='font-[900] font-alt text-[#FFFFFF] tracking-[1.5px] text-center'>BLOCKBRAIN</p>
      <p className='font-[500] text-[16px] mt-[30px] font-alt  text-[#9E9D9B] text-center'>"We love how Planhat’s AI-native platform gives the Blockbrain team a single source of truth across Sales and Customer Success."</p>
      <p className='font-[500] text-[16px] font-alt  text-[#FFFFFF] mt-[15px] text-center'>Antonius Gress</p>
      <p className='font-[400] text-[14px] font-sans  text-[#9E9D9B] mt-[5px] text-center'>CEO</p>
    </div>
    <div className='h-[400px] hidden mobile-earth blockbrain-image-text bg-[linear-gradient(90deg,#000000_29.71%,rgba(0,0,0,0)_90.53%)] px-[100px] flex items-center pt-[80px] mt-[120px]' style={{ backgroundImage: "linear-gradient(90deg,#000000 1.71%,rgba(0,0,0,0) 20.53%), url('/assets/mobileearth.svg')", backgroundSize: "cover", backgroundPosition: "top",
  }}>
    <div className='w-[475px]'>
    <p className='font-sans font-[500] block-brain-image-heading text-[#FFFFFF] text-[28.9px]'>Create exceptional experiences</p>
    <p className='text-[19px] font-[400] block-brain-image-sub-heading font-sans text-[#FFFFFF] mt-[15px]'>We're powering over 2.6 million successful customer relationships.</p>
    <button className='text-[#FFFFFF] text-[14px] font-sans font-[500] mt-[40px] h-[48px] w-[190px] pl-[20px] py-[8px] text-left border-[1px] border-[#FFFFFF3C] rounded-[100px] '>Speak to an expert</button>
    </div>
  </div>
    <div className='h-[400px] laptop-earth blockbrain-image-text bg-[linear-gradient(90deg,#000000_29.71%,rgba(0,0,0,0)_90.53%)] px-[100px] flex items-center mt-[120px]' style={{ backgroundImage: "linear-gradient(90deg,#000000 1.71%,rgba(0,0,0,0) 20.53%), url('/assets/blockbrainimg.svg')", backgroundSize: "cover", backgroundPosition: "center",
  }}>
    <div className='w-[475px]'>
    <p className='font-sans font-[500] block-brain-image-heading text-[#FFFFFF] text-[28.9px]'>Create exceptional experiences</p>
    <p className='text-[19px] font-[400] block-brain-image-sub-heading font-sans text-[#FFFFFF] mt-[15px]'>We're powering over 2.6 million successful customer relationships.</p>
    <button className='text-[#FFFFFF] text-[14px] font-sans font-[500] mt-[40px] h-[48px] w-[190px] pl-[20px] py-[8px] text-left border-[1px] border-[#FFFFFF3C] rounded-[100px] '>Speak to an expert</button>
    </div>
  </div>
    </>
  );
}

export default Blockbrain;
