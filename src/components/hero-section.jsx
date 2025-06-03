import { Button } from "antd";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-contain  bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/assets/images/BG-MAIN.jfif')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-4 lg:px-2">
        <div className="w-full max-w-[90%] flex flex-col  lg:flex-row items-center">
          <div className="w-full lg:w-2/2 text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl hero-hd  md:text-[77px] lg:text-[77px] xl:text-[100px] font-extrabold leading-tight">
              <span className="text-black">The </span>
              <span className="text-[#4d2d7c]">
                Captain <span className="text-black">Taxi</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] text-black font-medium mt-4 mb-6">
              Your Ride, Your Way—Anytime
            </p>
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-8 max-w-full sm:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0">
              Book Your Ride In Seconds And Enjoy Peace Of <br></br> Mind With Our Dependable And Professional<br></br> Service.
            </p>

            {/* App download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Google Play Button */}
              <div className="bg-black flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-gray-800">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 mr-3"
                  src="assets/images/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo-removebg-preview.png"
                  alt="Google Play"
                />
                <div className="text-white text-left">
                  <div className="text-xs sm:text-sm font-normal leading-none">GET IT ON</div>
                  <div className="text-sm sm:text-base font-semibold leading-tight">Google Play</div>
                </div>
              </div>

              {/* App Store Button */}
              <div className="bg-black flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-gray-800">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                  />
                </svg>
                <div className="text-white text-left">
                  <div className="text-xs sm:text-sm font-normal leading-none">Download on the</div>
                  <div className="text-sm sm:text-base font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-10 sm:mt-12 lg:mt-22 flex flex-col gap-4 items-center lg:items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl autography text-[#5b3a8b] font-bold font-sans">
                Start Your Journey
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-[30px]">
                <Button
                  className="!bg-[#4d2d7c] !rounded-[8px] !font-bold !text-white !text-base sm:!text-lg lg:!text-xl !px-8 sm:!px-8 !py-6 sm:!py-6"
                >
                  Book A Ride
                </Button>
                <Button
                  className="!text-[#5b3a8b] !rounded-[8px] !font-bold !text-base sm:!text-lg lg:!text-xl !px-8 sm:!px-8 !py-6 sm:!py-6 !border-[#5b3a8b]"
                >
                  Apply to Drive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;