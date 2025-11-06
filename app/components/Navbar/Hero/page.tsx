import React from 'react';

function Hero() {
  return (
    <div className='mx-[100px] hero-container'>
        <div className='flex flex-col hero-heading-gap items-center gap-[45px] mt-[100px] bg-[linear-gradient(270.25deg,rgba(0,0,0,0.4)_0%,#000000_100%)]'>
        <p className='font-[500] text-center hero-main-text text-[71.4px] leading-[100%] font-sans bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent '>Beautiful. Intuitive. Powerful.</p>
        <p className='font-alt font-[400] font-[16px] text-[#FFFFFF] bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent'>The AI-Native CRM built to acquire lifelong customers.</p>
        </div>
        <div className='flex h-[600px] hero-box mt-[50px]' >
            <div className="left -bg-[red] hero-left w-[60%]  h-[100%] bg-[linear-gradient(90deg,#000000_29.71%,rgba(0,0,0,0)_90.53%)]"  style={{backgroundImage:"linear-gradient(270deg,#000000 10.71%,rgba(0,0,0,0) 90.53%), url('/assets/heroimg.svg')",}}>
                {/* <img src="/assets/heroimg.svg" alt="" /> */}
            </div>
            <div className="right -bg-[green] hero-right w-[40%] pt-[30px] h-[100%]">
                <div className='flex gap-[6px] items-center'>
                    <img className='h-[22px] w-[20px]' src="/assets/reviewlogo.svg" alt="" />
                    <img className='h-[16px] w-[16px]' src="/assets/reviewstar.svg" alt="" />
                    <img className='h-[16px] w-[16px]' src="/assets/reviewstar.svg" alt="" />
                    <img className='h-[16px] w-[16px]' src="/assets/reviewstar.svg" alt="" />
                    <img className='h-[16px] w-[16px]' src="/assets/reviewstar.svg" alt="" />
                    <img className='h-[16px] w-[16px]' src="/assets/reviewstar.svg" alt="" />
                    <p className='text-[#F2F2F2] text-[14px] font-[400] font-alt ml-[5px]'>700+ reviews</p>
                </div>
                    <p className='font-[500] font-sans text-[29.8px] text-[#FFFFFF] hero-right w-[400px] leading-[38px] mt-[13px]'>Modern teams choose Planhat, not Attio.</p>
                    <input className='mt-[20px] h-[42px] block w-[400px] hero-right rounded-[12px] border-[1px] border-[#FFFFFF1F] outline-none bg-[#141414] px-[15px] font-[400] font-[16px] font-alt ' placeholder="First name*" type="text" />
                    <input className='mt-[7px] h-[42px] block w-[400px] hero-right rounded-[12px] border-[1px] border-[#FFFFFF1F] outline-none bg-[#141414] px-[15px] font-[400] font-[16px] font-alt ' placeholder="Last name*" type="text" />
                    <input className='mt-[7px] h-[42px] block w-[400px] hero-right rounded-[12px] border-[1px] border-[#FFFFFF1F] outline-none bg-[#141414] px-[15px] font-[400] font-[16px] font-alt ' placeholder="Email*" type="email" />
                    <div className='flex mt-[7px] items-center gap-[6px]'>
                    <input className='h-[42px] last-input w-[198px] placeholder:text-[#D2D0CB] rounded-[12px] border-[1px] border-[#FFFFFF1F] outline-none bg-[#141414] px-[15px] font-[400] font-[16px] font-alt ' placeholder="India (भारत)" type="text" />
                    <input className='h-[42px] last-input w-[198px] placeholder:text-[#D2D0CB] rounded-[12px] border-[1px] border-[#FFFFFF1F] outline-none bg-[#141414] px-[15px] font-[400] font-[16px] font-alt ' placeholder="+91" type="number" />
                    </div>
                    <button className='rounded-[100px] cursor-pointer w-[400px] hero-right mt-[20px] py-[11.6px] px-[16px] bg-[#D44A00] text-[14px] font-[500] font-alt'>Request a demo</button>
                    <p className=' mt-[20px] w-[400px] hero-right text-[#9E9D9B] font-[400] text-[10px] font-alt'>By submitting this form I agree that Planhat may collect, process and retain my data pursuant to its <span className='text-[#D0CABE] font-[400] font-alt text-[10px] cursor-pointer'>Privacy Policy</span></p>
                    <p className=' mt-[15px] w-[400px] hero-right text-[#9E9D9B] font-[400] text-[10px] font-alt'>1. Top-ranked in the IDC MarketScape: Worldwide Customer Success Applications 2024 Vendor Assessment.</p>
                    <p className=' mt-[15px] w-[400px] hero-right text-[#9E9D9B] font-[400] text-[10px] font-alt'>2. Leader in the Gartner Magic Quadrant for Customer Success Management Platforms. Gartner, “Magic Quadrant for Customer Success Management Platforms” Michael Maziarka, Maria Marino, Jennifer MacIntosh, John Quaglietta, Daniel Hawkyard, 28 October 2024.</p>
            </div>
        </div>
        <div className='flex flex-col z-[3] relative items-center mt-[100px]'>
            <img className='absolute laptop-comma left-[21%] top-[-50px] z-[-1]' src="/assets/laptop-comma.svg" alt="" />
            <img className='absolute hidden mobile-comma left-[300px] top-[-40px] z-[-1]' src="/assets/mobile-comma.svg" alt="" />
            <p className='font-[500] font-sans text-center text-[53px] hero-bottom-text pb-[10px] tracking-[-1.2px] w-[563px] text-[#FFFFFF] leading-[66px] bg-[linear-gradient(90deg,#d1d1d1_40%,rgba(0,0,0,0)_150%)] bg-clip-text text-transparent'>Planhat built the first next-generation CRM</p>
            <div className='flex items-center gap-[10px] mt-[10px]'>
                <p className='font-[500] font-sans text-[14.6px] text-[#9E9D9B]'>— Google Cloud</p>
                <img src="/assets/googlecloud.svg" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
