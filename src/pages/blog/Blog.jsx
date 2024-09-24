import Container from "@/components/shared/Container/Container"
import { SaleBlogComponent } from "./BlogsComponent/saleBlogComponent/SaleBlogComponent"
import CardBlogComponent from "./BlogsComponent/cardBlogComponent/CardBlogComponent"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "./BlogsComponent/newComponent/NewCpmponenet";




const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <>

    <div className="w-[1201px] m-[auto] text-center my-[40px]">
    <h1   className="text-[70px] font-[] animate__animated animate__flip">Welcom to <span className="text-violet-900">Blog</span> <br />page </h1>
    <p className="text-[40px] text-violet-900 ">GOOD LUCK!</p>
    </div>
  <Container>
   
 
  
    
  

    <SaleBlogComponent/>
    <div className="w-[1201px] m-[auto] my-[60px] mb-[60px]">
    <h1   className="text-[70px] font-[] text-center ">Our <span className="text-violet-900">Food</span> <br />Swiper</h1>
<AutoPlay/>
    </div>
    <div className="w-[1201px] m-[auto]">
      <h1 className="text-[45px] font-[600] text-center">Latest <span className="text-purple-600">Articles</span>  </h1>
      <div className="grid grid-cols-3 mt-[50px]">
        <CardBlogComponent aos="fade-right" img1="/src/pages/blog/img/Image.png" />
        <CardBlogComponent aos="flip-left" img1="/src/pages/blog/img/Image (7).png" />
        <CardBlogComponent aos="fade-left"  img1="/src/pages/blog/img/Image (8).png" />
        <CardBlogComponent aos="fade-right"  img1="/src/pages/blog/img/Image (9).png" />
        <CardBlogComponent aos="flip-right"  img1="/src/pages/blog/img/Image (10).png" />
        <CardBlogComponent aos="fade-left" img1="/src/pages/blog/img/Image (11).png" />


      </div>
      <menu>
        <img className="ml-[58.5%]" src="/src/pages/blog/img/Illustration 01.png" alt="" />
        <h1 className="text-[30px] text-center font-bold"> Frequently Asked  <br />
          <span className="text-[#6C5FBC]"> Questions</span></h1>
        
 <br /><br /><br />

        <div className="m-auto w-[80%]">
          <div className="flex justify-between text-[20px] font-bold">  
          <h1>How long does delivery take?</h1> 
          <button><img src="/src/pages/blog/img/Plus.png" alt="" /></button>
          </div> <br />
          <h1 className="text-[#686868] text-[16px]">You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</h1> <br /> <br />
          <hr className="bg-gray-400 h-[1px] border-none" /> <br />

           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>How Does It Work ?</h1> 
            <button><img src="/src/pages/blog/img/Plus (1).png" alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>How does your food delivery service work?</h1> 
            <button><img src="/src/pages/blog/img/Plus (1).png" alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>What payment options do you accept?</h1> 
            <button><img src="/src/pages/blog/img/Plus (1).png" alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
           <br />
          <div className="flex justify-between flex-wrap text-[20px] font-bold">  
          <h1>Do you offer discounts or promotions?</h1> 
            <button><img src="/src/pages/blog/img/Plus (1).png" alt="" /></button>
          </div> <br />
            <hr className="bg-gray-400 h-[1px] border-none" />
        </div>
      </menu> 
    </div>

  </Container>
    </>
  )
}

export default Blog