import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CardBlogComponent = ({img1,aos}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos={aos} className="w-[348px]  drop-shadow-[0px_0px_30px_gray] rounded-[15px]  p-[15px] bg-white  mb-[20px]">
<img src={img1} className="w-[100%]" alt="" />
<h1 className="text-[21px] font-[600]  my-[12px]">How To Order Food ?</h1>
<div className="flex justify-between items-end">
    <img src="/src/pages/blog/img/Written By (1).png" alt="" />
    <p className="font-[500]">15 DEC, 2022</p>
</div>
    </div>
  )
}

export default CardBlogComponent