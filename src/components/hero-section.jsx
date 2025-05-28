import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    {
      id: 1,
      model: "Toyota Camry",
      price: "$230",
      image: "assets/images/images.png",
    },
    {
      id: 2,
      model: "Toyota Camry",
      price: "$230",
      image: "assets/images/images.png",
    },
    {
      id: 3,
      model: "Toyota Camry",
      price: "$230",
      image: "assets/images/images.png",
    },
    {
      id: 4,
      model: "Toyota Camry",
      price: "$230",
      image: "assets/images/images.png",
    },
  ];

  const visibleCars = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - visibleCars ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - visibleCars : prevIndex - 1
    );
  };

  return (

    <div className="secttion-one mt-[50x] text-white min-h-screen w-full overflow-hidden pt-[50px]">
      
      <div className="flex justify-center w-full px-4">
        <div className="hero my-10 w-full max-w-[700px] mt-[110px] h-[60px] flex items-center rounded-tl-[30px] rounded-br-[30px] relative px-6 shadow-sm">
          <img
            className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] -mt-[30px] sm:mt-[-34px]"
            src="assets/images/Mask Group 2.png"
            alt="icon"
          />

          <div className="flex items-center justify-between w-full ml-[110px]">
            <div className="flex items-center gap-4">
              <button className="bg-transparent border-2 font-bold border-purple-900 text-[#6b46c1] text-xs px-3 py-1 rounded-md">NEW</button>

              <div className="flex items-center gap-2">
                <h1 className="text-black font-bold text-[18px]">Caption Taxi Gift Card!</h1>
                <img
                  src="assets/images/car icon.svg"
                  alt="icon"
                  className="h-[40px] w-[40px]"
                />
              </div>
            </div>

            <button className="text-[#412a7e] text-[15px] font-medium flex items-center gap-1 hover:text-[#553c9a] transition-colors">
              Find out more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between max-w-full px-4 items-center">
        <div className="hidden md:block pt-[80px] pl-[20px] lg:pl-[80px] md:w-1/2">
          <div className="text-left animate-fade-in-up mt-[-150px]">
            <h1 className="font-medium text-[28px] md:text-[32px] ml lg:text-[20px] leading-2.5 uppercase text-white drop-shadow-lg mb-2 ">
              Your ride, your way -anytime
            </h1>
            <h1 className="font-bold text-[24px] md:text-[26px] lg:text-[30px] uppercase text-white drop-shadow-lg ml-[20px] md:ml-[50px] lg:ml-[90px] mb-4 tracking-wide bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Anywhere in sydney.
            </h1>
            <p className=" md:text-sm lg:text-[19px] font-extralight text-white  drop-shadow-md  max-w-xl mt-4">
              Fast, reliable taxi bookings in Sydney today, expanding <br></br>nationwide
              tomorrow.
            </p>
          </div>
          <div className="flex gap-[10px] mt-[40px]">

            <button className=" capitalize bg-white text-[#5f3e91] px-[12px] rounded-[6px] py-[5px]  text-[15px]">join as driver</button>
            <button className="capitalize bg-transparent border border-white text-[#f9f9f9] px-[12px]  rounded-[6px] py-[3px]">book A ride</button>
          </div>
        </div>

        <div className="relative w-full max-w-md rounded-2xl bg-purple-700/10 backdrop-blur-lg shadow-2xl mb-[50px] px-[20px] p-6 text-white">
          <h2 className="mb-6 text-2xl font-bold text-center">Book A Taxi</h2>

          <div className="space-y-4 mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple-900"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 13.5C13.66 13.5 15 12.16 15 10.5S13.66 7.5 12 7.5 9 8.84 9 10.5 10.34 13.5 12 13.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 22C14 18 20 15.4 20 10 20 5.58 16.42 2 12 2S4 5.58 4 10C4 15.4 10 18 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full py-1.5 pl-12 pr-4 rounded-[10px] text-purple-900 placeholder-purple-900 bg-white bg-opacity-90 focus:outline-none"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple-900"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 13.5C13.66 13.5 15 12.16 15 10.5S13.66 7.5 12 7.5 9 8.84 9 10.5 10.34 13.5 12 13.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 22C14 18 20 15.4 20 10 20 5.58 16.42 2 12 2S4 5.58 4 10C4 15.4 10 18 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Drop Off Location"
                className="w-full py-1.5 pl-12 pr-4 rounded-[10px] text-purple-900 placeholder-purple-900 bg-white bg-opacity-90 focus:outline-none"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-[#4D2D7C] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#4D2D7C] " />
                </div>
                Book A Ride
              </button>
            </div>
          </div>

          <hr className="border-white/20 my-4" />

          <div className="relative w-full">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-2/4 transform -translate-y-1/2 z-10 p-2   rounded-full"
            >
              <ChevronLeft className="w-10 h-10 text-white" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCars)
                    }%)`,
                }}
              >
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className="flex flex-col items-center flex-shrink-0 px-2"
                    style={{ width: `${100 / visibleCars}%` }}
                  >
                    <img
                      src={car.image}
                      alt={car.model}
                      className="h-20 object-contain"
                    />
                    <p className="mt-2 font-semibold">{car.price}</p>
                    <p className="text-sm text-gray-200">{car.model}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-2/4 transform -translate-y-1/2 z-10 p-2  rounded-full"
            >
              <ChevronRight className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
