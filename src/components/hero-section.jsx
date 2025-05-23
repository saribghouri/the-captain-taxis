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
    <div className="secttion-one text-white min-h-screen w-full overflow-hidden pt-[50px]">
      <div className="flex justify-center w-full px-4">
        <div className="bg-[#e3e1e1] my-10 w-full max-w-[800px] mt-[110px] h-[75px] flex flex-row sm:flex-row items-center sm:items-start sm:justify-between rounded-tl-[30px] sm:rounded-tl-[50px] rounded-br-[30px] sm:rounded-br-[50px] relative sm:p-6 gap-4">
          <img
            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] -mt-[30px] sm:mt-[-40px]"
            src="assets/images/Mask Group 2.png"
            alt="icon"
          />

          <div className="flex flex-row sm:flex-row sm:items-center gap-2 sm:ml-[20px] text-center sm:text-left">
            <h1 className="text-[#000] font-bold text-[18px] sm:text-[20px]">
              Caption Taxi Gift Card!
            </h1>
            <img
              src="assets/images/car icon.svg"
              alt="icon"
              className="mx-auto sm:mx-0"
            />
          </div>

          <button className="text-[#4109eb] text-[14px] sm:text-[15px] font-medium mt-2 sm:mt-0">
            Find out more
          </button>
        </div>
      </div>{" "}
      <div className="flex flex-col lg:flex-row justify-between max-w-full px-4 items-center">
        {/* This div will be hidden on mobile screens */}
        <div className="hidden md:block pt-[80px] pl-[20px] lg:pl-[80px] md:w-1/2">
          <div className="text-left animate-fade-in-up mt-[-150px]">
            <h1 className="font-medium text-[28px] md:text-[32px] lg:text-[42px] leading-tight text-white drop-shadow-lg mb-2 tracking-wide">
              Your ride, your way
              <span className="text-[#a8a8a8]">-anytime</span>
            </h1>
            <h1 className="font-extrabold text-[30px] md:text-[34px] lg:text-[44px] text-white drop-shadow-lg ml-[20px] md:ml-[40px] lg:ml-[60px] mb-4 tracking-wide bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Anywhere in Australia.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white italic drop-shadow-md font-light max-w-xl mt-4 leading-relaxed">
              Fast, reliable taxi bookings in Sydney today, expanding nationwide
              tomorrow.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-md rounded-2xl bg-purple-700/10 backdrop-blur-lg shadow-2xl p-6 text-white">
          <h2 className="mb-6 text-2xl font-bold text-center">Book A Taxi</h2>

          <div className="space-y-4 mb-4">
            {/* Pickup Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple-300"
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
                className="w-full py-3 pl-12 pr-4 rounded-full text-purple-900 placeholder-purple-900 bg-white bg-opacity-90 focus:outline-none"
              />
            </div>

            {/* Drop Off Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple-300"
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
                className="w-full py-3 pl-12 pr-4 rounded-full text-purple-900 placeholder-purple-900 bg-white bg-opacity-90 focus:outline-none"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-[#4D2D7C] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#4D2D7C] " />
                </div>
                Book A Ride
              </button>
            </div>
          </div>

          <hr className="border-white/20 my-4" />

          {/* Carousel */}
          <div className="relative w-full">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleCars)
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
