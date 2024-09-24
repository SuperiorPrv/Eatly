import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section3 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg  drop-shadow-lg overflow-auto  ">
      <div className=" flex justify-between mb-[20px] min-w-[709px]">
        <div className=""  data-aos="flip-left"   data-aos-duration="2000" >
          <h1 className="font-[700] text-[29px]">Pricing</h1>
          <p className="text-[#6E757C]">
            Affordable Basic <br /> & Pro Plans
          </p>
        </div>
        <div className="ml-[30px]" data-aos="flip-up" data-aos-duration="2000">
          <h1 className="font-[700] text-[29px]">Basic</h1>
          <p className="text-[#6E757C]">
            Completely 100% <br /> Free Plan
          </p>
        </div>
        <div className="ml-[30px]" data-aos="flip-right" data-aos-duration="2000" >
          <h1 className="font-[700] text-[29px]">Premium</h1>
          <p className="text-[#6E757C]">
            Amazing Premium <br /> Features Plan
          </p>
        </div>
      </div>
      <br />
      <hr className="min-w-[709px]" />
      <br />

      <div className=" flex justify-between min-w-[709px]   text-start mb-[20px] text-[#606060] text-[16px]">
        <div className=""></div>
        <div className="" data-aos="flip-left" data-aos-duration="2000">
          <h1 className="font-[700] text-[29px]">
            <span className="text-[14px] relative top-[-10px]">$</span> 0{" "}
            <span className="text-[#6E757C] text-[11px]">/month</span>
          </h1>
        </div>
        <div className="" data-aos="flip-right" data-aos-duration="2000">
          <h1 className="font-[700] text-[29px]">
            <span className="text-[14px] relative top-[-10px]">$</span> 5{" "}
            <span className="text-[#6E757C] text-[11px]">/month</span>
          </h1>
        </div>
      </div>
      <hr className="min-w-[709px]" />
      <br />


      <div className="">
       <ul data-aos="fade-right" data-aos-duration="2000" className="flex flex-wrap gap-[20px] min-w-[709px] items-center justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Support 24/7</li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>

       <ul data-aos="fade-left" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Fast Delivery</li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>

       <ul data-aos="fade-right" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>20% Off Food Deals</li>
        <li className="ml-[-46px]"><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>

       <ul data-aos="fade-left" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Transaction History</li>
        <li className="ml-[-49px]"><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>

       <ul data-aos="fade-right" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Weekend Deals</li>
        <li className="ml-[-20px]"><img className="w-[20px]" src="/src/pages/pricing/img/image.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>


       <ul data-aos="fade-left" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Dashboard Access</li>
        <li className="ml-[-48px]"><img className="w-[20px]" src="/src/pages/pricing/img/image.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>


       <ul data-aos="fade-right" data-aos-duration="2000" className="flex items-center min-w-[709px] justify-between mb-[20px] text-[#606060] text-[16px]"> 
        <li>Premium Group Access</li>
        <li className="mr-[76px]"><img className="w-[20px]" src="/src/pages/pricing/img/image.png" alt="" /></li>
        <li><img className="w-[20px]" src="/src/pages/pricing/img/Tick.png" alt="" /></li>
       </ul>


      </div><br /><hr className="min-w-[709px]" /><br />

      <div className="flex justify-around min-w-[709px]" data-aos="fade-up">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          Start Free
        </button>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          Start Pro
        </button>
      </div>
      
    </div>

  );
};

export default Section3;
