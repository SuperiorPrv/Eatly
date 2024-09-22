import Container from '@/components/shared/Container/Container'
import ii1 from './images/image copy 4.png'
import ii2 from './images/image copy 5.png'
import ii3 from './images/image copy 6.png'

const Menu1 = () => {
  return (
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
          <input className='w-[100%] bg-[#6C5FBC]' type="range" name="" id="" />
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
  )
}

export default Menu1