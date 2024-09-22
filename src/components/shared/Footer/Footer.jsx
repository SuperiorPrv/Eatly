import Container from '../Container/Container'
import logo from "../Header/img/Logo.png";
import l1 from "./images/image.png";
import l2 from "./images/image copy.png";
import l3 from "./images/image copy 2.png";
import l4 from "./images/image copy 3.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <footer className='bg-[#EAEAEA] p-[40px] text-[#999999]'>
        <div className='flex flex-wrap items-center justify-between gap-[10px]'>
          <img src={logo} alt="" />
          <div className='flex items-center gap-[40px] sm:gap-[15px]'>
            <Link to="/blog" className='hover:cursor-pointer hover:underline'>Blog</Link>
            <Link to="/pricing" className='hover:cursor-pointer hover:underline'>Pricing</Link>
            <Link className='hover:cursor-pointer hover:underline'>About Us</Link>
            <Link to="/contact" className='hover:cursor-pointer hover:underline'>Contact</Link>
          </div>
        </div>
        <hr className='my-[30px] bg-[#999999] p-[0.3px]' />
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