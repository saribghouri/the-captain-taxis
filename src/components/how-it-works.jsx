"use client";
import { useState } from "react";
import {
  CarOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      step: "Step 1: Estimate Your Fare",
      description: "Enter pickup & drop-off; get an instant quote.",
      icon: <DollarOutlined className="text-3xl" />,
      color: "#4D2D7C",
    },
    {
      step: "Step 2: Select Your Service",
      description: "Next Available, Sedan, SUV, Maxi, Cargo or NDIS.",
      icon: <CarOutlined className="text-3xl" />,
      color: "#4D2D7C",
    },
    {
      step: "Step 3: Ride or Reserve",
      description: "Book now or schedule later; pay in-app or in-taxi.",
      icon: <CalendarOutlined className="text-3xl" />,
      color: "#4D2D7C",
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Experience a seamless journey with our simple three-step process
        </p>

        {/* Desktop Process Steps with Connecting Lines */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`
                    w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${
                      hoveredStep === index
                        ? "bg-[#4D2D7C] text-white scale-110"
                        : "bg-white text-[#4D2D7C] border-2 border-[#4D2D7C]"
                    }
                  `}
                >
                  <div className="text-current">{item.icon}</div>
                </div>

                <div
                  className={`
                    absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center
                    bg-[#818181] text-white font-bold
                    ${hoveredStep === index ? "scale-110" : ""}
                    transition-all duration-300
                  `}
                >
                  {index + 1}
                </div>

                <div
                  className={`
                    bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300
                    ${hoveredStep === index ? "transform -translate-y-2" : ""}
                    border border-gray-100 h-full
                  `}
                >
                  <h3 className="text-xl font-semibold text-[#4D2D7C] mb-3">
                    {item.step}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-4 text-[#e6e3db] text-2xl z-20">
                    <ArrowRightOutlined />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="md:hidden space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div
                  className="
                    w-12 h-12 rounded-full flex items-center justify-center
                    bg-[#4D2D7C] text-white mr-4
                  "
                >
                  <div className="text-current">{item.icon}</div>
                </div>

                <div
                  className="
                    w-6 h-6 rounded-full flex items-center justify-center
                    bg-[#818181] text-black font-bold absolute -top-1 -left-1
                  "
                >
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-[#4D2D7C]">
                  {item.step}
                </h3>
              </div>

              <div
                className="
                  bg-white p-6 rounded-xl shadow-sm border border-gray-100
                  ml-6 relative
                "
              >
                <div className="absolute top-4 -left-3 w-6 h-6 bg-white transform rotate-45 border-l border-t border-gray-100"></div>
                <p className="text-gray-700">{item.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-200 absolute left-6 -bottom-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 relative z-10">
          <a
            href="/booking"
            className="
              inline-block bg-[#4D2D7C] text-white font-medium px-8 py-4 rounded-full
              hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1
              shadow-md hover:shadow-lg
            "
          >
            Get Started Now <ArrowRightOutlined className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
