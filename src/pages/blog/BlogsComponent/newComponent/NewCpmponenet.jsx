import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


function AutoPlay() {
  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
      <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between flex-wrap "> 
          <div className=" w-[200px] m-[auto]" >
            <img className="ml-[160px]" src="/src/pages/menu/menu1/images/Icon (2).png" alt="" />
            <img src="/src/pages/menu/menu1/images/Food Image.png" className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[300px] m-[auto] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src="/src/pages/menu/menu1/images/Star.png" alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between w-[300px] m-[auto]">
            <h1 className="text-[#323142] text-[20px]  font-bold ml-[0px]">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src="/src/pages/menu/menu1/images/Add.png" alt="" /></button>
          </div>
        </div> 
        
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
