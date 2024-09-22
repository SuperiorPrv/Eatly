import Container from '@/components/shared/Container/Container'
import "../../App.css"
import React from 'react'
import Home_hero from "./images/Home_hero.png"
import home_img1 from "./images/home_img1.png"
import Mobile from "./images/Mobile.png"
import strelka_sec3 from "./images/strelka_sec3.png"
import Bookmark_sec3 from "./images/Bookmark_sec3.png"
import sec3_1 from "./images/sec3_1.png"

import sec4_1 from "./images/sec4_1.png"
import sec4_2 from "./images/sec4_2.png"
import sec4_3 from "./images/sec4_3.png"


const Home = () => {
  return (<>
    <Container>
   
   
    <section className='flex justify-center flex-wrap gap-[100px] items-center mt-[30px]'>
      <div>
        <p className='text-gray-400 sm:text-[10px]'>------ OVER 1000 USERS</p>
        <h1 className='font-bold text-[55px] sm:text-[35px]'>Enjoy Foods All <br />Over The <span className='text-[#5C4EAE]'>World</span></h1>
        <p className='text-gray-400 sm:text-[10px]'>EatLy help you set saving goals, earn cash back offers, Go <br /> to disclaimer for more details and get paychecks up to two <br /> days early. Get a <span className='text-[#5C4EAE]'>$20 bonus</span>.</p><br />
        <div className='flex gap-[10px]'>
          <button className='border bg-[#5C4EAE] p-[12px_15px] rounded-[12px] text-white'>Get Started</button>
          <button className='border-[2px] border-[#5C4EAE] p-[12px_20px] rounded-[12px] text-[#5C4EAE]'>Go Pro</button>
        </div><br />
        <img src={home_img1} alt="" />
      </div>
      <div>
        <img className='sm:w-[300px] sm:mt-[-50px]' src={Home_hero} alt="" />
      </div>
    </section>


    <section className='bg flex justify-center gap-[100px] flex-wrap mt-[100px] text-white p-[40px_10px]'>
      <div className='text-center'>
        <h1 className='text-[40px] font-black'>10K+</h1>
        <p className='text-gray-300'>Satisfied Costumers <br /> All Great Over The World </p>
      </div>
      <div className='text-center'>
        <h1 className='text-[40px] font-black'>4M</h1>
        <p className='text-gray-300'>Healthy Dishes Sold <br /> Including Milk Shakes Smooth</p>
      </div>
      <div className='text-center'>
        <h1 className='text-[40px] font-black'>99.99%</h1>
        <p className='text-gray-300'>Reliable Customer Support <br /> We Provide Great Experiences</p>
      </div>
    </section>


    <section className='flex justify-center flex-wrap items-center gap-[200px] mt-[100px]'>
      <div>
        <img className='sm:w-[300px]' src={Mobile} alt="" />
      </div>
      <div className='sm:mt-[-50px]'>
        <h1 className='font-black text-[55px] sm:text-[35px]'>Premium <span className='text-[#5C4EAE]'> Quality</span> <br /> For Your Health</h1><br />
        <p className='text-gray-400 sm:text-[10px]'>Premium quality food is made with ingredients that <br /> are packed with essential vitamins, minerals.</p><br />
        <p className='text-gray-400 sm:text-[10px]'>These foods promote overall wellness by support <br /> healthy digestion and boosting immunity</p><br />
        <button className='border bg-[#5C4EAE] p-[12px_15px] rounded-[12px] text-white'>Download</button>
        <img className='sm:w-[100px] ml-[120px] mt-[-10px]' src={strelka_sec3} alt="" />
      </div>
    </section>

    <hr className='mt-[100px]' />

      <h1 className='mt-[100px] text-center text-[40px] sm:text-[30px] font-bold'>Our Top <span className='text-[#5C4EAE]'>Restaurants</span></h1>
    <section className='mt-[20px] flex justify-center gap-[100px] p-[0px_10px] overflow-auto '>
      <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
        <img src={sec3_1} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Chicken King</h1>
        <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
          <p className='text-gray-400'>24min • 4.8</p>
          <img className='w-[20px]' src={Bookmark_sec3} alt="" />
        </div>
      </div>
      <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
        <img src={sec3_1} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7C5BA] text-[#FB471D] bg-[#F7C5BA]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Burger King</h1>
        <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
          <p className='text-gray-400'>24min • 4.9</p>
          <img className='w-[20px]' src={Bookmark_sec3} alt="" />
        </div>
      </div>
      <div className='border border-gray-200 rounded-t-[32px] rounded-[20px] min-w-[300px]'>
        <img src={sec3_1} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>The Chicken King</h1>
        <div className='flex items-center justify-between p-[0px_10px] mb-[10px]'>
          <p className='text-gray-400'>24min • 5.0</p>
          <img className='w-[20px]' src={Bookmark_sec3} alt="" />
        </div>
      </div>
    </section>

    <p className='mt-[20px] text-center text-gray-400'>View All -></p>

    <hr className='mt-[100px]' />

    <h1 className='mt-[100px] text-center text-[40px] sm:text-[30px] font-bold'>Our Top <span className='text-[#5C4EAE]'>Dishes</span></h1>
    <section className='flex justify-center gap-[50px] p-[0px_10px] overflow-auto'>
      <div className='border p-[10px_10px] rounded-[10px]  min-w-[210px]'>
        <img src={sec4_1} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>Chicken Hell</h1>
        <p className='text-gray-400 ml-[10px]'>24min • 4.8</p>
        <div className='flex justify-between'>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>$12<span className='text-gray-400 text-[10px]'>.99</span></h1>
        <button className='border rounded-[10px] w-[50px] bg-black text-white font-black text-[30px]'>+</button>
        </div>
      </div>
      <div className='border p-[10px_10px] rounded-[10px]  min-w-[210px]'>
        <img className='mb-[20px]' src={sec4_2} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7C5BA] text-[#FB471D] bg-[#F7C5BA]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>Swe Dish</h1>
        <p className='text-gray-400 ml-[10px]'>34min • 4.8</p>
        <div className='flex justify-between'>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>$19<span className='text-gray-400 text-[10px]'>.99</span></h1>
        <button className='border rounded-[10px] w-[50px] bg-black text-white font-black text-[30px]'>+</button>
        </div>
      </div>
      <div className='border p-[10px_10px] rounded-[10px]  min-w-[210px]'>
        <img className='mb-[20px]' src={sec4_3} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>Swe Dish</h1>
        <p className='text-gray-400 ml-[10px]'>34min • 4.8</p>
        <div className='flex justify-between'>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>$19<span className='text-gray-400 text-[10px]'>.99</span></h1>
        <button className='border rounded-[10px] w-[50px] bg-black text-white font-black text-[30px]'>+</button>
        </div>
      </div>
      <div className='border p-[10px_10px] rounded-[10px]  min-w-[210px]'>
        <img src={sec4_1} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7C5BA] text-[#FB471D] bg-[#F7C5BA]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>Chicken Hell</h1>
        <p className='text-gray-400 ml-[10px]'>24min • 4.8</p>
        <div className='flex justify-between'>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>$12<span className='text-gray-400 text-[10px]'>.99</span></h1>
        <button className='border rounded-[10px] w-[50px] bg-black text-white font-black text-[30px]'>+</button>
        </div>
      </div>
      <div className='border p-[10px_10px] rounded-[10px]  min-w-[210px]'>
        <img className='mb-[20px]' src={sec4_2} alt="" />
        <button className='ml-[10px] mt-[10px] border p-[2px_10px] rounded-[10px] border-[#F7EDD0] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>Swe Dish</h1>
        <p className='text-gray-400 ml-[10px]'>34min • 4.8</p>
        <div className='flex justify-between'>
        <h1 className='p-[10px_10px] font-bold text-[#323142] text-[20px]'>$19<span className='text-gray-400 text-[10px]'>.99</span></h1>
        <button className='border rounded-[10px] w-[50px] bg-black text-white font-black text-[30px]'>+</button>
        </div>
      </div>
    </section>

    <p className='mt-[20px] text-center text-gray-400'>View All -></p>


  

    </Container>
    </>
  )
}

export default Home