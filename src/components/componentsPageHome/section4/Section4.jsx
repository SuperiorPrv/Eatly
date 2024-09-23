import React from "react";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-r from-[#f5f7fa] to-[#e2e8f0] py-[50px] px-4">
      <h1 className="text-[45px] text-center text-[#6C5FBC] font-extrabold mt-[50px] mb-[60px]">
        Customer <span className="text-black">Say</span>
      </h1>

      <div className="flex gap-[30px] justify-around overflow-x-auto scrollbar-hide px-2">
  
        <div className="border border-[#ddd] p-[20px] rounded-[20px] min-w-[430px] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center gap-[20px] p-[10px] bg-gradient-to-r from-[#f0f4ff] to-[#ebeff9] rounded-[20px] drop-shadow-md">
            <img
              src="/src/pages/pricing/img/Pic.png"
              alt="Customer"
              className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#6C5FBC]"
              loading="lazy"
            />
            <div>
              <h1 className="text-[#323142] text-[20px] font-bold">
                Alexander R.
              </h1>
              <p className="text-[#6E757C] text-[14px]">01 Year With Us</p>
            </div>
          </div>
          <br />
          <p className="text-[#606060] text-[16px] leading-relaxed">
            “Online invoice payment helps companies save time, are faster, and
            save maximum effort for the clients. Online invoice payment helps
            companies save time.”
          </p>
        </div>


        <div className="border border-[#ddd] p-[20px] rounded-[20px] min-w-[430px] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <p className="text-[#606060] text-[16px] leading-relaxed">
            “Online invoice payment helps companies save time, are faster, and
            save maximum effort for the clients. Online invoice payment helps
            companies save time.”
          </p>
        </div>


        <div className="border border-[#ddd] p-[20px] rounded-[20px] min-w-[430px] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <p className="text-[#606060] text-[16px] leading-relaxed">
            “Online invoice payment helps companies save time, are faster, and
            save maximum effort for the clients. Online invoice payment helps
            companies save time.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
