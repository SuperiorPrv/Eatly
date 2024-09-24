import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Section1 = () => {

    useEffect(() => {
      AOS.init();
    }, [])

  return (
   <div className="h-[700px]">
     <div  className='bg-[#5C4EAE] h-[237px] items-center '   >
        <div className="flex  gap-[10px] font-[600] text-[29px] m-auto w-[260px] relative top-[30px] h-[55px] text-white">
            <img src="/src/pages/pricing/img/Vector.png" alt="" />
            <h1>Our Pricing</h1>
        </div>
       <div className="block m-auto">
       <img className='block m-auto'   data-aos-duration="2000" data-aos="fade-down" src="/src/pages/pricing/img/17-Home V1 1.png" alt="" />
       </div>
    </div><br />
   </div>
  )
}

export default Section1