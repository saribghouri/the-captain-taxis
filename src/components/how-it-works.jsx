"use client";
import {
  CarOutlined,
  CalendarOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1: Estimate Your Fare",
      description: "Enter pickup & drop-off; get an instant quote.",
      icon: <DollarOutlined className="text-2xl" />,
    },
    {
      step: "Step 2: Select Your Service",
      description: "Next Available, Sedan, SUV, Maxi, Cargo or NDIS.",
      icon: <CarOutlined className="text-2xl" />,
    },
    {
      step: "Step 3: Ride or Reserve",
      description: "Book now or schedule later; pay in-app or in-taxi.",
      icon: <CalendarOutlined className="text-2xl" />,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#24123f] via-[#4d2d7c] to-[#24123f] text-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-16 w-full justify-center">
          <h1 className="text-4xl md:text-5xl mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg">
            Experience a seamless journey with our simple three-step process
          </p>
        </div>

        {/* Desktop Process Steps */}
        <div className="hidden md:flex justify-between mb-20 relative">
          {steps.map((item, index) => (
            <div key={index} className="w-[32%] relative">
               <div className="flex flex-col items-center h-full ">
        <div className="bg-gradient-to-br  p-8 rounded-2xl flex flex-col items-center text-center h-full border border-[#6b5c9b] shadow-lg">
          {/* Icon Circle */}
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm">
            <div className="text-white text-2xl">{item.icon}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl  text-white mb-4 leading-tight">
            {item.step}
          </h3>
          
          {/* Description */}
          <p className="text-[#ebebeb] text-md leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
            </div>
          ))}

          {/* Connecting Line with Number Circles */}
          <div className="absolute bottom-[-50px] left-[10%] right-[10%] h-[1px] bg-gray-500 ">
            <div className="absolute left-0 -top-4 w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center bg-[#1a1146]">
              <span className="text-white">1</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center bg-[#1a1146]">
              <span className="text-white">2</span>
            </div>
            <div className="absolute right-0 -top-4 w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center bg-[#1a1146]">
              <span className="text-white">3</span>
            </div>
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="md:hidden space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center mb-4">
                  <div className="text-white">{item.icon}</div>
                </div>

                {/* Card */}
                <div className="bg-[#2a1d5a] !p-[40px] rounded-xl w-full border border-[#3d2d70] text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>

                {/* Number Circle */}
                {index < steps.length - 1 && (
                  <>
                    <div className="h-8 w-[1px] bg-gray-500 my-2"></div>
                    <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center bg-[#1a1146]">
                      <span className="text-white">{index + 1}</span>
                    </div>
                  </>
                )}
                {index === steps.length - 1 && (
                  <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center bg-[#1a1146] mt-2">
                    <span className="text-white">{index + 1}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
