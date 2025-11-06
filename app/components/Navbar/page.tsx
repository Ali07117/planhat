import React from 'react';

function Navbar() {
  return (
    <div className='h-[60px] w-[100%] px-[200px] nav-container -bg-[red] flex justify-between items-center '>
      <img src="/assets/navlogo.svg" alt="" />
      <button className='rounded-[100px] cursor-pointer py-[8px] nav-button px-[16px] bg-[#D44A00] text-[14px] font-[500] font-alt'>Request a demo</button>
    </div>
  );
}

export default Navbar;
