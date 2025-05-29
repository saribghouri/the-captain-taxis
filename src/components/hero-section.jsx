import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className=" absolute bg inset-0 ">
    <div
          className="absolute  inset-50  bg-cover bg-no-repea"
          style={{
            backgroundImage: 'url(/assets/images/backdound 3.png)',
            left: 0,
            top: 0,
          
       
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
          }}
        >
<div className="relative z-10 min-h-screen justify-center flex items-center">
        <div className="w-full  mx-auto px-8 pt-[50px] lg:px-26">
          <div className="w-1/2 pr-8">
            <p className="text-black text-[40px]   mb-4 font-medium">
              Your Ride, Your Way-Anytime
            </p>

            {/* Main heading */}
            <h1 className="text-[90px] font-bold  mb-6 leading-24">
              <span className="text-black">The </span>
              <span className="text-[#4d2d7c]">Captain</span>
              <br />
              <span className="text-[#4d2d7c]">Taxi</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-[30px] mb-10 max-w-[80%]">
              Book Your Ride In Seconds And Enjoy Peace Of Mind With Our Dependable And Professional Service.
            </p>

            {/* App download buttons */}
            <div className="flex gap-4">
              {/* Google Play Button */}
              <div className="bg-black rounded-lg flex items-center px-4 py-3 cursor-pointer  transition-colors">
                <div className="mr-3">
                 <img className="w-[30px] h-[30px]" src="assets/images/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo-removebg-preview.png" alt="" />
                </div>
                <div className="text-white text-left">
                  <div className="text-xs font-normal leading-none">GET IT ON</div>
                  <div className="text-xl font-semibold leading-tight">Google Play</div>
                </div>
              </div>

              {/* App Store Button */}
              <div className="bg-black rounded-lg flex items-center px-4 py-3 cursor-pointer transition-colors">
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#fff" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text-white text-left">
                  <div className="text-xs font-normal leading-none">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div
          className="absolute inset-50 bg-cover bgr  bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(assets/images/background 4.svg)',
             right: 0,
            top: 0,
            clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 45% 100%)'
          }}
        ></div> 
      

      {/* Content */}
      
      </div>
    </div>
  );
};

export default HeroSection;
