import React from "react";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Navbar/Hero/page";
import Oneplatform from "./components/Oneplatform/page";
import Data from "./components/Data/page";
import Collaboration from "./components/Collaboration/page";
import Footer from "./components/Footer/page";
import Blockbrain from "./components/Blockbrain/page";
import Marque from "./components/Marque/page";

function Page() {
  return (
    <>
    <div className="h-[100%] w-[100%] bg-[#000] ">
      <div className="max-w-[1700px] m-auto">
     <Navbar/>
     <Hero/>
     <Marque/>
     <Oneplatform/>
     <Data/>
     <Collaboration/>
      </div>
     <Blockbrain/>
     <div className="max-w-[1700px] m-auto">
     <Footer/>
     </div>
    </div>
  
    </>
  );
}

export default Page;
