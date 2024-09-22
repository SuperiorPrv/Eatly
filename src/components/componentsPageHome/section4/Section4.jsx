import React from "react";

const Section4 = () => {
  return (
    <div>
      <h1 className="text-[45px] text-center text-[#6C5FBC] font-[700] mt-[50px] mb-[60px]">
        Customer <span className="text-[black] font-[700]">Say</span>
      </h1>

      <div className="flex gap-[30px] justify-around overflow-auto">


        <div className="border-[1px] p-[20px] rounded-[20px] min-w-[430px]">
          <div className="flex items-center gap-[20px] p-[10px] drop-shadow-lg rounded-[20px]">
            <img src="/src/pages/pricing/img/Pic.png" alt="" /><br />
            <div className="">
              <h1 className="text-[#323142] text-[20px] font-[700]">
                Alexander R.
              </h1>
              <p className="text-[#4448]">01 Year With Us </p>
            </div>
          </div><br />
          <p className="text-[#4449]">
            “ Online invoice payment helps companies save <br /> time, are faster and
            save maximum effort for the <br /> clients and save maximum effort. Online
            invoice <br /> payment helps companies save time ”
          </p>
        </div>

        <div className="border-[1px] p-[20px] rounded-[20px] h-[180px] min-w-[430px]">
       
          <p className="text-[#4449]">
            “ Online invoice payment helps companies save <br /> time, are faster and
            save maximum effort for the <br /> clients and save maximum effort. Online
            invoice <br /> payment helps companies save time ”
          </p>
        </div>

        <div className="border-[1px] p-[20px] rounded-[20px] h-[180px] min-w-[430px]">
       
       <p className="text-[#4449]">
         “ Online invoice payment helps companies save <br /> time, are faster and
         save maximum effort for the <br /> clients and save maximum effort. Online
         invoice <br /> payment helps companies save time ”
       </p>
     </div>
      </div>
    </div>
  );
};

export default Section4;
