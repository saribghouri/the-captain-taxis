"use client";
import {
  CarOutlined,
  CalendarOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Car, Package, Truck, Users } from "lucide-react";

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
    <div className="h-screen bg-white">
 <section
      className="relative mb-[50px]  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('assets/images/backdound 3.png')`,
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full  flex flex-col">
        {/* Hero Text - positioned in upper portion */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto text-left">
            <p className="text-white text-lg md:text-xl font-normal mb-4 tracking-wide">Find your car & Our Services</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl">
              Leading the best Our Services In US
            </h1>
          </div>
        </div>

        {/* Services Card - positioned at bottom */}
        <div className="px-4 sm:px-6 lg:px-8 pb-0">
          <div className="max-w-[90%]   mx-auto">
            <div className="bg-white rounded-t-3xl    mb-[-90px] shadow-2xl px-8 py-12 md:px-16 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Standard Taxi */}
                <div className="text-center border border-gray-200 ">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center ">
                    <svg className="w-16 h-16 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Taxi</h3>
                  <p className="text-gray-600 text-base">Sedan, for up 4 passengers</p>
                </div>

                {/* SUV & Maxi */}
                <div className="text-center border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 5H3c-1.1 0-2 .9-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-4-6zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V7h4v8h1.22zm7.78 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1.22-3H16V7h1l3 4.5V15h-1.78c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SUV & Maxi</h3>
                  <p className="text-gray-600 text-base">Room for 5-11 passengers</p>
                </div>

                {/* Wheelchair */}
                <div className="text-center border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8 16h-2.5l-4.5-7V9.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v5L2.5 20H0v2h24v-2zM7.5 22.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm9-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheelchair</h3>
                  <p className="text-gray-600 text-base">Accessible transportation</p>
                </div>

                {/* Parcel Delivery */}
                <div className="text-center border border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#6B46C1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h4zm2 0h6V3H9v1zm-4 4v8h14V8H5zm2 2h10v4H7v-4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcel Delivery</h3>
                  <p className="text-gray-600 text-base">Door-to-door delivery service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}
