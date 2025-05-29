"use client"

import { Image } from "antd"
import { DollarSign, MapPin } from "lucide-react"


const ServicesSection = () => {
  const services = [
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
  ]

  return (
    <div className="relative w-full overflow-hidden px-[100px] bg-white">
      <div className=" mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8  md:gap-40">
          {/* Phone mockups */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10">
              <img
                src="assets/images/app.png"
                alt="Ride app mockup"

                className=" max-w-[919px]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6  ">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Download The App</span>
              <br />
              <span className="text-[#432469]">Your Ride <span className="text-black">Is Just A</span></span>
              <br />
              <span className="text-[#000000]">Tap Away</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#6b3fa0] flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#6b3fa0]" />
                </div>
                <span className="text-xl font-medium">Transparent Pricing</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#6b3fa0] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#6b3fa0]" />
                </div>
                <span className="text-xl font-medium">Live Driver Tracking</span>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-[#3c1d61] text-white font-medium px-8 py-2 rounded-md text-lg hover:bg-[#5a3286] transition-colors">
                Book a Ride Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 ">

          <div className="w-full md:w-1/2 space-y-6 flex flex-col  justify-center  ">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Drive With </span>
              <br />
              <span className="text-[#432469]">The Captain Taxi  </span>
              <br />
              <span className="text-[#000000]">Be Your Own Boss</span>
              <h1 className="text-[35px] mt-[20px]">Move Sydney Sustainably</h1>
            </h2>
            <p className="text-[30px] mt-[10px] font-normal">We’re here to help, anytime Learn more</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
              <button className="bg-[#3c1d61] text-white font-medium px-8 py-2  text-left rounded-md text-lg hover:bg-[#5a3286] transition-colors">
              Apply to Drive
              </button>
            </div>

          </div>

          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <img
                src="assets/images/driver-men.jfif"
                alt="Ride app mockup"

                className=" rounded-2xl h-[489px] w-[863px]"
                priority
              />
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}



export default ServicesSection
