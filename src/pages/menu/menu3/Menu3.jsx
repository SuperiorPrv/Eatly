import Container from "@/components/shared/Container/Container"

const Menu3 = () => {
  return (
    <Container>
      <section className="w-[100%] px-10 flex flex-col items-center mb-32">
        <img src="src/pages/menu/menu3/svg/map.svg" className="shadow-[0px_0px_100px_] shadow-gray-200 mt-32 rounded-[50px]" alt="" />
        <div className="bg-white rounded-3xl relative top-[-150px] shadow-[0px_0px_70px_] shadow-gray-400">
          <div className="flex gap-x-3 items-center bg-[#323142] text-white p-5 rounded-[20px_20px_0_0]">
            <img src="/src/pages/menu/menu3/img/image.png" className="w-[60px]" alt="" />
            <div>
              <p className="font-medium text-[1.4em]">David Smith</p>
              <p className="text-gray-300">Food Rider</p>
            </div>
          </div>
          <div className="flex w-[100%] gap-x-5 justify-around flex-wrap p-4 pb-6">
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
      </section>
    </Container>
  )
}

export default Menu3