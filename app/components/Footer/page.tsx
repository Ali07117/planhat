import React from 'react';

function Footer() {
    return (
        <div className='mx-[100px] footer-container  mt-[80px]'>
            <div className='flex items-center justify-between footer-box h-[500px]'>
                <div className="left h-[100%] footer-link-main  w-[70%] -bg-[red] ">
                    <div className='flex footer-links-container flex-wrap gap-[90px]'>


                        <div>
                            <p className='text-[11px] font-alt font-[300] text-[#9E9D9B]'>planhat</p>
                            <div className='flex flex-col gap-[15px] mt-[30px]'>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">About</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Careers</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Press</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Partnerships</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Open</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Contact</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Legal</a>
                            </div>
                        </div>
                        <div>
                            <p className='text-[11px] font-alt font-[300] text-[#9E9D9B]'>Solutions</p>
                            <div className='flex flex-col gap-[15px] mt-[30px]'>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">CRM</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">CSP</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">PSA</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Cisco CX</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Processes</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">ADP</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Philanthropy</a>
                            </div>
                        </div>
                        <div>
                            <p className='text-[11px] font-alt font-[300] text-[#9E9D9B]'>Platform</p>
                            <div className='flex flex-col gap-[15px] mt-[30px]'>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Features</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Views</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Workflows</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Metrics</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Automations</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Integrations</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">AI</a>
                            </div>
                        </div>
                        <div>
                            <p className='text-[11px] font-alt font-[300] text-[#9E9D9B]'>Resources</p>
                            <div className='flex flex-col gap-[15px] mt-[30px]'>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Pricing</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Editorial</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Events</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Help Center</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Developers</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">RFP</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Changelog</a>
                            </div>
                        </div>
                        <div>
                            <p className='text-[11px] font-alt font-[300] text-[#9E9D9B]'>Customers</p>
                            <div className='flex flex-col gap-[15px] mt-[30px]'>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Impact Studies</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Software</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Business Services</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Connected Businesses</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Financial Services</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">Healthcare & Life Sciences</a>
                                <a className='font-[500] font-alt text-nowrap text-[14px] text-[#FFFFFF]' href="">IT Services</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[48px] flex items-center footer-links-under-container gap-[80px]'>
                        <p className='text-[36px] font-[500] leading-[110%] font-sans footer-hidden-text hidden'>Know them. Grow them.</p>
                        <div className="left footer-links-under-container-left">
                            <input className=' footer-input w-[460px] py-[12px] outline-none border-b border-b-[1px] border-b-[#575551]   placeholder:text-[#9E9D9B] font-alt text-[12px] font-[400]' placeholder='Email Address*' type="email" name="" id="" />
                            <div className='flex items-center mt-[22px]'>
                                <input className='rounded-[4px] h-[16px] cursor-pointer w-[16px] bg-[#F6F6F8] border-none outline-none appearance-none checked:bg-[#4F46E5] ' type="checkbox" name="" id="" />
                                <p className='font-[400] ml-[10px] font-alt text-[10px] text-[#9E9D9B]'>I agree to Planhat processing my personal data in accordance with Planhat's <span><a className='font-[400] font-alt text-[10px] text-[#958D7E]' href="">Privacy Policy</a></span></p>
                            </div>
                        </div>
                        <div className="footer-links-under-container-right">
                            <button className='rounded-[100px] cursor-pointer py-[12px] px-[18px] bg-[#FFFFFF] text-[#000000] text-[14px] font-[500] font-alt'>Subscribe to our newsletter</button>
                        </div>
                    </div>
                </div>
                <div className="right h-[100%] flex footer-left  -bg-[green] w-[30%] ">
                    <div className='w-[321px]'>

                        <p className='font-[400] font-alt text-[#9E9D9B] text-[11px]'>Recognized as a world-leader by</p>
                        <div className='flex items-end mt-[30px]'>

                            <div className='flex items-center gap-[15px]'>
                                <img src="/assets/gartner.svg" alt="" />
                                <img src="/assets/idc.svg" alt="" />
                                <img src="/assets/g2.svg" alt="" />
                            </div>
                            <div className=' ml-[10px] h-[28px] w-[2px] bg-[white]'></div>
                            <p className='ml-[10px] font-[400] font-alt text-[10px] text-[#FFFFFF]'>800+ reviews</p>
                        </div>
                        <div className='h-[1px] bg-[#9E9D9B40] mt-[30px]'></div>
                        <p className='text-[#9E9D9B] font-[500] font-alt mt-[40px] text-[12px]'>Planhat is built to keep your data safe. We put privacy and security front and centre, so you don’t have to.</p>
                        <div className='mt-[40px] gap-[12px] flex items-center'>
                            <img src="/assets/iso.svg" alt="" />
                            <img src="/assets/soc.svg" alt="" />
                            <img src="/assets/ccpa.svg" alt="" />
                            <img src="/assets/gdpr.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-sans font-[500] mt-[20px] footer-hidden-text-2 text-[103.7px] text-[#FFFFFF] leading-[116px]'>Know them. Grow them.</p>
            <div className='flex items-center footer-bottom justify-between mt-[20px] pb-[60px]'>
                <div className='flex footer-bottom-2'>
                    <p className='font-[500] mr-[25px] font-alt text-[14px] text-[#FFFFFF]'>© 2025 Planhat inc.</p>
                    <div className='flex items-center footer-bottom-links gap-[24px]'>
                        <p className='font-[500] cursor-pointer font-alt text-[14px] text-[#FFFFFF]'>Status</p>
                        <p className='font-[500] cursor-pointer font-alt text-[14px] text-[#FFFFFF]'>Terms of Service</p>
                        <p className='font-[500] cursor-pointer font-alt text-[14px] text-[#FFFFFF]'>Privacy Policy</p>
                        <p className='font-[500] cursor-pointer font-alt text-[14px] text-[#FFFFFF]'>Cookie Policy</p>
                    </div>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <p className='font-[500] font-alt text-[14px] text-[#FFFFFF]'>Follow us</p>
                    <img className='cursor-pointer' src="/assets/linkedin.svg" alt="" />

                </div>
            </div>

        </div>
    );
}

export default Footer;
