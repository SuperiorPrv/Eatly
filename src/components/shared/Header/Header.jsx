import { Link, useLocation } from "react-router-dom"
import Container from "../Container/Container"

const Header = () => {
  const location=useLocation()
  console.log(location.pathname);
  return (
    <Container>
      <div className=" flex justify-between  items-center h-[70px] p-[50px] md:flex-wrap">
        <nav>
          <ul className="flex items-center gap-[40px] ">
            <li> <Link to="/home"><img src="/src/components/shared/Header/img/Logo.png" alt="" /></Link> </li>
            <li className="sm:hidden" style={{color: location.pathname == "/menu" ?"#6C5FBC":"#606060"}}><Link to="/menu">Menu</Link></li>
            <li className="sm:hidden" style={{color: location.pathname == "/blog" ?"#6C5FBC":"#606060"}}><Link to="/blog">Blog</Link></li>
            <li className="sm:hidden" style={{color: location.pathname == "/pricing" ?"#6C5FBC":"#606060"}}><Link to="/pricing">Pricing</Link></li>
            <li className="sm:hidden" style={{color: location.pathname == "/contact" ?"#6C5FBC":"#606060"}}><Link to="contact">Contact</Link></li>
          </ul>
        </nav>
          <div className="flex ml-[5px] gap-[30px] md:hidden">
            <button className="bg-white p-[10px_15px] rounded-[20px] border-[1px] text-[#606060]">Login</button>
            <button className="bg-[#6C5FBC] p-[10px_15px] rounded-[20px] border-[1px] text-[#fff]">Sign up</button>
          </div>
          <p className="sm:block hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</p>
      </div><hr />
    </Container>
  )
}

export default Header