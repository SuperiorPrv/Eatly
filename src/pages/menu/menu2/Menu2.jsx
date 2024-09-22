import Container from "@/components/shared/Container/Container"
import img from "./img/Mask Group (1).png"
import img1 from "./img/Star.png"
import img2 from "./img/Bookmark.png"
import img3 from "./img/Food Image.png"
import img4 from "./img/Icon (2).png"
import img5 from "./img/Add.png"
import img6 from "./img/Food Image (1).png"
import img7 from "./img/Food Image (2).png"
import img10 from "./img/Illustration 01.png"
import img11 from "./img/Plus.png"
import img12 from "./img/Plus (1).png"

const Menu2 = () => {
  return <>
    <Container>
      <img className="m-auto" src={img} alt="" /> <br /> <br />
      <div className="flex justify-around items-center  flex-wrap">
        <h1 className="text-[#323142] text-[40px] font-bold">The Chicken King</h1>

        <div className="flex ] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
          <h1 className="text-gray-700">4.8</h1></div>
        <img src={img2} alt="" />
      </div>
       <br /><br />
      <div className="gap-[20px]"> 
        <h1 className="text-[#323142] text-[40px] ml-[40px]  font-bold">Popular 🔥</h1> <br /><br /> <br /><br />

        <div className="flex justify-around  flex-wrap gap-[50px]">
        <div className="flex flex-col justify-between flex-wrap">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img3} className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img6} className="h-[215px]" alt="" />
            <h1 className="text-red-500 bg-red-200 w-[100px] p-[0px_10px] rounded-xl text-[20px]">Trending</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Swe Dish</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
          34min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.9</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$19<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img7} className="h-[215px]" alt="" />
            <h1 className="text-green-500  bg-green-200 w-[100px] p-[0px_10px] rounded-xl text-[20px]">Supreme</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img3} className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img6} className="h-[215px]" alt="" />
            <h1 className="text-red-500 bg-red-200 w-[100px] p-[0px_10px] rounded-xl text-[20px]">Trending</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Swe Dish</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
          34min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.9</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$19<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        </div>
      </div>
       <br /><br />
      <div className="gap-[20px]"> 
        <h1 className="text-[#323142] text-[40px] ml-[40px]  font-bold">Chicken Vegetables</h1> <br /><br /> <br /><br />

        <div className="flex   flex-wrap gap-[50px]">
        <div className="flex flex-col justify-between">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img3} className="" alt="" />
            <h1 className="text-yellow-500 bg-yellow-200 w-[100px]  rounded-xl  p-[0px_10px] text-[20px]">Healthy</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Chicken Hell</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
            24min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.8</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$12<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        <div className="flex flex-col justify-between ml-[50px]">
          <div>
            <img className="ml-[160px]" src={img4} alt="" />
            <img src={img6} className="h-[215px]" alt="" />
            <h1 className="text-red-500 bg-red-200 w-[100px] p-[0px_10px] rounded-xl text-[20px]">Trending</h1>
            <h1 className="text-[#323142] text-[25px]  font-bold">Swe Dish</h1>
          </div>
          <div className="flex w-[15%] justify-around">
          <h1 className="text-gray-600">
          34min •</h1>
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
            <h1 className="text-gray-600">4.9</h1></div>
          <div className="flex justify-between">
            <h1 className="text-[#323142] text-[20px]  font-bold">$19<span className="text-[15px] text-gray-600">.99</span></h1>
          <button>  <img src={img5} alt="" /></button>
          </div>
        </div> 
        </div>
      </div>

      <menu>
        <img className="ml-[58.5%]" src={img10} alt="" />
        <h1 className="text-[30px] text-center font-bold"> Frequently Asked  <br />
          <span className="text-[#6C5FBC]"> Questions</span></h1>
        
 <br /><br /><br />

        <div className="m-auto w-[80%]">
          <div className="flex justify-between text-[20px] font-bold">  
          <h1>How long does delivery take?</h1> 
          <button><img src={img11} alt="" /></button>
          </div> <br />
          <h1 className="text-[#686868] text-[16px]">You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</h1> <br /> <br />
          <hr className="bg-gray-400 h-[1px] border-none" /> <br />

           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>How Does It Work ?</h1> 
            <button><img src={img12} alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>How does your food delivery service work?</h1> 
            <button><img src={img12} alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>What payment options do you accept?</h1> 
            <button><img src={img12} alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>Do you offer discounts or promotions?</h1> 
            <button><img src={img12} alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
        </div>
      </menu> 
      <br /><br /><br /><br />
  </Container>
  </>
}

export default Menu2