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
      <div className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Phone mockups */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <img
                src="assets/images/Screenshot_2025-05-29_042337-removebg-preview.png"
                alt="Ride app mockup"
            
                className="w-full max-w-[650px]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Download The App-</span>
              <br />
              <span className="text-[#6b3fa0]">Your Ride Is Just A</span>
              <br />
              <span className="text-[#6b3fa0]">Tap Away</span>
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
              <button className="bg-[#6b3fa0] text-white font-medium px-8 py-3 rounded-md text-lg hover:bg-[#5a3286] transition-colors">
                Book a Ride Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}



export default ServicesSection
