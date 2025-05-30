import { Button } from "antd";
import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full mt-[-30px]  bg relative overflow-hidden ">
      <div className="relative z-10 min-h-screen justify-center flex mt-[60px]">
        <div className="w-full  lg:px-26">
          <div className="w-1/2 pr-8">
           

            {/* Main heading */}
            <h1 className="text-[100px] w-full  font-extrabold  mb-6 ">
              <i className="text-black font">The </i>
              <i className="text-[#4d2d7c]">Captain <i className="text-[#000000]">Taxi</i></i>
              <br />
            </h1>
 <p className="text-black text-[40px]   mb-4 font-medium">
              Your Ride, Your Way-Anytime
            </p>
            {/* Description */}
            <p className="text-gray-800 leading-9 text-[28px] mb-10 max-w-[80%]">
              Book Your Ride In Seconds And Enjoy Peace Of Mind With Our Dependable And Professional Service.
            </p>

            {/* App download buttons */}
            <div className="flex gap-4">
              {/* Google Play Button */}
              <div className="bg-black  flex items-center pr-[5px]  rounded-[4px]  cursor-pointer  transition-colors">
                <div className="mr-3">
                 <img className="w-[25px] h-[25px]" src="assets/images/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo-removebg-preview.png" alt="" />
                </div>
                <div className="text-white text-left">
                  <div className="text-[10px] font-normal leading-none">GET IT ON</div>
                  <div className="text-[16px] font-semibold leading-tight">Google Play</div>
                </div>
              </div>

              {/* App Store Button */}
              <div className="bg-black  flex items-center  pr-[5px] rounded-[4px]  4 py-1 cursor-pointer transition-colors">
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#fff" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text-white text-left">
                  <div className="text-[10px] font-normal leading-none">Download on the</div>
                  <div className="text-[16px] font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </div>
              <div className="mt-[80px] gap-4 flex flex-col">
                <h1 className="text-[35px]  !text-[#5b3a8b] font-falmily">Stay Your Journey</h1>
                <div className=" gap-4 flex ">

                <Button className="!bg-[#4d2d7c] !font-bold !text-white !text-[22px] !px-[40px] !py-[25px]">Book A Ride</Button>
                <Button  className="!text-[#5b3a8b] !font-bold !text-[22px] !px-[40px] !py-[25px]">Apply to Drive</Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
