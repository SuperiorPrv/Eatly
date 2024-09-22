import Container from "../Container/Container"

const Header = () => {
  return (
    <Container>
      <div className=" flex justify-around items-center h-[70px]">
        <nav>
          <ul className="flex items-center gap-[40px]">
            <li><img src="/src/components/shared/Header/img/Logo.png" alt="" /></li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
          <div className="flex gap-[30px]">
            <button className="bg-white p-[10px_15px] rounded-[20px] border-[1px] text-[#606060]">Login</button>
            <button>Sign up</button>
          </div>
      </div><hr />
    </Container>
  )
}

export default Header