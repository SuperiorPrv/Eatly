import { Link, useLocation } from "react-router-dom"
import Container from "../Container/Container"

const Header = () => {
  const location=useLocation()
  console.log(location.pathname);
  return (
    <Container>
      <div className=" flex justify-between  items-center h-[70px]">
        <nav>
          <ul className="flex items-center gap-[40px]">
            <li> <Link to="/home"><img src="/src/components/shared/Header/img/Logo.png" alt="" /></Link> </li>
            <li style={{color: location.pathname == "/menu" ?"#6C5FBC":"#606060"}}><Link to="/menu">Menu</Link></li>
            <li style={{color: location.pathname == "/blog" ?"#6C5FBC":"#606060"}}><Link to="/blog">Blog</Link></li>
            <li style={{color: location.pathname == "/pricing" ?"#6C5FBC":"#606060"}}><Link to="/pricing">Pricing</Link></li>
            <li style={{color: location.pathname == "/contact" ?"#6C5FBC":"#606060"}}><Link to="contact">Contact</Link></li>
          </ul>
        </nav>
          <div className="flex gap-[30px]">
            <button className="bg-white p-[10px_15px] rounded-[20px] border-[1px] text-[#606060]">Login</button>
            <button className="bg-[#6C5FBC] p-[10px_15px] rounded-[20px] border-[1px] text-[#fff]">Sign up</button>
          </div>
      </div><hr />
    </Container>
  )
}

export default Header