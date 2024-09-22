import Container from '@/components/shared/Container/Container'
import ii1 from './images/image copy 4.png'
import ii2 from './images/image copy 5.png'
import ii3 from './images/image copy 6.png'
import Bookmark_sec3 from "./images/Bookmark_sec3.png"
import sec3_1 from "./images/sec3_1.png"
import img1 from "./images/Star.png"
import img3 from "./images/Food Image.png"
import img4 from "./images/Icon (2).png"
import img5 from "./images/Add.png"
import img6 from "./images/Food Image (1).png"
import img7 from "./images/Food Image (2).png"
import img10 from "./images/Illustration 01.png"
import img11 from "./images/Plus.png"
import img12 from "./images/Plus (1).png"
import { Link } from 'react-router-dom'

const Menu1 = () => {
  return <>
    <Container>
      <div className='flex p-[70px] gap-[50px] md:block'>
        <div>
          <img src={ii1} alt="" />
          <img className='my-[30px] m-auto w-[20%]' src={ii2} alt="" />
          <input className='w-[93%] bg-[#EDEDED] text-[#AAABBA] p-[20px_80px] rounded-2xl mb-[20px]' type="search" name="" placeholder="Search" />
          <div className='w-[93%] border-[3px] border-[solid] border-[#6C5FBC] rounded-xl'>
            <button className='w-[50%] text-[#6C5FBC] py-[15px]'>Food</button>
            <button className='w-[50%] bg-[#6C5FBC] py-[15px] text-white'>Resturent</button>
          </div>
        </div>
        <div className='p-[25px] shadow-[0px_0px_10px_gray] mt-[40px] rounded-xl md:p-[20px]'>
          <h3 className='text-[20px] font-semibold mb-[20px]'>Category</h3>
          <img src={ii3} alt="" />
          <h3 className='text-[20px] font-semibold my-[10px]'>Sort By</h3>
          <div className='flex justify-between my-[15px] items-center'>
            <p className='text-[#ACADB9] mr-[10px]'>Recomended</p>
            <span className='text-[#6C5FBC]'>Fast Delivery</span>
          </div>
          <p className='text-[#ACADB9] my-[10px]'>Most Popular</p>
          <h3 className='text-[20px] font-semibold mt-[20px] mb-[10px]'>Price</h3>
          <input className='w-[100%] bg-[#6C5FBC] mb-[20px]' type="range" name="" id="" />
          <div className='flex w-[100%] justify-between text-[#C2C3CB] mb-[20px] gap-[5px] flex-wrap'>
            <p>$0</p>
            <p>$25</p>
            <p>$50</p>
            <p>$100</p>
            <p>$500</p>
            <p>$1000</p>
          </div>
          <button className='w-[100%] bg-[#6C5FBC] text-white py-[15px] rounded-xl'>Apply</button>
        </div>
      </div>
    </Container>
    <Container>
    <h1 className='text-[35px] font-semibold ml-[70px]'>Our Top <span className='text-[#6C5FBC] font-semibold'>Restaurant</span></h1>
       <section className='mt-[20px] flex justify-center gap-[100px] p-[0px_10px] overflow-auto px-[60px] mb-[40px]'>
      <Link to={"/menu2"}>
        <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
          <img src={sec3_1} alt="" />
          <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
          <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Chicken King</h1>
          <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
            <p className='text-gray-400'>24min • 4.8</p>
            <img className='w-[20px]' src={Bookmark_sec3} alt="" />
          </div>
        </div>
      </Link>
      <Link to={'/menu2'}>
        <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
          <img src={sec3_1} alt="" />
          <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7C5BA] text-[#FB471D] bg-[#F7C5BA]'>Healthy</button>
          <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Burger King</h1>
          <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
            <p className='text-gray-400'>24min • 4.9</p>
            <img className='w-[20px]' src={Bookmark_sec3} alt="" />
          </div>
        </div>
      </Link>
      <Link to={'/menu2'}>
        <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
          <img src={sec3_1} alt="" />
          <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
          <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Chicken King</h1>
          <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
            <p className='text-gray-400'>24min • 5.0</p>
            <img className='w-[20px]' src={Bookmark_sec3} alt="" />
          </div>
        </div>
      </Link>
    </section>
    </Container>
    <Container>
      <h1 className='text-[35px] font-semibold ml-[70px] mb-[30px]'>Our Top <span className='text-[#6C5FBC] font-semibold'>Dishes</span></h1>
      <div className="gap-[20px] px-[70px] mb-[50px]"> 
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
    </Container>
    <Container>
    <menu className='mb-[120px]'>
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
    </Container>
  </>
}

export default Menu1