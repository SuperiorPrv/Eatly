import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const SaleBlogComponent = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    
    <div data-aos="fade-left"  data-aos-duration="400"  className="w-[1248px] h-[349px]  m-[auto] relative mt-[50px]">
<div className="bg-purple-700 h-[287px] rounded-[20px]">
    <h1 className="text-[72px] font-[800] text-white  ml-[97px] pt-[30px]">GET 50%</h1>
    <div className="w-[452px] h-[70px] bg-[white] rounded-[14px] ml-[97px] flex justify-evenly items-center   ">
        <input className="w-[223px] h-[25px]   " placeholder=" Enter Your Email Address" type="text" />
        <button  className="w-[136px] h-[55px] btSale bg-purple-800 font-[500] text-white rounded-[14px]">subscribe</button>
    </div>
</div>
<img className="absolute top-[50px] left-[890px]" src="/src/pages/blog/img/Food Image.png" alt="" />
    </div>
    </>
  )
}
