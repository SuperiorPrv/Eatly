import Container from '../Container/Container'
import logo from "../Header/img/Logo.png";
import l1 from "./images/image.png";
import l2 from "./images/image copy.png";
import l3 from "./images/image copy 2.png";
import l4 from "./images/image copy 3.png";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  let location = useLocation()
  return (
    <Container>
      <footer className='bg-[#EAEAEA] p-[60px] py-[80px] text-[#999999]'>
        <div className='flex flex-wrap items-center justify-between gap-[10px]'>
          <Link to={"/home"}><img className='hover:cursor-pointer' src={logo} alt="" /></Link>
          <div className='flex items-center gap-[40px] sm:gap-[15px]'>
            <Link style={location.pathname=="/menu"?{color:"#6C5FBC"}:{color:"#999999"}} to="/menu" className='hover:cursor-pointer hover:underline'>Menu</Link>
            <Link style={location.pathname=="/blog"?{color:"#6C5FBC"}:{color:"#999999"}} to="/blog" className='hover:cursor-pointer hover:underline'>Blog</Link>
            <Link style={location.pathname=="/pricing"?{color:"#6C5FBC"}:{color:"#999999"}} to="/pricing" className='hover:cursor-pointer hover:underline'>Pricing</Link>
            <Link style={location.pathname=="/contact"?{color:"#6C5FBC"}:{color:"#999999"}} to="/contact" className='hover:cursor-pointer hover:underline'>Contact</Link>
          </div>
        </div>
        <hr className='my-[30px] h-[2px] border-none bg-[#999999]' />
        <div className='flex flex-wrap items-center justify-between  gap-[10px]'>
          <p>© 2023 EATLY All Rights Reserved.</p>
          <div className='flex items-center gap-[40px] sm:gap-[20px]'>
            <img className='w-[25px] hover:cursor-pointer' src={l1} alt="" />
            <img className='w-[25px] hover:cursor-pointer' src={l2} alt="" />
            <img className='w-[11px] hover:cursor-pointer' src={l3} alt="" />
            <img className='w-[25px] hover:cursor-pointer' src={l4} alt="" />
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default Footer