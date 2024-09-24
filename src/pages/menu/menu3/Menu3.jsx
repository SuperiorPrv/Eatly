import Container from "@/components/shared/Container/Container"

const Menu3 = () => {
  return (
    <Container>
      <section className="w-[100%] px-10  sm:px-2 flex flex-col items-center mb-32">
        <img src="src/pages/menu/menu3/svg/map.svg" className="shadow-[0px_0px_100px_] shadow-gray-200 mt-32 md:mt-20 rounded-[50px] md:shadow-[0px_0px_50px_] md:shadow-slate-200" alt="" />
        <div className="bg-white rounded-3xl relative top-[-150px] md:top-[50px] shadow-[0px_0px_70px_] shadow-gray-400">
          <div className="flex gap-x-3 items-center bg-[#323142] text-white p-5 rounded-[20px_20px_0_0]">
            <img src="/src/pages/menu/menu3/img/image.png" className="w-[60px]" alt="" />
            <div>
              <p className="font-medium text-[1.4em]">David Smith</p>
              <p className="text-gray-300">Food Rider</p>
            </div>
          </div>
          <div className="flex gap-3 w-[100%] gap-x-5 justify-around flex-wrap p-4 pb-6">
            <img src="/src/pages/menu/menu3/svg/floctoloc.svg" alt="" />
            <div>
              <p className="text-gray-400">Your Address</p>
              <p className="max-w-[210px]">YoHorizenal Road Stree 1178 California, USAur Address</p>
              <br />
              <p className="text-gray-400">Delivery Time</p>
              <p>15 Minutes</p>
            </div>
            <button className="p-6 text-white py-2 bg-[#6C5FBC] h-fit self-end rounded">Pending</button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex gap-y-5 font-bold lg:w-[100%] md:mt-32">
          <img className="self-end width-[100px] md:hidden" src="/src/pages/menu/menu3/svg/roundedleft.svg" alt="" />
          <div className="flex flex-col gap-y-5 w-[100%]">
          <img src="/src/pages/menu/menu3/svg/threeVet.svg" className="w-[80px] self-end relative top-[30px] md:hidden left-[90px]" alt="" />
          <div className="flex gap-x-2 flex-wrap p-3 py-2 items-center rounded-xl bg-white w-[100%] shadow-xl shadow-gray-300 justify-between">
            <div className="flex flex-wrap gap-x-2 items-center xs:mx-auto">
              <img src="/src/pages/menu/menu3/img/image copy.png" className="w-[100px] mx-auto" alt="" />
              <div className="mx-auto xs:text-center">
                <p className="font-bold text-[1.4em]">Chicken Hell</p>
                <p className="font-bold">$12.9</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-3 xs:mx-auto">
              <div className="flex items-center gap-x-2">
                <img src="/src/pages/menu/menu3/svg/mines.svg" alt="" />
                <p>03</p>
                <img src="/src/pages/menu/menu3/svg/plus.svg" alt="" />
              </div>
              <p className="font-bold">$38.97</p>
            </div>
          </div>
          <div className="flex gap-x-2 flex-wrap p-3 py-2 items-center rounded-xl bg-white w-[100%] shadow-xl shadow-gray-300 justify-between">
            <div className="flex flex-wrap gap-x-2 items-center xs:mx-auto">
              <img src="/src/pages/menu/menu3/img/image copy 2.png" className="w-[100px] mx-auto" alt="" />
              <div className="mx-auto xs:text-center">
                <p className="font-bold text-[1.4em]">Chicken Hell</p>
                <p className="font-bold">$12.9</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-3 xs:mx-auto">
              <div className="flex items-center gap-x-2">
                <img src="/src/pages/menu/menu3/svg/mines.svg" alt="" />
                <p>03</p>
                <img src="/src/pages/menu/menu3/svg/plus.svg" alt="" />
              </div>
              <p className="font-bold">$38.97</p>
            </div>
          </div>
          <div className="flex gap-x-2 mt-20 justify-between xs:flex-wrap items-center">
            <div className="bg-gray-200 w-[100%] flex p-5 gap-x-2 rounded-xl focus-within:bg-gray-100 duration-300">
              <img src="/src/pages/menu/menu3/svg/inp.svg" className="w-[25px]" alt="" />
              <input type="search" onInput="" placeholder="Apply Coupon" className="text-[20px] w-[100%] mx-auto bg-transparent duration-300 outline-none" name="" id="" />
            </div>
            <button className="px-8 text-white py-5 active:bg-purple-500 mx-auto my-3 xs:w-[100%] duration-300 active:scale-90 bg-[#6C5FBC] self-end rounded-xl">Apply</button>
          </div>
          <div className="py-3 flex justify-between border-dashed text-[20px] text-gray-500 border-b-2">
            <p>Subtotal</p>
            <p>$58.96</p>
          </div>
          <div className="py-3 flex justify-between border-dashed text-[20px] text-gray-500 border-b-2">
            <p>Subtotal</p>
            <p>$3.59</p>
          </div>
          <div className="py-3 flex justify-between font-extrabold border-dashed text-[20px] border-b-2">
            <p className="font-bold text-[1.3em]">Total</p>
            <p className="font-bold text-[1.3em]">$62.55</p>
          </div>
          <button className="px-8 text-white text-[1.2em] py-5 active:bg-purple-500 mx-auto my-3 w-[100%] duration-300 active:scale-90 bg-[#6C5FBC] font-bold self-end rounded-xl">Review Payment</button>
          </div>
          <img className="self-end width-[100px] md:hidden" src="/src/pages/menu/menu3/svg/roundright.svg" alt="" />
        </div>
        <div>
        </div>
          <div className="bg-[#6C5FBC] p-10 sm:p-2 w-[100%] mt-60 flex flex-col gap-y-3 rounded-3xl" style={{backgroundImage:'url("/src/pages/menu/menu3/svg/bg.svg")'}}>
            <p className="text-white text-[5em] font-bold sm:text-center">GET 50%</p>
            <div className="flex w-fit px-3 rounded-3xl justify-between sm:mx-auto flex-wrap items-center duration-500 bg-slate-200">
              <input type="search" onInput="" placeholder="Enter Your Email Address" className="text-[18px] sm:text-center sm:focus-within:bg-gray-100 sm:rounded-xl w-[300px] sm:mt-3 sm:w-[100%] sm:p-4 mx-auto bg-transparent sm:bg-slate-300 sm:placeholder:text-gray-500 focus-within:placeholder:text-gray-400 duration-300 outline-none" name="" id="" />
            <button className="px-8 text-white py-5 active:bg-purple-500 mx-auto my-3 sm:w-[100%] duration-300 active:scale-90 bg-[#6C5FBC] self-end rounded-3xl">subscribe</button>
          </div>
          </div>
      </section>
    </Container>
  )
}

export default Menu3