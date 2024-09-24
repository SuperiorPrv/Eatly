import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section3 = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='flex items-center justify-between flex-wrap'>
        <div className="" data-aos="fade-right"data-aos-duration="1000">
            <h1 className='text-[50px] hover:scale-110 duration-200 font-[700]'>Control <span className='text-[#6C5FBC]  font-[700]'>Purchases</span> <br /> Via Dashboard</h1>
            <div className="">
                <div className="flex items-center gap-[20px] p-[10px] hover:scale-110 duration-200 mt-[50px] drop-shadow-lg rounded-[20px] border-[1px] w-[300px]">
                    <img src="/src/pages/pricing/img/Image.png" alt="" />
                    <div className="">
                        <h1 className='text-[#323142] text-[20px] font-[700]'>Chicken Hell</h1>
                        <p className='text-[#4448]'>On The Way</p>
                    </div>
                </div>

                <div className="flex items-center gap-[20px] p-[10px] hover:scale-110 duration-200 mt-[20px] drop-shadow-lg rounded-[20px] border-[1px] w-[300px]">
                    <img src="/src/pages/pricing/img/Image.png" alt="" />
                    <div className="">
                        <h1 className='text-[#323142] text-[20px] font-[700]'>Chicken Hell</h1>
                        <p className='text-[#4448]'>On The Way</p>
                    </div>
                </div>

                <div className="flex items-center gap-[20px] p-[10px] hover:scale-110 duration-200 mt-[20px] drop-shadow-lg rounded-[20px] border-[1px] w-[300px]">
                    <img src="/src/pages/pricing/img/Image.png" alt="" />
                    <div className="">
                        <h1 className='text-[#323142] text-[20px] font-[700]'>Chicken Hell</h1>
                        <p className='text-[#4448]'>On The Way</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="" data-aos="fade-left" data-aos-duration="1000">
            <img src="/src/pages/pricing/img/savings.png" className='max-w-[530px] sm:w-[340px] mt-[20px] block m-auto hover:scale-110 duration-200' alt="" />
        </div>
    </div>
  )
}

export default Section3