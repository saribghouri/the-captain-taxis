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
    <div className=" bg-white">
      <section
        className="relative mb-[50px]  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('assets/images/road.png')`,
        }}
      >
        <div className="relative z-10 h-full  flex flex-col">
          <div className="flex-1 flex flex-col justify-center mt-[20px] ml-[120px] px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-8xl  text-left mt-[40px]">
              <p className="text-white text-lg md:text-[40px] font-normal mb-4 tracking-wide">Find your car & Our Services</p>
              <h1 className="text-white text-2xl max-w-[90%]  md:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight ">
                Leading the best Our Services In US
              </h1>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-0">
            <div className="max-w-[90%]   mx-auto">
              <div className="bg-white rounded-3xl    mb-[-90px] shadow-2xl px-6 py-8 md:px-12 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10">
                  <div className="text-center sections border  ">
                    <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center ">
                      <img
                        src="assets/images/Standard Taxi card.svg"
                        alt="Ride app mockup"

                        className=" rounded-2xl h-[489px] w-[863px]"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Taxi</h3>
                    <p className="text-gray-600 text-base">Sedan, for up 4 passengers</p>
                  </div>

                  <div className="text-center sections border ">
                    <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                      <img
                        src="assets/images/SUV & Maxi.svg"
                        alt="Ride app mockup"

                        className=" rounded-2xl h-[489px] w-[863px]"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">SUV & Maxi</h3>
                    <p className="text-gray-600 text-base">Room for 5-11 passengers</p>
                  </div>

                  <div className="text-center sections border ">
                    <div className="w-15 h-20 mx-auto mb-8 flex items-center justify-center">
                      <img
                        src="assets/images/Wheelchair.svg"
                        alt="Ride app mockup"

                        className=" rounded-2xl h-[489px] w-[863px]"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheelchair</h3>
                    <p className="text-gray-600 text-base">Accessible transportation</p>
                  </div>

                  <div className="text-center sections border ">
                    <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                       <img
                        src="assets/images/Parcel Delivery.svg"
                        alt="Ride app mockup"

                        className=" rounded-2xl h-[489px] w-[863px]"
                        priority
                      />
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
